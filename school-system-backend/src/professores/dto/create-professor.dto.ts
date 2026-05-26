import { IsString, IsNotEmpty, IsEmail, Length } from 'class-validator';

export class CreateProfessorDto {
  @IsString()
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  nome!: string;

  @IsString()
  @Length(11, 11, { message: 'CPF deve ter exatamente 11 dígitos' })
  cpf!: string;

  @IsEmail({}, { message: 'E-mail inválido' })
  email!: string;

  @IsString()
  @IsNotEmpty({ message: 'Telefone é obrigatório' })
  telefone!: string;

  @IsString()
  @IsNotEmpty({ message: 'Disciplina é obrigatória' })
  disciplina!: string;
}
