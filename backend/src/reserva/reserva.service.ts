import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { UpdateReservaDto } from './dto/update-reserva.dto';

export { CreateReservaDto, UpdateReservaDto };

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
    return this.prisma.reserva.create({
      data: {
        ...dto,
        fechaInicio: new Date(dto.fechaInicio),
        fechaFin: new Date(dto.fechaFin),
      },
      include: { cliente: true, vehiculo: true },
    });
  }

  async update(id: number, dto: UpdateReservaDto) {
    await this.findOne(id);
    return this.prisma.reserva.update({
      where: { id },
      data: {
        ...dto,
        ...(dto.fechaInicio && { fechaInicio: new Date(dto.fechaInicio) }),
        ...(dto.fechaFin && { fechaFin: new Date(dto.fechaFin) }),
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.reserva.delete({ where: { id } });
  }
}
