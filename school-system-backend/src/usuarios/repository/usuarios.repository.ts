import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../entity/usuario.entity';
import { CreateUsuarioDto } from '../dto/create-usuario.dto';

@Injectable()
export class UsuariosRepository {
  constructor(
    @InjectRepository(Usuario)
    private readonly repo: Repository<Usuario>,
  ) {}

  async findAll(): Promise<Usuario[]> {
    return this.repo.find({
      where: { status: 'ATIVO' },
      order: { nome: 'ASC' },
      select: {
            id: true,
            email: true,
            nome: true,
            papel: true,
            status: true,
            criadoEm: true,
            ultimoLogin: true,
        },
    });
  }

  async findOne(id: string): Promise<Usuario | null> {
    return this.repo.findOne({
      where: { id: parseInt(id), status: 'ATIVO' },
      select: {
            id: true,
            email: true,
            nome: true,
            papel: true,
            status: true,
            criadoEm: true,
            ultimoLogin: true,
        },
    });
  }

  async create(dto: CreateUsuarioDto): Promise<Usuario> {
    const usuario = this.repo.create(dto);
    return this.repo.save(usuario);
  }

  async existsByEmail(email: string): Promise<boolean> {
    const count = await this.repo.count({ where: { email } });
    return count > 0;
  }
}
