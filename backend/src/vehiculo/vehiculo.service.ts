import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateVehiculoDto } from './dto/create-vehiculo.dto';
import { UpdateVehiculoDto } from './dto/update-vehiculo.dto';
import { EstadoVehiculo } from '../../generated/prisma';

export { CreateVehiculoDto, UpdateVehiculoDto };

@Injectable()
export class VehiculoService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.vehiculo.findMany({ orderBy: { createdAt: 'desc' } });
  }

  /**
   * Lista solo los vehículos en estado DISPONIBLE (HU-09).
   */
  async findDisponibles() {
    return this.prisma.vehiculo.findMany({
      where: { estado: EstadoVehiculo.DISPONIBLE },
      orderBy: { createdAt: 'desc' },
    });
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

  /**
   * Cambia el estado de un vehículo (HU-07).
   * Valida que el nuevo estado sea uno de los enum permitidos.
   */
  async cambiarEstado(id: number, nuevoEstado: string) {
    await this.findOne(id);

    const estadosValidos = Object.values(EstadoVehiculo) as string[];
    if (!estadosValidos.includes(nuevoEstado)) {
      throw new BadRequestException(
        `Estado inválido. Valores permitidos: ${estadosValidos.join(', ')}`,
      );
    }

    return this.prisma.vehiculo.update({
      where: { id },
      data: { estado: nuevoEstado as EstadoVehiculo },
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.vehiculo.delete({ where: { id } });
  }
}
