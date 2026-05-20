import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Aluno } from '../entity/aluno.entity';
import { CreateAlunoDto } from '../dto/create-aluno.dto';

@Injectable()
export class AlunosRepository {
  constructor(
    @InjectRepository(Aluno)
    private readonly repo: Repository<Aluno>,
  ) {}

  async findAll(): Promise<Aluno[]> {
    return this.repo.find({
      where: { status: 'ATIVO' },
      order: { nome: 'ASC' },
    });
  }

  async create(dto: CreateAlunoDto): Promise<Aluno> {
    const aluno = this.repo.create(dto);
    return this.repo.save(aluno);
  }

  async existsByMatricula(matricula: string): Promise<boolean> {
    const count = await this.repo.count({ where: { matricula } });
    return count > 0;
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