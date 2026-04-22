import { PartialType } from '@nestjs/mapped-types';
import { CreateMantenimientoDto } from './create-mantenimiento.dto';

export class UpdateMantenimientoDto extends PartialType(CreateMantenimientoDto) {}
