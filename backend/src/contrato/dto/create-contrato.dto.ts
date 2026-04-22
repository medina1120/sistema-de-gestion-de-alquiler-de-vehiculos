import { IsNumber, IsDateString, IsString, IsEnum, IsOptional, IsNotEmpty } from 'class-validator';
import { EstadoContrato } from '../../../generated/prisma';

export class CreateContratoDto {
  @IsNumber()
  @IsNotEmpty()
  reservaId: number;

  @IsDateString()
  @IsNotEmpty()
  fechaEntrega: string;

  @IsNumber()
  @IsNotEmpty()
  valorTotal: number;

  @IsString()
  @IsOptional()
  condiciones?: string;

  @IsEnum(EstadoContrato)
  @IsOptional()
  estado?: EstadoContrato;
}