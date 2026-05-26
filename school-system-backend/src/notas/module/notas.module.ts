import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Nota } from '../entity/nota.entity';
import { NotasRepository } from '../repository/notas.repository';
import { NotasService } from '../service/notas.service';
import { NotasController } from '../controller/notas.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Nota])],
  providers: [NotasRepository, NotasService],
  controllers: [NotasController],
})
export class NotasModule {}
