import { Controller, Get, Post, Body, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { NotasService } from '../service/notas.service';
import { CreateNotaDto } from '../dto/create-nota.dto';

@Controller('notas')
export class NotasController {
  constructor(private readonly notasService: NotasService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.notasService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: string) {
    return this.notasService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateNotaDto) {
    return this.notasService.create(dto);
  }
}
