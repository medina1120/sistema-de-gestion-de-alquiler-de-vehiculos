import { IsNumber, IsDateString, IsString, IsEnum, IsNotEmpty } from 'class-validator';
import { TipoMantenimiento } from '../../../generated/prisma';

export class CreateMantenimientoDto {
  @IsNumber()
  @IsNotEmpty()
  vehiculoId: number;

  @IsEnum(TipoMantenimiento)
  @IsNotEmpty()
  tipo: TipoMantenimiento;

  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @IsNumber()
  @IsNotEmpty()
  costo: number;

  @IsDateString()
  @IsNotEmpty()
  fecha: string;
}