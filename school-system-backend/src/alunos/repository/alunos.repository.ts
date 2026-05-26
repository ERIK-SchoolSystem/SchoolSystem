import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Not } from 'typeorm';
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

  async findOne(id: string): Promise<Aluno | null> {
    return this.repo.findOne({
      where: { id: parseInt(id), status: 'ATIVO' },
    });
  }

  async create(dto: CreateAlunoDto): Promise<Aluno> {
    const aluno = this.repo.create(dto);
    return this.repo.save(aluno);
  }

  async update(id: string, dto: Partial<CreateAlunoDto>): Promise<Aluno> {
    const aluno = await this.findOne(id);
    if (!aluno) {
      return null as any;
    }
    Object.assign(aluno, dto);
    return this.repo.save(aluno);
  }

  async softDelete(id: string): Promise<void> {
    const aluno = await this.findOne(id);
    if (!aluno) {
      return;
    }
    aluno.status = 'INATIVO';
    await this.repo.save(aluno);
  }

  async existsByMatricula(matricula: string): Promise<boolean> {
    const count = await this.repo.count({ where: { matricula } });
    return count > 0;
  }

  async existsByMatriculaExceptId(matricula: string, id: number): Promise<boolean> {
    const count = await this.repo.count({ where: { matricula, id: Not(id) } });
    return count > 0;
  }

  async existsByCpf(cpf: string): Promise<boolean> {
    const count = await this.repo.count({ where: { cpf } });
    return count > 0;
  }

  async existsByCpfExceptId(cpf: string, id: number): Promise<boolean> {
    const count = await this.repo.count({ where: { cpf, id: Not(id) } });
    return count > 0;
  }

  async existsByEmail(email: string): Promise<boolean> {
    const count = await this.repo.count({ where: { email } });
    return count > 0;
  }

  async existsByEmailExceptId(email: string, id: number): Promise<boolean> {
    const count = await this.repo.count({ where: { email, id: Not(id) } });
    return count > 0;
  }
}