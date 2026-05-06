import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateContratoDto } from './dto/create-contrato.dto';
import { UpdateContratoDto } from './dto/update-contrato.dto';
import {
  EstadoReserva,
  EstadoVehiculo,
  EstadoContrato,
} from '../../generated/prisma';

export { CreateContratoDto, UpdateContratoDto };

// Constante: ms por día
const MS_POR_DIA = 1000 * 60 * 60 * 24;

@Injectable()
export class ContratoService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.contrato.findMany({
      include: { reserva: { include: { cliente: true, vehiculo: true } } },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: number) {
    const contrato = await this.prisma.contrato.findUnique({
      where: { id },
      include: { reserva: { include: { cliente: true, vehiculo: true } } },
    });
    if (!contrato) throw new NotFoundException(`Contrato #${id} no encontrado`);
    return contrato;
  }

  /**
   * Genera un contrato a partir de una reserva.
   *  - Valida que la reserva exista y esté en estado PENDIENTE o CONFIRMADA.
   *  - Valida que el vehículo esté DISPONIBLE.
   *  - Calcula el valorTotal = días * precioPorDia del vehículo.
   *  - Cambia la reserva a ACTIVA y el vehículo a ALQUILADO.
   *  - Todo dentro de una transacción para garantizar consistencia.
   */
  async create(dto: CreateContratoDto) {
    return this.prisma.$transaction(async (tx) => {
      // 1. Buscar la reserva con su vehículo
      const reserva = await tx.reserva.findUnique({
        where: { id: dto.reservaId },
        include: { vehiculo: true, contrato: true },
      });
      if (!reserva) {
        throw new NotFoundException(
          `Reserva #${dto.reservaId} no encontrada`,
        );
      }

      // 2. Validar que la reserva esté en un estado válido para generar contrato
      if (
        reserva.estado !== EstadoReserva.PENDIENTE &&
        reserva.estado !== EstadoReserva.CONFIRMADA
      ) {
        throw new BadRequestException(
          `La reserva no se puede contratar (estado actual: ${reserva.estado})`,
        );
      }

      // 3. Validar que la reserva no tenga ya un contrato
      if (reserva.contrato) {
        throw new ConflictException(
          `La reserva #${reserva.id} ya tiene un contrato asociado`,
        );
      }

      // 4. Validar que el vehículo esté disponible
      if (reserva.vehiculo.estado !== EstadoVehiculo.DISPONIBLE) {
        throw new BadRequestException(
          `El vehículo no está disponible (estado actual: ${reserva.vehiculo.estado})`,
        );
      }

      // 5. Calcular el valor total: días * precio por día
      const dias = this.calcularDias(
        reserva.fechaInicio,
        reserva.fechaFin,
      );
      const valorTotal = dias * reserva.vehiculo.precioPorDia;

      // 6. Crear el contrato
      const contrato = await tx.contrato.create({
        data: {
          reservaId: reserva.id,
          fechaEntrega: new Date(dto.fechaEntrega),
          valorTotal,
          condiciones: dto.condiciones,
          estado: dto.estado ?? EstadoContrato.VIGENTE,
        },
        include: { reserva: { include: { cliente: true, vehiculo: true } } },
      });

      // 7. Actualizar el estado de la reserva a ACTIVA
      await tx.reserva.update({
        where: { id: reserva.id },
        data: { estado: EstadoReserva.ACTIVA },
      });

      // 8. Actualizar el estado del vehículo a ALQUILADO
      await tx.vehiculo.update({
        where: { id: reserva.vehiculoId },
        data: { estado: EstadoVehiculo.ALQUILADO },
      });

      return contrato;
    });
  }

  async update(id: number, dto: UpdateContratoDto) {
    await this.findOne(id);
    return this.prisma.contrato.update({
      where: { id },
      data: {
        ...dto,
        ...(dto.fechaEntrega && { fechaEntrega: new Date(dto.fechaEntrega) }),
      },
      include: { reserva: { include: { cliente: true, vehiculo: true } } },
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.contrato.delete({ where: { id } });
  }

  // ============================================================
  // Helpers
  // ============================================================

  /**
   * Calcula el número de días entre dos fechas (mínimo 1 día).
   */
  private calcularDias(fechaInicio: Date, fechaFin: Date): number {
    const ms = fechaFin.getTime() - fechaInicio.getTime();
    const dias = Math.ceil(ms / MS_POR_DIA);
    return Math.max(1, dias);
  }
}
