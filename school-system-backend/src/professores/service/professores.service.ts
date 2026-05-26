import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { ProfessoresRepository } from '../repository/professores.repository';
import { CreateProfessorDto } from '../dto/create-professor.dto';
import { Professor } from '../entity/professor.entity';

@Injectable()
export class ProfessoresService {
  constructor(private readonly professoresRepository: ProfessoresRepository) {}

  async findAll(): Promise<Professor[]> {
    return this.professoresRepository.findAll();
  }

  async findOne(id: string): Promise<Professor> {
    const professor = await this.professoresRepository.findOne(id);

    if (!professor) {
      throw new NotFoundException('Professor não encontrado.');
    }

    return professor;
  }

  async create(dto: CreateProfessorDto): Promise<Professor> {
    if (await this.professoresRepository.existsByCpf(dto.cpf)) {
      throw new ConflictException('CPF já cadastrado');
    }
    if (await this.professoresRepository.existsByEmail(dto.email)) {
      throw new ConflictException('E-mail já cadastrado');
    }
    return this.professoresRepository.create(dto);
  }
}
