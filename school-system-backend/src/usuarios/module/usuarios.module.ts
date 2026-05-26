import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from '../entity/usuario.entity';
import { UsuariosRepository } from '../repository/usuarios.repository';
import { UsuariosService } from '../service/usuarios.service';
import { UsuariosController } from '../controller/usuarios.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario])],
  providers: [UsuariosRepository, UsuariosService],
  controllers: [UsuariosController],
})
export class UsuariosModule {}
