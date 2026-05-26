import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { DisciplinasRepository } from '../repository/disciplinas.repository';
import { CreateDisciplinaDto } from '../dto/create-disciplina.dto';
import { Disciplina } from '../entity/disciplina.entity';

@Injectable()
export class DisciplinasService {
  constructor(private readonly disciplinasRepository: DisciplinasRepository) {}

  async findAll(): Promise<Disciplina[]> {
    return this.disciplinasRepository.findAll();
  }

  async findOne(id: string): Promise<Disciplina> {
    const disciplina = await this.disciplinasRepository.findOne(id);

    if (!disciplina) {
      throw new NotFoundException('Disciplina não encontrada.');
    }

    return disciplina;
  }

  async create(dto: CreateDisciplinaDto): Promise<Disciplina> {
    if (await this.disciplinasRepository.existsByCodigo(dto.codigo)) {
      throw new ConflictException('Código de disciplina já cadastrado');
    }
    return this.disciplinasRepository.create(dto);
  }
}
