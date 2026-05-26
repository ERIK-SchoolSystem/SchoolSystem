import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateDisciplinaDto {
  @IsString()
  @IsNotEmpty({ message: 'Código é obrigatório' })
  codigo!: string;

  @IsString()
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  nome!: string;

  @IsString()
  @IsNotEmpty({ message: 'Descrição é obrigatória' })
  descricao!: string;

  @IsNumber({}, { message: 'Carga horária deve ser um número' })
  cargaHoraria!: number;

  @IsOptional()
  @IsString()
  ementa?: string;
}
