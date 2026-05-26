import { Injectable, NotFoundException } from '@nestjs/common';
import { FrequenciaRepository } from '../repository/frequencia.repository';
import { CreateFrequenciaDto } from '../dto/create-frequencia.dto';
import { Frequencia } from '../entity/frequencia.entity';

@Injectable()
export class FrequenciaService {
  constructor(private readonly frequenciaRepository: FrequenciaRepository) {}

  async findAll(): Promise<Frequencia[]> {
    return this.frequenciaRepository.findAll();
  }

  async findOne(id: string): Promise<Frequencia> {
    const frequencia = await this.frequenciaRepository.findOne(id);

    if (!frequencia) {
      throw new NotFoundException('Registro de frequência não encontrado.');
    }

    return frequencia;
  }

  async create(dto: CreateFrequenciaDto): Promise<Frequencia> {
    return this.frequenciaRepository.create(dto);
  }
}
