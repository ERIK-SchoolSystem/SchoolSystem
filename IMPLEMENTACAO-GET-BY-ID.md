# 📚 Documentação - Implementação de Endpoints GET /:id

## 📋 Sumário Executivo

Esta documentação detalha a implementação completa dos endpoints `GET /:id` (leitura por ID) em todos os módulos do sistema escolar NestJS, seguindo padrões REST API profissionais e arquitetura limpa.

### ✅ Módulos Implementados
1. **Alunos** - Atualizado ✓
2. **Professores** - Novo ✓
3. **Turmas** - Novo ✓
4. **Notas** - Novo ✓
5. **Disciplinas** - Novo ✓
6. **Usuários** - Novo ✓
7. **Frequência** - Novo ✓

---

## 🏗️ Arquitetura Implementada

### Padrão Layered Architecture

```
┌─────────────────────────────────────────┐
│  HTTP REQUEST (:id parameter)           │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│  CONTROLLER (@Get(':id'))               │
│  ├─ Extrai parâmetro via @Param        │
│  ├─ Valida entrada                      │
│  └─ Delega para Service                 │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│  SERVICE (findOne method)               │
│  ├─ Aplica regras de negócio           │
│  ├─ Trata exceções                      │
│  ├─ Lança NotFoundException se não achar│
│  └─ Retorna entidade encontrada         │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│  REPOSITORY (findOne method)            │
│  ├─ Executa query no banco              │
│  ├─ Filtra por ID                       │
│  ├─ Aplica regras de status (ATIVO)    │
│  └─ Retorna entidade ou null            │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│  DATABASE (TypeORM/PostgreSQL)          │
│  └─ Retorna registro ou vazio           │
└─────────────────────────────────────────┘
```

---

## 🛣️ Endpoints Implementados

### 1️⃣ ALUNOS

```http
GET /alunos           # Lista todos os alunos ativos
GET /alunos/:id       # Busca aluno por ID
POST /alunos          # Cria novo aluno
```

**Exemplo GET /:id:**
```bash
curl -X GET http://localhost:3000/alunos/1
```

**Resposta 200 OK:**
```json
{
  "id": 1,
  "nome": "João Silva",
  "matricula": "2025001",
  "dataNascimento": "2010-05-15",
  "cpf": "12345678901",
  "email": "joao@email.com",
  "telefone": "44999990000",
  "turma": "7A",
  "status": "ATIVO"
}
```

**Resposta 404 Not Found:**
```json
{
  "statusCode": 404,
  "message": "Aluno não encontrado."
}
```

---

### 2️⃣ PROFESSORES

```http
GET /professores           # Lista todos os professores ativos
GET /professores/:id       # Busca professor por ID
POST /professores          # Cria novo professor
```

**Campos da Entidade:**
- `id` - PrimaryGeneratedColumn
- `nome` - VARCHAR
- `cpf` - VARCHAR (unique)
- `email` - VARCHAR (unique)
- `telefone` - VARCHAR
- `disciplina` - VARCHAR
- `status` - ATIVO | INATIVO (default: ATIVO)
- `criadoEm` - TIMESTAMP

---

### 3️⃣ TURMAS

```http
GET /turmas           # Lista todas as turmas ativas
GET /turmas/:id       # Busca turma por ID
POST /turmas          # Cria nova turma
```

**Campos da Entidade:**
- `id` - PrimaryGeneratedColumn
- `codigo` - VARCHAR (unique)
- `serie` - VARCHAR
- `turno` - ENUM (MATUTINO | VESPERTINO | NOTURNO)
- `capacidade` - INT (default: 30)
- `alunosEnrolados` - INT (default: 0)
- `professorResponsavel` - VARCHAR
- `status` - ATIVO | INATIVO (default: ATIVO)
- `criadoEm` - TIMESTAMP

---

### 4️⃣ NOTAS

```http
GET /notas           # Lista todas as notas ativas
GET /notas/:id       # Busca nota por ID
POST /notas          # Cria nova nota
```

**Campos da Entidade:**
- `id` - PrimaryGeneratedColumn
- `alunoId` - INT
- `disciplinaId` - INT
- `valor` - DECIMAL (0 a 10)
- `bimestre` - INT (1-4)
- `ano` - INT
- `observacoes` - VARCHAR (nullable)
- `status` - ATIVO | INATIVO (default: ATIVO)
- `criadoEm` - TIMESTAMP

---

