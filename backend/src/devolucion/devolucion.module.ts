import { Module } from '@nestjs/common';
import { DevolucionController } from './devolucion.controller';
import { DevolucionService } from './devolucion.service';

@Module({
  controllers: [DevolucionController],
  providers: [DevolucionService]
})
export class DevolucionModule {}
