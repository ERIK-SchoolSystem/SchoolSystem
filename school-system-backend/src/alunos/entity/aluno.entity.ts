import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('alunos')
export class Aluno {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nome!: string;

  @Column({ unique: true })
  matricula!: string;

  @Column({ name: 'data_nascimento', type: 'date' })
  dataNascimento!: Date;

  @Column({ unique: true, length: 11 })
  cpf!: string;

  @Column({ unique: true })
  email!: string;

  @Column({ length: 20 })
  telefone!: string;

  @Column()
  turma!: string;

  @Column({ default: 'ATIVO' })
  status!: 'ATIVO' | 'INATIVO';
}