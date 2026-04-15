import { Module } from '@nestjs/common';
import { DevolucionController } from './devolucion.controller';
import { DevolucionService } from './devolucion.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [DevolucionController],
  providers: [DevolucionService, PrismaService],
})
export class DevolucionModule {}