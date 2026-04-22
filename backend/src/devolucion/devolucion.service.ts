import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDevolucionDto } from './dto/create-devolucion.dto';
import { UpdateDevolucionDto } from './dto/update-devolucion.dto';

export { CreateDevolucionDto, UpdateDevolucionDto };

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