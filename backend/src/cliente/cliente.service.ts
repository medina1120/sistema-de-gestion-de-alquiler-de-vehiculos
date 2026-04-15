import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

export class CreateClienteDto {
  nombres: string;
  apellidos: string;
  documentoIdentidad: string;
  licenciaConduccion: string;
  correo: string;
  telefono: string;
  direccion?: string;
}

export class UpdateClienteDto {
  nombres?: string;
  apellidos?: string;
  documentoIdentidad?: string;
  licenciaConduccion?: string;
  correo?: string;
  telefono?: string;
  direccion?: string;
}

@Injectable()
export class ClienteService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.cliente.findMany({ orderBy: { createdAt: 'desc' } });
  }

  async findOne(id: number) {
    const cliente = await this.prisma.cliente.findUnique({ where: { id } });
    if (!cliente) throw new NotFoundException('Cliente no encontrado');
    return cliente;
  }

  async create(dto: CreateClienteDto) {
    return this.prisma.cliente.create({ data: dto });
  }

  async update(id: number, dto: UpdateClienteDto) {
    await this.findOne(id);
    return this.prisma.cliente.update({ where: { id }, data: dto });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.cliente.delete({ where: { id } });
  }
}