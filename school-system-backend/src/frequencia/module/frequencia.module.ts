import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Frequencia } from '../entity/frequencia.entity';
import { FrequenciaRepository } from '../repository/frequencia.repository';
import { FrequenciaService } from '../service/frequencia.service';
import { FrequenciaController } from '../controller/frequencia.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Frequencia])],
  providers: [FrequenciaRepository, FrequenciaService],
  controllers: [FrequenciaController],
})
export class FrequenciaModule {}
