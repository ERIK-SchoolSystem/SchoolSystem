import { Controller, Get, Post, Body, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { FrequenciaService } from '../service/frequencia.service';
import { CreateFrequenciaDto } from '../dto/create-frequencia.dto';

@Controller('frequencia')
export class FrequenciaController {
  constructor(private readonly frequenciaService: FrequenciaService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.frequenciaService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: string) {
    return this.frequenciaService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateFrequenciaDto) {
    return this.frequenciaService.create(dto);
  }
}
