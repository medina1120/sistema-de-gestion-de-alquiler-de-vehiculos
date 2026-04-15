import { Module } from '@nestjs/common';
import { ContratoController } from './contrato.controller';
import { ContratoService } from './contrato.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [ContratoController],
  providers: [ContratoService, PrismaService],
})
export class ContratoModule {}