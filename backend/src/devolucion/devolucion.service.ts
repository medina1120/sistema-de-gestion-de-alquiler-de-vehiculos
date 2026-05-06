import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDevolucionDto } from './dto/create-devolucion.dto';
import { UpdateDevolucionDto } from './dto/update-devolucion.dto';
import {
  EstadoContrato,
  EstadoReserva,
  EstadoVehiculo,
} from '../../generated/prisma';

export { CreateDevolucionDto, UpdateDevolucionDto };

// Constantes de cargos (ajustables según política de la empresa)
const MS_POR_DIA = 1000 * 60 * 60 * 24;
const MULTIPLICADOR_RETRASO = 1.5; // 50% extra sobre precio diario por día tardío
const CARGO_VEHICULO_DANADO = 200000;
const CARGO_VEHICULO_REGULAR = 50000;
const CARGO_VEHICULO_BUENO = 0;

const ESTADOS_VEHICULO_VALIDOS = ['BUENO', 'REGULAR', 'DAÑADO', 'DANADO'];

@Injectable()
export class DevolucionService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.devolucion.findMany({
      include: {
        contrato: {
          include: {
            reserva: { include: { cliente: true, vehiculo: true } },
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: number) {
    const devolucion = await this.prisma.devolucion.findUnique({
      where: { id },
      include: {
        contrato: {
          include: {
            reserva: { include: { cliente: true, vehiculo: true } },
          },
        },
      },
    });
    if (!devolucion)
      throw new NotFoundException(`Devolución #${id} no encontrada`);
    return devolucion;
  }

  /**
   * Registra la devolución de un vehículo:
   *  - Valida que el contrato exista y esté VIGENTE.
   *  - Valida que el kilometraje de retorno sea coherente.
   *  - Calcula los cargos adicionales (retraso + estado del vehículo).
   *  - Cierra el flujo: contrato → FINALIZADO, reserva → FINALIZADA,
   *    vehículo → DISPONIBLE y actualiza su kilometraje.
   *  - Todo dentro de una transacción.
   */
  async create(dto: CreateDevolucionDto) {
    return this.prisma.$transaction(async (tx) => {
      // 1. Buscar contrato + reserva + vehículo
      const contrato = await tx.contrato.findUnique({
        where: { id: dto.contratoId },
        include: {
          reserva: { include: { vehiculo: true } },
          devolucion: true,
        },
      });
      if (!contrato) {
        throw new NotFoundException(
          `Contrato #${dto.contratoId} no encontrado`,
        );
      }

      // 2. Validar que el contrato esté VIGENTE
      if (contrato.estado !== EstadoContrato.VIGENTE) {
        throw new BadRequestException(
          `El contrato no está vigente (estado actual: ${contrato.estado})`,
        );
      }

      // 3. Validar que no exista ya una devolución para ese contrato
      if (contrato.devolucion) {
        throw new BadRequestException(
          `El contrato #${contrato.id} ya tiene una devolución registrada`,
        );
      }

      // 4. Validar estadoVehiculo
      const estadoNormalizado = dto.estadoVehiculo.toUpperCase();
      if (!ESTADOS_VEHICULO_VALIDOS.includes(estadoNormalizado)) {
        throw new BadRequestException(
          `Estado del vehículo inválido. Valores permitidos: BUENO, REGULAR, DAÑADO`,
        );
      }

      // 5. Validar kilometraje de retorno
      const vehiculo = contrato.reserva.vehiculo;
      if (dto.kilometrajeRetorno < vehiculo.kilometraje) {
        throw new BadRequestException(
          `El kilometraje de retorno (${dto.kilometrajeRetorno}) no puede ser menor al actual del vehículo (${vehiculo.kilometraje})`,
        );
      }

      const fechaDevolucion = new Date(dto.fechaDevolucion);
      if (isNaN(fechaDevolucion.getTime())) {
        throw new BadRequestException('La fecha de devolución no es válida');
      }

      // 6. Calcular cargos adicionales (si el usuario no envía override)
      const cargosCalculados = this.calcularCargos(
        fechaDevolucion,
        contrato.reserva.fechaFin,
        vehiculo.precioPorDia,
        estadoNormalizado,
      );
      const cargosAdicionales =
        dto.cargosAdicionales !== undefined
          ? dto.cargosAdicionales
          : cargosCalculados;

      // 7. Crear el registro de devolución
      const devolucion = await tx.devolucion.create({
        data: {
          contratoId: contrato.id,
          fechaDevolucion,
          estadoVehiculo: estadoNormalizado,
          kilometrajeRetorno: dto.kilometrajeRetorno,
          cargosAdicionales,
          observaciones: dto.observaciones,
        },
        include: {
          contrato: {
            include: {
              reserva: { include: { cliente: true, vehiculo: true } },
            },
          },
        },
      });

      // 8. Cerrar contrato
      await tx.contrato.update({
        where: { id: contrato.id },
        data: { estado: EstadoContrato.FINALIZADO },
      });

      // 9. Cerrar reserva
      await tx.reserva.update({
        where: { id: contrato.reservaId },
        data: { estado: EstadoReserva.FINALIZADA },
      });

      // 10. Liberar vehículo y actualizar su kilometraje
      await tx.vehiculo.update({
        where: { id: vehiculo.id },
        data: {
          estado: EstadoVehiculo.DISPONIBLE,
          kilometraje: dto.kilometrajeRetorno,
        },
      });

      return devolucion;
    });
  }

  async update(id: number, dto: UpdateDevolucionDto) {
    await this.findOne(id);
    return this.prisma.devolucion.update({
      where: { id },
      data: {
        ...dto,
        ...(dto.fechaDevolucion && {
          fechaDevolucion: new Date(dto.fechaDevolucion),
        }),
      },
      include: {
        contrato: {
          include: {
            reserva: { include: { cliente: true, vehiculo: true } },
          },
        },
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.devolucion.delete({ where: { id } });
  }

  // ============================================================
  // Helpers de cálculo
  // ============================================================

  /**
   * Calcula los cargos adicionales en una devolución:
   *  - Cargo por retraso: días tardíos × precioPorDia × MULTIPLICADOR_RETRASO
   *  - Cargo por estado del vehículo: fijo según BUENO/REGULAR/DAÑADO
   */
  private calcularCargos(
    fechaDevolucion: Date,
    fechaFinReserva: Date,
    precioPorDia: number,
    estadoVehiculo: string,
  ): number {
    let cargos = 0;

    // 1. Cargo por retraso
    const msRetraso = fechaDevolucion.getTime() - fechaFinReserva.getTime();
    if (msRetraso > 0) {
      const diasRetraso = Math.ceil(msRetraso / MS_POR_DIA);
      cargos += diasRetraso * precioPorDia * MULTIPLICADOR_RETRASO;
    }

    // 2. Cargo por estado del vehículo
    if (estadoVehiculo === 'DAÑADO' || estadoVehiculo === 'DANADO') {
      cargos += CARGO_VEHICULO_DANADO;
    } else if (estadoVehiculo === 'REGULAR') {
      cargos += CARGO_VEHICULO_REGULAR;
    } else {
      cargos += CARGO_VEHICULO_BUENO;
    }

    return cargos;
  }
}
