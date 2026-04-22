import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateContratoDto } from './dto/create-contrato.dto';
import { UpdateContratoDto } from './dto/update-contrato.dto';

export { CreateContratoDto, UpdateContratoDto };

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
    if (!contrato) throw new NotFoundException('Contrato no encontrado');
    return contrato;
  }

  async create(dto: CreateContratoDto) {
    return this.prisma.contrato.create({
      data: {
        ...dto,
        fechaEntrega: new Date(dto.fechaEntrega),
      },
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
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.contrato.delete({ where: { id } });
  }
}