import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Professor } from '../entity/professor.entity';
import { CreateProfessorDto } from '../dto/create-professor.dto';

@Injectable()
export class ProfessoresRepository {
  constructor(
    @InjectRepository(Professor)
    private readonly repo: Repository<Professor>,
  ) {}

  async findAll(): Promise<Professor[]> {
    return this.repo.find({
      where: { status: 'ATIVO' },
      order: { nome: 'ASC' },
    });
  }

  async findOne(id: string): Promise<Professor | null> {
    return this.repo.findOne({
      where: { id: parseInt(id), status: 'ATIVO' },
    });
  }

  async create(dto: CreateProfessorDto): Promise<Professor> {
    const professor = this.repo.create(dto);
    return this.repo.save(professor);
  }

  async existsByCpf(cpf: string): Promise<boolean> {
    const count = await this.repo.count({ where: { cpf } });
    return count > 0;
  }

  async existsByEmail(email: string): Promise<boolean> {
    const count = await this.repo.count({ where: { email } });
    return count > 0;
  }
}
