import { IsNumber, IsNotEmpty, IsIn, Min, Max, IsOptional, IsString } from 'class-validator';

export class CreateNotaDto {
  @IsNumber({}, { message: 'ID do aluno deve ser um número' })
  alunoId!: number;

  @IsNumber({}, { message: 'ID da disciplina deve ser um número' })
  disciplinaId!: number;

  @IsNumber({}, { message: 'Valor deve ser um número' })
  @Min(0, { message: 'Valor mínimo é 0' })
  @Max(10, { message: 'Valor máximo é 10' })
  valor!: number;

  @IsIn([1, 2, 3, 4], { message: 'Bimestre deve ser entre 1 e 4' })
  bimestre!: number;

  @IsNumber({}, { message: 'Ano deve ser um número' })
  ano!: number;

  @IsOptional()
  @IsString()
  observacoes?: string;
}