### 5️⃣ DISCIPLINAS

```http
GET /disciplinas           # Lista todas as disciplinas ativas
GET /disciplinas/:id       # Busca disciplina por ID
POST /disciplinas          # Cria nova disciplina
```

**Campos da Entidade:**
- `id` - PrimaryGeneratedColumn
- `codigo` - VARCHAR (unique)
- `nome` - VARCHAR
- `descricao` - VARCHAR
- `cargaHoraria` - INT
- `ementa` - VARCHAR (nullable)
- `status` - ATIVO | INATIVO (default: ATIVO)
- `criadoEm` - TIMESTAMP

---

### 6️⃣ USUÁRIOS

```http
GET /usuarios           # Lista todos os usuários ativos
GET /usuarios/:id       # Busca usuário por ID
POST /usuarios          # Cria novo usuário
```

**Campos da Entidade:**
- `id` - PrimaryGeneratedColumn
- `email` - VARCHAR (unique)
- `senha` - VARCHAR
- `nome` - VARCHAR
- `papel` - ENUM (ADMIN | PROFESSOR | ALUNO | RESPONSAVEL)
- `status` - ATIVO | INATIVO (default: ATIVO)
- `criadoEm` - TIMESTAMP
- `ultimoLogin` - TIMESTAMP (nullable)

**Nota de Segurança:** A resposta GET NÃO inclui o campo `senha` (removido via `select` no repository).

---

### 7️⃣ FREQUÊNCIA

```http
GET /frequencia           # Lista todos os registros de frequência
GET /frequencia/:id       # Busca frequência por ID
POST /frequencia          # Cria novo registro de frequência
```

**Campos da Entidade:**
- `id` - PrimaryGeneratedColumn
- `alunoId` - INT
- `turmaId` - INT
- `disciplinaId` - INT
- `data` - DATE
- `status` - ENUM (PRESENTE | AUSENTE | ATRASADO | JUSTIFICADO)
- `justificativa` - VARCHAR (nullable)
- `registroAtivo` - BOOLEAN (default: true)
- `criadoEm` - TIMESTAMP

---

## 📁 Estrutura de Pastas

```
src/
├── alunos/
│   ├── controller/
│   │   └── alunos.controller.ts (✓ atualizado)
│   ├── dto/
│   │   └── create-aluno.dto.ts
│   ├── entity/
│   │   └── aluno.entity.ts
│   ├── repository/
│   │   └── alunos.repository.ts (✓ com findOne)
│   ├── service/
│   │   └── alunos.service.ts (✓ com findOne)
│   └── module/
│       └── alunos.module.ts
│
├── professores/ (✓ novo)
│   ├── controller/professores.controller.ts
│   ├── dto/create-professor.dto.ts
│   ├── entity/professor.entity.ts
│   ├── repository/professores.repository.ts
│   ├── service/professores.service.ts
│   └── module/professores.module.ts
│
├── turmas/ (✓ novo)
├── notas/ (✓ novo)
├── disciplinas/ (✓ novo)
├── usuarios/ (✓ novo)
├── frequencia/ (✓ novo)
│
├── app.module.ts (✓ atualizado com todos os módulos)
├── data-source.ts (✓ atualizado com todas as entities)
└── migration/
    └── 1748000000000-CreateAlunosTable.ts
```

---

## 🔑 Implementação Padrão - Controller

```typescript
import { Controller, Get, Post, Body, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { [NomeEntity]Service } from '../service/[nome].service';
import { Create[NomeEntity]Dto } from '../dto/create-[nome].dto';

@Controller('[rota-plural]')
export class [NomeEntity]Controller {
  constructor(private readonly [nomeEntity]Service: [NomeEntity]Service) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.[nomeEntity]Service.findAll();
  }

  @Get(':id')                              // ✓ Implementado
  @HttpCode(HttpStatus.OK)                 // ✓ HTTP 200
  findOne(@Param('id') id: string) {       // ✓ Recebe ID como string
    return this.[nomeEntity]Service.findOne(id);  // ✓ Delega para service
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: Create[NomeEntity]Dto) {
    return this.[nomeEntity]Service.create(dto);
  }
}
```

---

## 🔑 Implementação Padrão - Service

