import { IsNumber, IsDateString, IsEnum, IsOptional, IsNotEmpty } from 'class-validator';
import { EstadoReserva } from '../../../generated/prisma';

export class CreateReservaDto {
  @IsNumber()
  @IsNotEmpty()
  clienteId: number;

  @IsNumber()
  @IsNotEmpty()
  vehiculoId: number;

  @IsDateString()
  @IsNotEmpty()
  fechaInicio: string;

  @IsDateString()
  @IsNotEmpty()
  fechaFin: string;

  @IsEnum(EstadoReserva)
  @IsOptional()
  estado?: EstadoReserva;
}