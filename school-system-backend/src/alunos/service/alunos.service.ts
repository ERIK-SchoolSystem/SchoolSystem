import {
  Injectable,
  ConflictException,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { AlunosRepository } from '../repository/alunos.repository';
import { CreateAlunoDto } from '../dto/create-aluno.dto';
import { Aluno } from '../entity/aluno.entity';
import { UpdateAlunoDto } from '../dto/update-aluno.dto';

@Injectable()
export class AlunosService {
  constructor(private readonly alunosRepository: AlunosRepository) {}

  async findAll(): Promise<Aluno[]> {
    return this.alunosRepository.findAll();
  }

  async findOne(id: string): Promise<Aluno> {
    const aluno = await this.alunosRepository.findOne(id);

    if (!aluno) {
      throw new NotFoundException('Aluno não encontrado.');
    }

    return aluno;
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

  async update(id: string, dto: UpdateAlunoDto): Promise<Aluno> {
    if (!dto || Object.keys(dto).length === 0) {
      throw new BadRequestException('Nenhum campo fornecido para atualização');
    }

    // garante que o aluno exista
    const aluno = await this.findOne(id);

    // validações de unicidade apenas se os campos forem alterados
    if (dto.matricula && dto.matricula !== aluno.matricula) {
      if (await this.alunosRepository.existsByMatriculaExceptId(dto.matricula, aluno.id)) {
        throw new ConflictException('Matrícula já cadastrada');
      }
    }

    if (dto.cpf && dto.cpf !== aluno.cpf) {
      if (await this.alunosRepository.existsByCpfExceptId(dto.cpf, aluno.id)) {
        throw new ConflictException('CPF já cadastrado');
      }
    }

    if (dto.email && dto.email !== aluno.email) {
      if (await this.alunosRepository.existsByEmailExceptId(dto.email, aluno.id)) {
        throw new ConflictException('E-mail já cadastrado');
      }
    }

    return this.alunosRepository.update(id, dto);
  }

  async remove(id: string): Promise<void> {
    // garante que o aluno exista
    await this.findOne(id);
    await this.alunosRepository.softDelete(id);
  }
}
