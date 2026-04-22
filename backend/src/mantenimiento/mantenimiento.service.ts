import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMantenimientoDto } from './dto/create-mantenimiento.dto';
import { UpdateMantenimientoDto } from './dto/update-mantenimiento.dto';

export { CreateMantenimientoDto, UpdateMantenimientoDto };

@Injectable()
export class MantenimientoService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.mantenimiento.findMany({
      include: { vehiculo: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: number) {
    const mantenimiento = await this.prisma.mantenimiento.findUnique({
      where: { id },
      include: { vehiculo: true },
    });
    if (!mantenimiento) throw new NotFoundException(`Mantenimiento #${id} no encontrado`);
    return mantenimiento;
  }

  async create(dto: CreateMantenimientoDto) {
    return this.prisma.mantenimiento.create({
      data: { ...dto, fecha: new Date(dto.fecha) },
    });
  }

  async update(id: number, dto: UpdateMantenimientoDto) {
    await this.findOne(id);
    return this.prisma.mantenimiento.update({
      where: { id },
      data: { ...dto, ...(dto.fecha && { fecha: new Date(dto.fecha) }) },
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.mantenimiento.delete({ where: { id } });
  }
}