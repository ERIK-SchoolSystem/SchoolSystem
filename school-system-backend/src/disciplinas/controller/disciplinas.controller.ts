import { Controller, Get, Post, Body, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { DisciplinasService } from '../service/disciplinas.service';
import { CreateDisciplinaDto } from '../dto/create-disciplina.dto';

@Controller('disciplinas')
export class DisciplinasController {
  constructor(private readonly disciplinasService: DisciplinasService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.disciplinasService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: string) {
    return this.disciplinasService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateDisciplinaDto) {
    return this.disciplinasService.create(dto);
  }
}