```typescript
import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { [NomeEntity]Repository } from '../repository/[nome].repository';
import { Create[NomeEntity]Dto } from '../dto/create-[nome].dto';
import { [NomeEntity] } from '../entity/[nome].entity';

@Injectable()
export class [NomeEntity]Service {
  constructor(private readonly [nomeEntity]Repository: [NomeEntity]Repository) {}

  async findAll(): Promise<[NomeEntity][]> {
    return this.[nomeEntity]Repository.findAll();
  }

  async findOne(id: string): Promise<[NomeEntity]> {  // ✓ Implementado
    const [nomeEntity] = await this.[nomeEntity]Repository.findOne(id);
    
    if (![nomeEntity]) {                              // ✓ Validação
      throw new NotFoundException('[NomeEntity] não encontrado.');  // ✓ NotFoundException
    }
    
    return [nomeEntity];
  }

  async create(dto: Create[NomeEntity]Dto): Promise<[NomeEntity]> {
    // Validações específicas...
    return this.[nomeEntity]Repository.create(dto);
  }
}
```

---

## 🔑 Implementação Padrão - Repository

```typescript
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { [NomeEntity] } from '../entity/[nome].entity';
import { Create[NomeEntity]Dto } from '../dto/create-[nome].dto';

@Injectable()
export class [NomeEntity]Repository {
  constructor(
    @InjectRepository([NomeEntity])
    private readonly repo: Repository<[NomeEntity]>,
  ) {}

  async findAll(): Promise<[NomeEntity][]> {
    return this.repo.find({
      where: { status: 'ATIVO' },
      order: { /* campo de ordenação */ },
    });
  }

  async findOne(id: string): Promise<[NomeEntity] | null> {  // ✓ Implementado
    return this.repo.findOne({
      where: { id: parseInt(id), status: 'ATIVO' },  // ✓ Converte para int
    });
  }

  async create(dto: Create[NomeEntity]Dto): Promise<[NomeEntity]> {
    const [nomeEntity] = this.repo.create(dto);
    return this.repo.save([nomeEntity]);
  }
}
```

---

## 📊 HTTP Status Codes

| Code | Situação | Exemplo |
|------|----------|---------|
| **200** | GET com sucesso | `GET /alunos/1` → Aluno encontrado |
| **201** | POST com sucesso | `POST /alunos` → Aluno criado |
| **404** | Recurso não encontrado | `GET /alunos/99999` → Aluno não existe |
| **409** | Conflito (duplicação) | `POST /alunos` → CPF já existe |
| **400** | Validação falhou | `POST /alunos` → E-mail inválido |

---

## ✅ Validações Implementadas

### DTO Validations (class-validator)
```typescript
@IsString() - Valida que é string
@IsNotEmpty() - Obrigatório
@IsEmail() - Formato de email válido
@Length(min, max) - Comprimento da string
@IsNumber() - Valida número
@IsIn([valores]) - Valida enumeração
@IsDateString() - Formato de data ISO 8601
@MinLength(n) - Mínimo de caracteres
@Min(n) / @Max(n) - Intervalo numérico
@IsOptional() - Campo opcional
```

### Banco de Dados
```sql
-- Constraints únicos
UNIQUE(cpf)
UNIQUE(email)
UNIQUE(matricula)
UNIQUE(codigo)

-- Status filtering
WHERE status = 'ATIVO'

-- Type safety
DECIMAL(4,2) para notas (máx 99.99)
ENUM para papéis (ADMIN, PROFESSOR, ALUNO, RESPONSAVEL)
```

---

## 🚀 Como Testar

### 1. Via REST Client (VS Code)

**Instale a extensão:** REST Client (humao.rest-client)

**Abra arquivo:** `api-rest-examples.http`

**Clique:** "Send Request" acima de qualquer requisição

### 2. Via cURL

```bash
# GET com sucesso
curl -X GET http://localhost:3000/alunos/1 \
  -H "Content-Type: application/json"

# GET erro 404
curl -X GET http://localhost:3000/alunos/99999 \
  -H "Content-Type: application/json"
```

### 3. Via Postman

1. Importe coleção ou crie manualmente
2. Method: GET
3. URL: `http://localhost:3000/[rota]/[id]`
4. Headers: `Content-Type: application/json`
5. Clique "Send"

### 4. Via Browser (apenas GET)

```
http://localhost:3000/alunos/1
http://localhost:3000/professores/1
http://localhost:3000/turmas/1
```

---

## 🔄 Fluxo de Testes Recomendado

1. **Criar uma entidade** via POST
2. **Anotar o ID** retornado
3. **Buscar por ID** via GET (sucesso)
4. **Listar todas** via GET (lista completa)
5. **Buscar ID inválido** via GET (erro 404)
6. **Validar mensagens de erro**

