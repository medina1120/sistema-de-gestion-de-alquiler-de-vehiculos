import { Module } from '@nestjs/common';
import { ReservaController } from './reserva.controller';
import { ReservaService } from './reserva.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [ReservaController],
  providers: [ReservaService, PrismaService],
})
export class ReservaModule {}