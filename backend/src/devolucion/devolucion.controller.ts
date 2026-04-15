import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { DevolucionService, CreateDevolucionDto, UpdateDevolucionDto } from './devolucion.service';

@Controller('devolucion')
export class DevolucionController {
  constructor(private readonly devolucionService: DevolucionService) {}

  @Get()
  findAll() { return this.devolucionService.findAll(); }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) { return this.devolucionService.findOne(id); }

  @Post()
  create(@Body() dto: CreateDevolucionDto) { return this.devolucionService.create(dto); }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateDevolucionDto) { return this.devolucionService.update(id, dto); }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) { return this.devolucionService.remove(id); }
}