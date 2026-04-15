import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

export class CreateDevolucionDto {
  contratoId: number;
  fechaDevolucion: string;
  estadoVehiculo: string;
  kilometrajeRetorno: number;
  cargosAdicionales?: number;
  observaciones?: string;
}

export class UpdateDevolucionDto {
  fechaDevolucion?: string;
  estadoVehiculo?: string;
  kilometrajeRetorno?: number;
  cargosAdicionales?: number;
  observaciones?: string;
}

@Injectable()
export class DevolucionService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.devolucion.findMany({
      include: { contrato: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: number) {
    const devolucion = await this.prisma.devolucion.findUnique({
      where: { id },
      include: { contrato: true },
    });
    if (!devolucion) throw new NotFoundException(`Devolución #${id} no encontrada`);
    return devolucion;
  }

  async create(dto: CreateDevolucionDto) {
    return this.prisma.devolucion.create({
      data: {
        ...dto,
        fechaDevolucion: new Date(dto.fechaDevolucion),
      },
    });
  }

  async update(id: number, dto: UpdateDevolucionDto) {
    await this.findOne(id);
    return this.prisma.devolucion.update({
      where: { id },
      data: {
        ...dto,
        ...(dto.fechaDevolucion && { fechaDevolucion: new Date(dto.fechaDevolucion) }),
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.devolucion.delete({ where: { id } });
  }
}