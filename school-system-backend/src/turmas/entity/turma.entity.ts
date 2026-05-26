import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('turmas')
export class Turma {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  codigo!: string;

  @Column()
  serie!: string;

  @Column()
  turno!: 'MATUTINO' | 'VESPERTINO' | 'NOTURNO';

  @Column({ default: 30 })
  capacidade!: number;

  @Column({ default: 0 })
  alunosEnrolados!: number;

  @Column()
  professorResponsavel!: string;

  @Column({ default: 'ATIVO' })
  status!: 'ATIVO' | 'INATIVO';

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  criadoEm!: Date;
}
