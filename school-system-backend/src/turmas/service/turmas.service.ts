import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { TurmasRepository } from '../repository/turmas.repository';
import { CreateTurmaDto } from '../dto/create-turma.dto';
import { Turma } from '../entity/turma.entity';

@Injectable()
export class TurmasService {
  constructor(private readonly turmasRepository: TurmasRepository) {}

  async findAll(): Promise<Turma[]> {
    return this.turmasRepository.findAll();
  }

  async findOne(id: string): Promise<Turma> {
    const turma = await this.turmasRepository.findOne(id);

    if (!turma) {
      throw new NotFoundException('Turma não encontrada.');
    }

    return turma;
  }

  async create(dto: CreateTurmaDto): Promise<Turma> {
    if (await this.turmasRepository.existsByCodigo(dto.codigo)) {
      throw new ConflictException('Código de turma já cadastrado');
    }
    return this.turmasRepository.create(dto);
  }
}
