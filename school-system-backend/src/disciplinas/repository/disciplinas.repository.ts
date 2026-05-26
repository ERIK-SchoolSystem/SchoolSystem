import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Disciplina } from '../entity/disciplina.entity';
import { CreateDisciplinaDto } from '../dto/create-disciplina.dto';

@Injectable()
export class DisciplinasRepository {
  constructor(
    @InjectRepository(Disciplina)
    private readonly repo: Repository<Disciplina>,
  ) {}

  async findAll(): Promise<Disciplina[]> {
    return this.repo.find({
      where: { status: 'ATIVO' },
      order: { nome: 'ASC' },
    });
  }

  async findOne(id: string): Promise<Disciplina | null> {
    return this.repo.findOne({
      where: { id: parseInt(id), status: 'ATIVO' },
    });
  }

  async create(dto: CreateDisciplinaDto): Promise<Disciplina> {
    const disciplina = this.repo.create(dto);
    return this.repo.save(disciplina);
  }

  async existsByCodigo(codigo: string): Promise<boolean> {
    const count = await this.repo.count({ where: { codigo } });
    return count > 0;
  }
}
