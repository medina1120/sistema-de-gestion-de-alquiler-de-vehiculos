import { PartialType } from '@nestjs/mapped-types';
import { CreateDevolucionDto } from './create-devolucion.dto';

export class UpdateDevolucionDto extends PartialType(CreateDevolucionDto) {}