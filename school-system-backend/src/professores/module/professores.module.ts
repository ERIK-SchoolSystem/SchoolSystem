import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Professor } from '../entity/professor.entity';
import { ProfessoresRepository } from '../repository/professores.repository';
import { ProfessoresService } from '../service/professores.service';
import { ProfessoresController } from '../controller/professores.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Professor])],
  providers: [ProfessoresRepository, ProfessoresService],
  controllers: [ProfessoresController],
})
export class ProfessoresModule {}
