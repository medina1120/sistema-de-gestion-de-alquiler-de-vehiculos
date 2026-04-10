import { Module } from '@nestjs/common';
import { VehiculoController } from './vehiculo.controller';
import { VehiculoService } from './vehiculo.service';

@Module({
  controllers: [VehiculoController],
  providers: [VehiculoService]
})
export class VehiculoModule {}
