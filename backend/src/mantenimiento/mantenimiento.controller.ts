import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { MantenimientoService, CreateMantenimientoDto, UpdateMantenimientoDto } from './mantenimiento.service';

@Controller('mantenimiento')
export class MantenimientoController {
  constructor(private readonly mantenimientoService: MantenimientoService) {}

  @Get()
  findAll() { return this.mantenimientoService.findAll(); }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) { return this.mantenimientoService.findOne(id); }

  @Post()
  create(@Body() dto: CreateMantenimientoDto) { return this.mantenimientoService.create(dto); }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateMantenimientoDto) { return this.mantenimientoService.update(id, dto); }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) { return this.mantenimientoService.remove(id); }
}