import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Turma } from '../entity/turma.entity';
import { TurmasRepository } from '../repository/turmas.repository';
import { TurmasService } from '../service/turmas.service';
import { TurmasController } from '../controller/turmas.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Turma])],
  providers: [TurmasRepository, TurmasService],
  controllers: [TurmasController],
})
export class TurmasModule {}
