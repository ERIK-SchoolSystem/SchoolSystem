import { Controller, Get, Post, Body, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { TurmasService } from '../service/turmas.service';
import { CreateTurmaDto } from '../dto/create-turma.dto';

@Controller('turmas')
export class TurmasController {
  constructor(private readonly turmasService: TurmasService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.turmasService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: string) {
    return this.turmasService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateTurmaDto) {
    return this.turmasService.create(dto);
  }
}
