import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { VehiculoService, CreateVehiculoDto, UpdateVehiculoDto } from './vehiculo.service';

@Controller('vehiculo')
export class VehiculoController {
  constructor(private readonly vehiculoService: VehiculoService) {}

  @Get()
  findAll() { return this.vehiculoService.findAll(); }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) { return this.vehiculoService.findOne(id); }

  @Post()
  create(@Body() dto: CreateVehiculoDto) { return this.vehiculoService.create(dto); }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateVehiculoDto) { return this.vehiculoService.update(id, dto); }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) { return this.vehiculoService.remove(id); }
}