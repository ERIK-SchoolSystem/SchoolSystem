import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { UsuariosRepository } from '../repository/usuarios.repository';
import { CreateUsuarioDto } from '../dto/create-usuario.dto';
import { Usuario } from '../entity/usuario.entity';

@Injectable()
export class UsuariosService {
  constructor(private readonly usuariosRepository: UsuariosRepository) {}

  async findAll(): Promise<Usuario[]> {
    return this.usuariosRepository.findAll();
  }

  async findOne(id: string): Promise<Usuario> {
    const usuario = await this.usuariosRepository.findOne(id);

    if (!usuario) {
      throw new NotFoundException('Usuário não encontrado.');
    }

    return usuario;
  }

  async create(dto: CreateUsuarioDto): Promise<Usuario> {
    if (await this.usuariosRepository.existsByEmail(dto.email)) {
      throw new ConflictException('E-mail já cadastrado');
    }
    return this.usuariosRepository.create(dto);
  }
}
