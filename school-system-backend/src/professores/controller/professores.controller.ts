import { Controller, Get, Post, Body, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { ProfessoresService } from '../service/professores.service';
import { CreateProfessorDto } from '../dto/create-professor.dto';

@Controller('professores')
export class ProfessoresController {
  constructor(private readonly professoresService: ProfessoresService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.professoresService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: string) {
    return this.professoresService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateProfessorDto) {
    return this.professoresService.create(dto);
  }
}