---

## 🛡️ Tratamento de Erros

### NotFoundException (404)

```typescript
throw new NotFoundException('Aluno não encontrado.');
```

**Response:**
```json
{
  "statusCode": 404,
  "message": "Aluno não encontrado.",
  "error": "Not Found"
}
```

### ConflictException (409)

```typescript
throw new ConflictException('CPF já cadastrado');
```

**Response:**
```json
{
  "statusCode": 409,
  "message": "CPF já cadastrado",
  "error": "Conflict"
}
```

### BadRequestException (400) - Validação

Ocorre automaticamente quando DTOs falham na validação.

**Response:**
```json
{
  "statusCode": 400,
  "message": [
    "E-mail inválido"
  ],
  "error": "Bad Request"
}
```

---

## 📝 Migrations Necessárias

Para que os novos módulos funcionem, você precisa criar migrations TypeORM:

```bash
# Criar migrations para cada nova tabela
npm run migration:generate -- CreateProfessoresTable
npm run migration:generate -- CreateTurmasTable
npm run migration:generate -- CreateNotasTable
npm run migration:generate -- CreateDisciplinasTable
npm run migration:generate -- CreateUsuariosTable
npm run migration:generate -- CreateFrequenciaTable

# Executar todas as migrations
npm run migration:run
```

---

## 🔧 Instalação e Setup

### 1. Adicionar Imports ao app.module.ts ✓

```typescript
import { ProfessoresModule } from './professores/module/professores.module';
import { Professor } from './professores/entity/professor.entity';
// ... etc para outros módulos
```

### 2. Adicionar Entities ao data-source.ts ✓

```typescript
entities: [Aluno, Professor, Turma, Nota, Disciplina, Usuario, Frequencia],
```

### 3. Executar Migrations

```bash
npm run migration:run
```

### 4. Testar com REST Client

Use arquivo: `api-rest-examples.http`

---

## 📊 Cobertura de Endpoints

| Entidade | GET (lista) | GET /:id | POST | Coverage |
|----------|-----------|----------|------|----------|
| Alunos | ✓ | ✓ | ✓ | 100% |
| Professores | ✓ | ✓ | ✓ | 100% |
| Turmas | ✓ | ✓ | ✓ | 100% |
| Notas | ✓ | ✓ | ✓ | 100% |
| Disciplinas | ✓ | ✓ | ✓ | 100% |
| Usuários | ✓ | ✓ | ✓ | 100% |
| Frequência | ✓ | ✓ | ✓ | 100% |

---

## 🎯 Checklist de Implementação

- [x] Atualizar Controller - Alunos (adicionar GET /:id)
- [x] Atualizar Service - Alunos (adicionar findOne)
- [x] Atualizar Repository - Alunos (adicionar findOne)
- [x] Criar módulo Professores (completo)
- [x] Criar módulo Turmas (completo)
- [x] Criar módulo Notas (completo)
- [x] Criar módulo Disciplinas (completo)
- [x] Criar módulo Usuários (completo)
- [x] Criar módulo Frequência (completo)
- [x] Atualizar app.module.ts (todos os módulos)
- [x] Atualizar data-source.ts (todas as entities)
- [x] Criar exemplos REST Client (.http)
- [x] Documentação completa

---

## 📚 Referências

- [NestJS Documentation](https://docs.nestjs.com)
- [TypeORM Documentation](https://typeorm.io)
- [REST API Best Practices](https://restfulapi.net)
- [HTTP Status Codes](https://httpwg.org/specs/rfc7231.html#status.codes)

---

## 🎓 Padrões de Desenvolvimento Aplicados

1. **SOLID Principles** - Single Responsibility, Open/Closed, Dependency Injection
2. **Clean Architecture** - Controller → Service → Repository → DB
3. **RESTful API** - Métodos HTTP apropriados, Status Codes corretos
4. **Type Safety** - TypeScript com tipos explícitos
5. **Error Handling** - Exceções apropriadas com mensagens claras
6. **Validation** - DTOs com decorators de validação
7. **Database Design** - Constraints, Enums, Default Values
8. **Code Organization** - Modular, Escalável, Manutenível

---

**Última atualização:** 2025-05-26

**Status:** ✅ Implementação Completa

**Próximos passos:** Criar migrations, testar endpoints, implementar UPDATE/DELETE
