import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  email!: string;

  @Column()
  senha!: string;

  @Column()
  nome!: string;

  @Column({
    type: 'enum',
    enum: ['ADMIN', 'PROFESSOR', 'ALUNO', 'RESPONSAVEL'],
    default: 'ALUNO',
  })
  papel!: 'ADMIN' | 'PROFESSOR' | 'ALUNO' | 'RESPONSAVEL';

  @Column({ default: 'ATIVO' })
  status!: 'ATIVO' | 'INATIVO';

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  criadoEm!: Date;

  @Column({ type: 'timestamp', nullable: true })
  ultimoLogin?: Date;
}
