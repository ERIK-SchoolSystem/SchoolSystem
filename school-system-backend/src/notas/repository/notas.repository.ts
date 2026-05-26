import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Nota } from '../entity/nota.entity';
import { CreateNotaDto } from '../dto/create-nota.dto';

@Injectable()
export class NotasRepository {
  constructor(
    @InjectRepository(Nota)
    private readonly repo: Repository<Nota>,
  ) {}

  async findAll(): Promise<Nota[]> {
    return this.repo.find({
      where: { status: 'ATIVO' },
      order: { ano: 'DESC', bimestre: 'DESC' },
    });
  }

  async findOne(id: string): Promise<Nota | null> {
    return this.repo.findOne({
      where: { id: parseInt(id), status: 'ATIVO' },
    });
  }

  async create(dto: CreateNotaDto): Promise<Nota> {
    const nota = this.repo.create(dto);
    return this.repo.save(nota);
  }
}
