import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module'; 
import { VehiculoModule } from './vehiculo/vehiculo.module';
import { ClienteModule } from './cliente/cliente.module';
import { ReservaModule } from './reserva/reserva.module';
import { ContratoModule } from './contrato/contrato.module';
import { DevolucionModule } from './devolucion/devolucion.module';
import { MantenimientoModule } from './mantenimiento/mantenimiento.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // Lee .env automáticamente
    PrismaModule, VehiculoModule, ClienteModule, ReservaModule, ContratoModule, DevolucionModule, MantenimientoModule,                              // Conexión a la BD
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}