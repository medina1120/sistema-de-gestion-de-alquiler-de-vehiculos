import { IsNumber, IsDateString, IsString, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateDevolucionDto {
  @IsNumber()
  @IsNotEmpty()
  contratoId: number;

  @IsDateString()
  @IsNotEmpty()
  fechaDevolucion: string;

  @IsString()
  @IsNotEmpty()
  estadoVehiculo: string;

  @IsNumber()
  @IsNotEmpty()
  kilometrajeRetorno: number;

  @IsNumber()
  @IsOptional()
  cargosAdicionales?: number;

  @IsString()
  @IsOptional()
  observaciones?: string;
}