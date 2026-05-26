import { IsString, IsEmail, IsNotEmpty, IsIn, MinLength } from 'class-validator';

export class CreateUsuarioDto {
  @IsEmail({}, { message: 'E-mail inválido' })
  email!: string;

  @IsString()
  @MinLength(6, { message: 'Senha deve ter no mínimo 6 caracteres' })
  senha!: string;

  @IsString()
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  nome!: string;

  @IsIn(['ADMIN', 'PROFESSOR', 'ALUNO', 'RESPONSAVEL'], {
    message: 'Papel inválido',
  })
  papel!: 'ADMIN' | 'PROFESSOR' | 'ALUNO' | 'RESPONSAVEL';
}
