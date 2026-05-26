import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Frequencia } from '../entity/frequencia.entity';
import { CreateFrequenciaDto } from '../dto/create-frequencia.dto';

@Injectable()
export class FrequenciaRepository {
  constructor(
    @InjectRepository(Frequencia)
    private readonly repo: Repository<Frequencia>,
  ) {}

  async findAll(): Promise<Frequencia[]> {
    return this.repo.find({
      where: { registroAtivo: true },
      order: { data: 'DESC' },
    });
  }

  async findOne(id: string): Promise<Frequencia | null> {
    return this.repo.findOne({
      where: { id: parseInt(id), registroAtivo: true },
    });
  }

  async create(dto: CreateFrequenciaDto): Promise<Frequencia> {
    const frequencia = this.repo.create(dto);
    return this.repo.save(frequencia);
  }
}
