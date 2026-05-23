import { IsString, IsNotEmpty, IsEmail, IsDateString, Length } from 'class-validator';

export class CreateAlunoDto {
  @IsString()
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  nome!: string;

  @IsString()
  @IsNotEmpty({ message: 'Matrícula é obrigatória' })
  matricula!: string;

  @IsDateString({}, { message: 'Data de nascimento inválida. Use o formato YYYY-MM-DD' })
  dataNascimento!: string;

  @IsString()
  @Length(11, 11, { message: 'CPF deve ter exatamente 11 dígitos' })
  cpf!: string;

  @IsEmail({}, { message: 'E-mail inválido' })
  email!: string;

  @IsString()
  @IsNotEmpty({ message: 'Telefone é obrigatório' })
  telefone!: string;

  @IsString()
  @IsNotEmpty({ message: 'Turma é obrigatória' })
  turma!: string;
}