import { Injectable, ConflictException } from '@nestjs/common';
import { AlunosRepository } from '../repository/alunos.repository';
import { CreateAlunoDto } from '../dto/create-aluno.dto';
import { Aluno } from '../entity/aluno.entity';

@Injectable()
export class AlunosService {
  constructor(private readonly alunosRepository: AlunosRepository) {}

  async findAll(): Promise<Aluno[]> {
    return this.alunosRepository.findAll();
  }

  async create(dto: CreateAlunoDto): Promise<Aluno> {
    if (await this.alunosRepository.existsByMatricula(dto.matricula)) {
      throw new ConflictException('Matrícula já cadastrada');
    }
    if (await this.alunosRepository.existsByCpf(dto.cpf)) {
      throw new ConflictException('CPF já cadastrado');
    }
    if (await this.alunosRepository.existsByEmail(dto.email)) {
      throw new ConflictException('E-mail já cadastrado');
    }
    return this.alunosRepository.create(dto);
  }
}