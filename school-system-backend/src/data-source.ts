import { DataSource } from 'typeorm';
import { Aluno } from './alunos/entity/aluno.entity';
import { CreateAlunosTable1748000000000 } from './migration/1748000000000-CreateAlunosTable';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASS || 'postgres',
  database: process.env.DB_NAME || 'schoolsystem',
  entities: [Aluno],
  migrations: [CreateAlunosTable1748000000000],
});