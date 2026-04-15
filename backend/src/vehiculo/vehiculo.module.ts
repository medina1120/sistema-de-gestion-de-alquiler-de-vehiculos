import { Module } from '@nestjs/common';
import { VehiculoController } from './vehiculo.controller';
import { VehiculoService } from './vehiculo.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [VehiculoController],
  providers: [VehiculoService, PrismaService],
})
export class VehiculoModule {}