import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateVehiculoDto } from './dto/create-vehiculo.dto';
import { UpdateVehiculoDto } from './dto/update-vehiculo.dto';

export { CreateVehiculoDto, UpdateVehiculoDto };

@Injectable()
export class VehiculoService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.vehiculo.findMany({ orderBy: { createdAt: 'desc' } });
  }

  async findOne(id: number) {
    const vehiculo = await this.prisma.vehiculo.findUnique({ where: { id } });
    if (!vehiculo) throw new NotFoundException(`Vehículo #${id} no encontrado`);
    return vehiculo;
  }

  async create(dto: CreateVehiculoDto) {
    return this.prisma.vehiculo.create({ data: dto });
  }

  async update(id: number, dto: UpdateVehiculoDto) {
    await this.findOne(id);
    return this.prisma.vehiculo.update({ where: { id }, data: dto });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.vehiculo.delete({ where: { id } });
  }
}
