import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aluno } from '../entity/aluno.entity';
import { AlunosRepository } from '../repository/alunos.repository';
import { AlunosService } from '../service/alunos.service';
import { AlunosController } from '../controller/alunos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Aluno])],
  providers: [AlunosRepository, AlunosService],
  controllers: [AlunosController],
})
export class AlunosModule {}