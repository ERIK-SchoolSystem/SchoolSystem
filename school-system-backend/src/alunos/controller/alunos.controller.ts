import { Controller, Get, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AlunosService } from '../service/alunos.service';
import { CreateAlunoDto } from '../dto/create-aluno.dto';

@Controller('alunos')
export class AlunosController {
  constructor(private readonly alunosService: AlunosService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.alunosService.findAll();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateAlunoDto) {
    return this.alunosService.create(dto);
  }
}