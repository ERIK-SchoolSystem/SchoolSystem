import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('disciplinas')
export class Disciplina {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  codigo!: string;

  @Column()
  nome!: string;

  @Column()
  descricao!: string;

  @Column()
  cargaHoraria!: number;

  @Column({ nullable: true })
  ementa?: string;

  @Column({ default: 'ATIVO' })
  status!: 'ATIVO' | 'INATIVO';

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  criadoEm!: Date;
}
