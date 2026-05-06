import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

export { CreateClienteDto, UpdateClienteDto };

@Injectable()
export class ClienteService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.cliente.findMany({ orderBy: { createdAt: 'desc' } });
  }

  /**
   * Devuelve el cliente con su historial completo de reservas (HU-10).
   * Cada reserva incluye su vehículo y, si existe, su contrato y devolución.
   */
  async findOne(id: number) {
    const cliente = await this.prisma.cliente.findUnique({
      where: { id },
      include: {
        reservas: {
          orderBy: { createdAt: 'desc' },
          include: {
            vehiculo: true,
            contrato: { include: { devolucion: true } },
          },
        },
      },
    });
    if (!cliente) throw new NotFoundException(`Cliente #${id} no encontrado`);
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
