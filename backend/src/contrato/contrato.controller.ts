import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { ContratoService, CreateContratoDto, UpdateContratoDto } from './contrato.service';

@Controller('contrato')
export class ContratoController {
  constructor(private readonly contratoService: ContratoService) {}

  @Get()
  findAll() { return this.contratoService.findAll(); }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) { return this.contratoService.findOne(id); }

  @Post()
  create(@Body() dto: CreateContratoDto) { return this.contratoService.create(dto); }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateContratoDto) { return this.contratoService.update(id, dto); }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) { return this.contratoService.remove(id); }
}