import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlunosModule } from './alunos/module/alunos.module';
import { Aluno } from './alunos/entity/aluno.entity';
import { ProfessoresModule } from './professores/module/professores.module';
import { Professor } from './professores/entity/professor.entity';
import { TurmasModule } from './turmas/module/turmas.module';
import { Turma } from './turmas/entity/turma.entity';
import { NotasModule } from './notas/module/notas.module';
import { Nota } from './notas/entity/nota.entity';
import { DisciplinasModule } from './disciplinas/module/disciplinas.module';
import { Disciplina } from './disciplinas/entity/disciplina.entity';
import { UsuariosModule } from './usuarios/module/usuarios.module';
import { Usuario } from './usuarios/entity/usuario.entity';
import { FrequenciaModule } from './frequencia/module/frequencia.module';
import { Frequencia } from './frequencia/entity/frequencia.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: parseInt(process.env.DB_PORT || '5433'),
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASS || 'postgres',
      database: process.env.DB_NAME || 'schoolsystem',
      entities: [Aluno, Professor, Turma, Nota, Disciplina, Usuario, Frequencia],
      synchronize: true,
    }),
    AlunosModule,
    ProfessoresModule,
    TurmasModule,
    NotasModule,
    DisciplinasModule,
    UsuariosModule,
    FrequenciaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}