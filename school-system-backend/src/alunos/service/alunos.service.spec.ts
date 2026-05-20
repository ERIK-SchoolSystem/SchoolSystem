import { ConflictException } from '@nestjs/common';
import { AlunosService } from '../service/alunos.service';
import { AlunosRepository } from '../repository/alunos.repository';
import { CreateAlunoDto } from '../dto/create-aluno.dto';

const mockDto: CreateAlunoDto = {
  nome: 'Ana Souza',
  matricula: '2025001',
  dataNascimento: '2010-05-15',
  cpf: '12345678901',
  email: 'ana@email.com',
  telefone: '44999990000',
  turma: '7A',
};

describe('AlunosService', () => {
  let service: AlunosService;
  let repository: jest.Mocked<AlunosRepository>;

  beforeEach(() => {
    repository = {
      create: jest.fn(),
      findAll: jest.fn(),
      existsByMatricula: jest.fn(),
      existsByCpf: jest.fn(),
      existsByEmail: jest.fn(),
    } as unknown as jest.Mocked<AlunosRepository>;

    service = new AlunosService(repository);
  });

  // ─── UC-03: Listar Alunos ───────────────────────────────────────

  describe('findAll', () => {
    it('should return all active students ordered by name', async () => {
      repository.findAll.mockResolvedValue([
        { ...mockDto, id: 1, dataNascimento: new Date('2010-05-15'), status: 'ATIVO' },
        { ...mockDto, id: 2, nome: 'Carlos Lima', matricula: '2025002', cpf: '98765432100', email: 'carlos@email.com', dataNascimento: new Date('2009-03-10'), status: 'ATIVO' },
      ]);

      const result = await service.findAll();

      expect(result).toHaveLength(2);
      expect(result[0].nome).toBe('Ana Souza');
      expect(repository.findAll).toHaveBeenCalledTimes(1);
    });

    it('should return empty array when no students exist', async () => {
      repository.findAll.mockResolvedValue([]);

      const result = await service.findAll();

      expect(result).toEqual([]);
    });
  });

  // ─── UC-02: Cadastrar Aluno ─────────────────────────────────────

  describe('create', () => {
    beforeEach(() => {
      repository.existsByMatricula.mockResolvedValue(false);
      repository.existsByCpf.mockResolvedValue(false);
      repository.existsByEmail.mockResolvedValue(false);
    });

    it('should create a student successfully', async () => {
      const created = { id: 1, ...mockDto, dataNascimento: new Date(mockDto.dataNascimento), status: 'ATIVO' as const };
      repository.create.mockResolvedValue(created);

      const result = await service.create(mockDto);

      expect(result).toEqual(created);
      expect(repository.create).toHaveBeenCalledWith(mockDto);
    });

    it('should throw ConflictException when matricula already exists', async () => {
      repository.existsByMatricula.mockResolvedValue(true);

      await expect(service.create(mockDto)).rejects.toThrow(ConflictException);
      await expect(service.create(mockDto)).rejects.toThrow('Matrícula já cadastrada');
    });

    it('should throw ConflictException when CPF already exists', async () => {
      repository.existsByCpf.mockResolvedValue(true);

      await expect(service.create(mockDto)).rejects.toThrow(ConflictException);
      await expect(service.create(mockDto)).rejects.toThrow('CPF já cadastrado');
    });

    it('should throw ConflictException when email already exists', async () => {
      repository.existsByEmail.mockResolvedValue(true);

      await expect(service.create(mockDto)).rejects.toThrow(ConflictException);
      await expect(service.create(mockDto)).rejects.toThrow('E-mail já cadastrado');
    });
  });
});