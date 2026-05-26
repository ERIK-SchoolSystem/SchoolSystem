import { Injectable, NotFoundException } from '@nestjs/common';
import { NotasRepository } from '../repository/notas.repository';
import { CreateNotaDto } from '../dto/create-nota.dto';
import { Nota } from '../entity/nota.entity';

@Injectable()
export class NotasService {
  constructor(private readonly notasRepository: NotasRepository) {}

  async findAll(): Promise<Nota[]> {
    return this.notasRepository.findAll();
  }

  async findOne(id: string): Promise<Nota> {
    const nota = await this.notasRepository.findOne(id);

    if (!nota) {
      throw new NotFoundException('Nota não encontrada.');
    }

    return nota;
  }

  async create(dto: CreateNotaDto): Promise<Nota> {
    return this.notasRepository.create(dto);
  }
}
