import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Turma } from '../entity/turma.entity';
import { CreateTurmaDto } from '../dto/create-turma.dto';

@Injectable()
export class TurmasRepository {
  constructor(
    @InjectRepository(Turma)
    private readonly repo: Repository<Turma>,
  ) {}

  async findAll(): Promise<Turma[]> {
    return this.repo.find({
      where: { status: 'ATIVO' },
      order: { serie: 'ASC', codigo: 'ASC' },
    });
  }

  async findOne(id: string): Promise<Turma | null> {
    return this.repo.findOne({
      where: { id: parseInt(id), status: 'ATIVO' },
    });
  }

  async create(dto: CreateTurmaDto): Promise<Turma> {
    const turma = this.repo.create(dto);
    return this.repo.save(turma);
  }

  async existsByCodigo(codigo: string): Promise<boolean> {
    const count = await this.repo.count({ where: { codigo } });
    return count > 0;
  }
}
