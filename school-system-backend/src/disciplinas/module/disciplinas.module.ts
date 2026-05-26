import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Disciplina } from '../entity/disciplina.entity';
import { DisciplinasRepository } from '../repository/disciplinas.repository';
import { DisciplinasService } from '../service/disciplinas.service';
import { DisciplinasController } from '../controller/disciplinas.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Disciplina])],
  providers: [DisciplinasRepository, DisciplinasService],
  controllers: [DisciplinasController],
})
export class DisciplinasModule {}
