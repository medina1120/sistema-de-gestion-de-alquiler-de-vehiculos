import { Module } from '@nestjs/common';
import { ReservaController } from './reserva.controller';
import { ReservaService } from './reserva.service';

@Module({
  controllers: [ReservaController],
  providers: [ReservaService]
})
export class ReservaModule {}
