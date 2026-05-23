import { getRepositoryToken } from '@nestjs/typeorm';
import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { AlunosRepository } from '../repository/alunos.repository';
import { Aluno } from '../entity/aluno.entity';
import { CreateAlunoDto } from '../dto/create-aluno.dto';

const mockAluno: Aluno = {
  id: 1,
  nome: 'Ana Souza',
  matricula: '2025001',
  dataNascimento: new Date('2010-05-15'),
  cpf: '12345678901',
  email: 'ana@email.com',
  telefone: '44999990000',
  turma: '7A',
  status: 'ATIVO',
};

const mockDto: CreateAlunoDto = {
  nome: 'Ana Souza',
  matricula: '2025001',
  dataNascimento: '2010-05-15',
  cpf: '12345678901',
  email: 'ana@email.com',
  telefone: '44999990000',
  turma: '7A',
};

describe('AlunosRepository', () => {
  let alunosRepository: AlunosRepository;
  let typeOrmRepo: jest.Mocked<Repository<Aluno>>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AlunosRepository,
        {
          provide: getRepositoryToken(Aluno),
          useValue: {
            find: jest.fn(),
            create: jest.fn(),
            save: jest.fn(),
            count: jest.fn(),
          },
        },
      ],
    }).compile();

    alunosRepository = module.get<AlunosRepository>(AlunosRepository);
    typeOrmRepo = module.get(getRepositoryToken(Aluno));
  });

  // ─── findAll ────────────────────────────────────────────────────────

  describe('findAll', () => {
    it('should return all active students ordered by name', async () => {
      typeOrmRepo.find.mockResolvedValue([mockAluno]);

      const result = await alunosRepository.findAll();

      expect(result).toEqual([mockAluno]);
      expect(typeOrmRepo.find).toHaveBeenCalledWith({
        where: { status: 'ATIVO' },
        order: { nome: 'ASC' },
      });
    });

    it('should return empty array when no students exist', async () => {
      typeOrmRepo.find.mockResolvedValue([]);

      const result = await alunosRepository.findAll();

      expect(result).toEqual([]);
    });
  });

  // ─── create ─────────────────────────────────────────────────────────

  describe('create', () => {
    it('should create and save a student', async () => {
      typeOrmRepo.create.mockReturnValue(mockAluno);
      typeOrmRepo.save.mockResolvedValue(mockAluno);

      const result = await alunosRepository.create(mockDto);

      expect(typeOrmRepo.create).toHaveBeenCalledWith(mockDto);
      expect(typeOrmRepo.save).toHaveBeenCalledWith(mockAluno);
      expect(result).toEqual(mockAluno);
    });
  });

  // ─── existsByMatricula ───────────────────────────────────────────────

  describe('existsByMatricula', () => {
    it('should return true when matricula exists', async () => {
      typeOrmRepo.count.mockResolvedValue(1);

      const result = await alunosRepository.existsByMatricula('2025001');

      expect(result).toBe(true);
      expect(typeOrmRepo.count).toHaveBeenCalledWith({
        where: { matricula: '2025001' },
      });
    });

    it('should return false when matricula does not exist', async () => {
      typeOrmRepo.count.mockResolvedValue(0);

      const result = await alunosRepository.existsByMatricula('9999999');

      expect(result).toBe(false);
    });
  });

  // ─── existsByCpf ────────────────────────────────────────────────────

  describe('existsByCpf', () => {
    it('should return true when CPF exists', async () => {
      typeOrmRepo.count.mockResolvedValue(1);

      const result = await alunosRepository.existsByCpf('12345678901');

      expect(result).toBe(true);
    });

    it('should return false when CPF does not exist', async () => {
      typeOrmRepo.count.mockResolvedValue(0);

      const result = await alunosRepository.existsByCpf('00000000000');

      expect(result).toBe(false);
    });
  });

  // ─── existsByEmail ───────────────────────────────────────────────────

  describe('existsByEmail', () => {
    it('should return true when email exists', async () => {
      typeOrmRepo.count.mockResolvedValue(1);

      const result = await alunosRepository.existsByEmail('ana@email.com');

      expect(result).toBe(true);
    });

    it('should return false when email does not exist', async () => {
      typeOrmRepo.count.mockResolvedValue(0);

      const result = await alunosRepository.existsByEmail('novo@email.com');

      expect(result).toBe(false);
    });
  });
});