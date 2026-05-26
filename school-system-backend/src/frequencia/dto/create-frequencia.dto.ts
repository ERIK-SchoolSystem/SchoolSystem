import { IsNumber, IsNotEmpty, IsDateString, IsIn, IsOptional, IsString } from 'class-validator';

export class CreateFrequenciaDto {
  @IsNumber({}, { message: 'ID do aluno deve ser um número' })
  alunoId!: number;

  @IsNumber({}, { message: 'ID da turma deve ser um número' })
  turmaId!: number;

  @IsNumber({}, { message: 'ID da disciplina deve ser um número' })
  disciplinaId!: number;

  @IsDateString({}, { message: 'Data inválida. Use o formato YYYY-MM-DD' })
  data!: string;

  @IsIn(['PRESENTE', 'AUSENTE', 'ATRASADO', 'JUSTIFICADO'], {
    message: 'Status de frequência inválido',
  })
  status!: 'PRESENTE' | 'AUSENTE' | 'ATRASADO' | 'JUSTIFICADO';

  @IsOptional()
  @IsString()
  justificativa?: string;
}
