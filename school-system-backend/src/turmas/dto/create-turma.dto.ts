import { IsString, IsNotEmpty, IsNumber, IsIn } from 'class-validator';

export class CreateTurmaDto {
  @IsString()
  @IsNotEmpty({ message: 'Código da turma é obrigatório' })
  codigo!: string;

  @IsString()
  @IsNotEmpty({ message: 'Série é obrigatória' })
  serie!: string;

  @IsIn(['MATUTINO', 'VESPERTINO', 'NOTURNO'], { message: 'Turno inválido' })
  turno!: 'MATUTINO' | 'VESPERTINO' | 'NOTURNO';

  @IsNumber({}, { message: 'Capacidade deve ser um número' })
  capacidade!: number;

  @IsString()
  @IsNotEmpty({ message: 'Professor responsável é obrigatório' })
  professorResponsavel!: string;
}
