import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('frequencia')
export class Frequencia {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  alunoId!: number;

  @Column()
  turmaId!: number;

  @Column()
  disciplinaId!: number;

  @Column({ type: 'date' })
  data!: Date;

  @Column({
    type: 'enum',
    enum: ['PRESENTE', 'AUSENTE', 'ATRASADO', 'JUSTIFICADO'],
    default: 'PRESENTE',
  })
  status!: 'PRESENTE' | 'AUSENTE' | 'ATRASADO' | 'JUSTIFICADO';

  @Column({ nullable: true })
  justificativa?: string;

  @Column({ default: true })
  registroAtivo!: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  criadoEm!: Date;
}
