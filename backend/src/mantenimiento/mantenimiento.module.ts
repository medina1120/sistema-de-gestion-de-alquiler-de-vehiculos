import { Module } from '@nestjs/common';
import { MantenimientoController } from './mantenimiento.controller';
import { MantenimientoService } from './mantenimiento.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [MantenimientoController],
  providers: [MantenimientoService, PrismaService],
})
export class MantenimientoModule {}