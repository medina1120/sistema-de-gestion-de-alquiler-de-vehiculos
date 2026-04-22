import { IsString, IsNumber, IsEnum, IsOptional, IsNotEmpty } from 'class-validator';
import { TipoVehiculo, EstadoVehiculo } from '../../../generated/prisma';

export class CreateVehiculoDto {
  @IsString()
  @IsNotEmpty()
  marca: string;

  @IsString()
  @IsNotEmpty()
  modelo: string;

  @IsNumber()
  @IsNotEmpty()
  anio: number;

  @IsString()
  @IsNotEmpty()
  placa: string;

  @IsEnum(TipoVehiculo)
  @IsNotEmpty()
  tipo: TipoVehiculo;

  @IsEnum(EstadoVehiculo)
  @IsOptional()
  estado?: EstadoVehiculo;

  @IsNumber()
  @IsNotEmpty()
  precioPorDia: number;

  @IsNumber()
  @IsOptional()
  kilometraje?: number;
}