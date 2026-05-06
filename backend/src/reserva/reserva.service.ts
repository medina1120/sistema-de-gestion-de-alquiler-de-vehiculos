import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { UpdateReservaDto } from './dto/update-reserva.dto';
import { EstadoVehiculo, EstadoReserva } from '../../generated/prisma';

export { CreateReservaDto, UpdateReservaDto };

// Estados de reserva que ocupan el vehículo (no se permite solapamiento con estos)
const ESTADOS_OCUPANTES: EstadoReserva[] = [
  EstadoReserva.PENDIENTE,
  EstadoReserva.CONFIRMADA,
  EstadoReserva.ACTIVA,
];

@Injectable()
export class ReservaService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.reserva.findMany({
      include: { cliente: true, vehiculo: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: number) {
    const reserva = await this.prisma.reserva.findUnique({
      where: { id },
      include: { cliente: true, vehiculo: true },
    });
    if (!reserva) throw new NotFoundException(`Reserva #${id} no encontrada`);
    return reserva;
  }

  async create(dto: CreateReservaDto) {
    const fechaInicio = new Date(dto.fechaInicio);
    const fechaFin = new Date(dto.fechaFin);

    // 1. Validar fechas
    this.validarFechas(fechaInicio, fechaFin);

    // 2. Validar existencia de cliente y vehículo
    await this.validarClienteYVehiculo(dto.clienteId, dto.vehiculoId);

    // 3. Verificar disponibilidad del vehículo
    await this.verificarDisponibilidad(dto.vehiculoId, fechaInicio, fechaFin);

    return this.prisma.reserva.create({
      data: {
        clienteId: dto.clienteId,
        vehiculoId: dto.vehiculoId,
        fechaInicio,
        fechaFin,
        ...(dto.estado && { estado: dto.estado }),
      },
      include: { cliente: true, vehiculo: true },
    });
  }

  async update(id: number, dto: UpdateReservaDto) {
    const reservaActual = await this.findOne(id);

    const fechaInicio = dto.fechaInicio
      ? new Date(dto.fechaInicio)
      : reservaActual.fechaInicio;
    const fechaFin = dto.fechaFin
      ? new Date(dto.fechaFin)
      : reservaActual.fechaFin;
    const vehiculoId = dto.vehiculoId ?? reservaActual.vehiculoId;

    // Si cambian fechas o vehículo, revalidar disponibilidad (excluyendo esta misma reserva)
    if (dto.fechaInicio || dto.fechaFin || dto.vehiculoId) {
      this.validarFechas(fechaInicio, fechaFin);
      await this.verificarDisponibilidad(vehiculoId, fechaInicio, fechaFin, id);
    }

    if (dto.clienteId && dto.clienteId !== reservaActual.clienteId) {
      const cliente = await this.prisma.cliente.findUnique({
        where: { id: dto.clienteId },
      });
      if (!cliente)
        throw new NotFoundException(`Cliente #${dto.clienteId} no encontrado`);
    }

    return this.prisma.reserva.update({
      where: { id },
      data: {
        ...dto,
        ...(dto.fechaInicio && { fechaInicio: new Date(dto.fechaInicio) }),
        ...(dto.fechaFin && { fechaFin: new Date(dto.fechaFin) }),
      },
      include: { cliente: true, vehiculo: true },
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.reserva.delete({ where: { id } });
  }

  // ============================================================
  // Métodos privados de validación / lógica de negocio
  // ============================================================

  private validarFechas(fechaInicio: Date, fechaFin: Date) {
    if (isNaN(fechaInicio.getTime()) || isNaN(fechaFin.getTime())) {
      throw new BadRequestException('Las fechas proporcionadas no son válidas');
    }
    if (fechaFin <= fechaInicio) {
      throw new BadRequestException(
        'La fecha de fin debe ser posterior a la fecha de inicio',
      );
    }
  }

  private async validarClienteYVehiculo(clienteId: number, vehiculoId: number) {
    const cliente = await this.prisma.cliente.findUnique({
      where: { id: clienteId },
    });
    if (!cliente)
      throw new NotFoundException(`Cliente #${clienteId} no encontrado`);

    const vehiculo = await this.prisma.vehiculo.findUnique({
      where: { id: vehiculoId },
    });
    if (!vehiculo)
      throw new NotFoundException(`Vehículo #${vehiculoId} no encontrado`);
  }

  /**
   * Verifica que el vehículo esté disponible en el rango de fechas dado.
   * - Rechaza si el vehículo está en MANTENIMIENTO o FUERA_DE_SERVICIO.
   * - Rechaza si existe otra reserva en estado ocupante (PENDIENTE/CONFIRMADA/ACTIVA)
   *   cuyo rango de fechas se solapa con el solicitado.
   *
   * @param excludeReservaId - ID de reserva a excluir de la verificación (útil para updates)
   */
  async verificarDisponibilidad(
    vehiculoId: number,
    fechaInicio: Date,
    fechaFin: Date,
    excludeReservaId?: number,
  ) {
    const vehiculo = await this.prisma.vehiculo.findUnique({
      where: { id: vehiculoId },
    });
    if (!vehiculo)
      throw new NotFoundException(`Vehículo #${vehiculoId} no encontrado`);

    if (
      vehiculo.estado === EstadoVehiculo.MANTENIMIENTO ||
      vehiculo.estado === EstadoVehiculo.FUERA_DE_SERVICIO
    ) {
      throw new BadRequestException(
        `El vehículo no está disponible para reserva (estado actual: ${vehiculo.estado})`,
      );
    }

    // Solapamiento: dos rangos [a1,a2] y [b1,b2] se solapan si a1 < b2 && b1 < a2
    const reservasSolapadas = await this.prisma.reserva.findMany({
      where: {
        vehiculoId,
        estado: { in: ESTADOS_OCUPANTES },
        fechaInicio: { lt: fechaFin },
        fechaFin: { gt: fechaInicio },
        ...(excludeReservaId !== undefined && { id: { not: excludeReservaId } }),
      },
    });

    if (reservasSolapadas.length > 0) {
      throw new ConflictException(
        `El vehículo ya tiene una reserva activa que se solapa con las fechas solicitadas (reserva #${reservasSolapadas[0].id})`,
      );
    }
  }
}
