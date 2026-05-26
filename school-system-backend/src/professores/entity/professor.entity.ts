import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('professores')
export class Professor {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nome!: string;

  @Column({ unique: true })
  cpf!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  telefone!: string;

  @Column()
  disciplina!: string;

  @Column({ default: 'ATIVO' })
  status!: 'ATIVO' | 'INATIVO';

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  criadoEm!: Date;
}
