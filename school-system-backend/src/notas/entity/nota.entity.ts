import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('notas')
export class Nota {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  alunoId!: number;

  @Column()
  disciplinaId!: number;

  @Column({ type: 'decimal', precision: 4, scale: 2 })
  valor!: number;

  @Column()
  bimestre!: number;

  @Column()
  ano!: number;

  @Column({ nullable: true })
  observacoes?: string;

  @Column({ default: 'ATIVO' })
  status!: 'ATIVO' | 'INATIVO';

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  criadoEm!: Date;
}
