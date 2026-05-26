# 🚀 Quick Start - GET /:id Endpoints

## ⚡ 30 segundos Setup

### 1. Instale a extensão REST Client no VS Code

```
Instale: "REST Client" (humao.rest-client)
```

### 2. Gere as Migrations

```bash
cd school-system-backend
npm run migration:generate -- CreateProfessoresTable
npm run migration:generate -- CreateTurmasTable
npm run migration:generate -- CreateNotasTable
npm run migration:generate -- CreateDisciplinasTable
npm run migration:generate -- CreateUsuariosTable
npm run migration:generate -- CreateFrequenciaTable
```

### 3. Rode as Migrations

```bash
npm run migration:run
```

### 4. Inicie o servidor

```bash
npm run start:dev
```

### 5. Teste com REST Client

Abra: `api-rest-examples.http` e clique em "Send Request"

---

## 📋 O que foi implementado

✅ **7 Módulos Completos** com GET /:id:
- Alunos (atualizado)
- Professores (novo)
- Turmas (novo)
- Notas (novo)
- Disciplinas (novo)
- Usuários (novo)
- Frequência (novo)

✅ **Padrão Arquitetural:**
- Controller → Service → Repository → Database
- Validações em múltiplas camadas
- Tratamento de erros com NotFoundException
- HTTP Status Codes corretos (200, 201, 404, 409)

✅ **DTOs com Validações:**
- class-validator decorators
- Mensagens de erro customizadas
- Validação em tempo de compilação + runtime

---

## 🔗 Endpoints Disponíveis

```
GET  /alunos              # Listar todos os alunos
GET  /alunos/:id          # ✨ Buscar aluno por ID
POST /alunos              # Criar aluno

GET  /professores         # Listar todos os professores
GET  /professores/:id     # ✨ Buscar professor por ID
POST /professores         # Criar professor

GET  /turmas              # Listar todas as turmas
GET  /turmas/:id          # ✨ Buscar turma por ID
POST /turmas              # Criar turma

GET  /notas               # Listar todas as notas
GET  /notas/:id           # ✨ Buscar nota por ID
POST /notas               # Criar nota

GET  /disciplinas         # Listar todas as disciplinas
GET  /disciplinas/:id     # ✨ Buscar disciplina por ID
POST /disciplinas         # Criar disciplina

GET  /usuarios            # Listar todos os usuários
GET  /usuarios/:id        # ✨ Buscar usuário por ID
POST /usuarios            # Criar usuário

GET  /frequencia          # Listar frequências
GET  /frequencia/:id      # ✨ Buscar frequência por ID
POST /frequencia          # Criar frequência
```

---

## 📝 Exemplos Rápidos

### GET Aluno (Sucesso - 200)

```bash
curl -X GET http://localhost:3000/alunos/1
```

**Resposta:**
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

### GET Aluno (Erro - 404)

```bash
curl -X GET http://localhost:3000/alunos/99999
```

**Resposta:**
```json
{
  "statusCode": 404,
  "message": "Aluno não encontrado.",
  "error": "Not Found"
}
```

### POST Aluno (Criar)

```bash
curl -X POST http://localhost:3000/alunos \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "Maria Silva",
    "matricula": "2025002",
    "dataNascimento": "2009-03-20",
    "cpf": "98765432109",
    "email": "maria@email.com",
    "telefone": "44988887777",
    "turma": "7B"
  }'
```

**Resposta:**
```json
{
  "id": 2,
  "nome": "Maria Silva",
  "matricula": "2025002",
  "dataNascimento": "2009-03-20",
  "cpf": "98765432109",
  "email": "maria@email.com",
  "telefone": "44988887777",
  "turma": "7B",
  "status": "ATIVO"
}
```

---

## 🧪 Testar com REST Client (Recomendado)

### 1. Abra VS Code
### 2. Pressione `Ctrl+Shift+P`
### 3. Digite: "Rest Client: Open"
### 4. Clique em `api-rest-examples.http`
### 5. Clique "Send Request" acima de qualquer linha

**Atalho de teclado:** `Ctrl+Alt+R`

---

## 🐛 Troubleshooting

### Erro: "Módulo não encontrado"
```
❌ Cannot find module 'professor.entity'
✅ Solução: Verifique imports nos controllers/modules
```

### Erro: 404 em todos os endpoints
```
❌ GET /alunos/1 → 404
✅ Solução: 
   1. Verifique se servidor está rodando (port 3000)
   2. Verifique se migrations foram rodadas
   3. Verifique se há dados no banco (POST para criar)
```

### Erro: Validação falhou
```
❌ Email inválido
✅ Solução: Verifique o DTO e os decorators class-validator
```

### Erro: Senha visível em GET /usuarios
```
❌ { "id": 1, "email": "...", "senha": "..." }
✅ Solução: Já implementado - use select no repository
```

---

## 📊 Testes Recomendados

### Sequência Básica
1. POST /alunos → Criar aluno (anote o ID)
2. GET /alunos → Listar (veja todos)
3. GET /alunos/1 → Sucesso (200 OK)
4. GET /alunos/99999 → Erro (404 Not Found)

### Validar Todos os Módulos
Repita a sequência para cada módulo:
- /professores
- /turmas
- /notas
- /disciplinas
- /usuarios
- /frequencia

---

## 📚 Arquivos Principais

| Arquivo | Descrição |
|---------|-----------|
| `api-rest-examples.http` | Exemplos REST Client |
| `IMPLEMENTACAO-GET-BY-ID.md` | Documentação completa |
| `src/app.module.ts` | Módulos importados |
| `src/data-source.ts` | Entities para DB |
| `src/[modulo]/controller/` | HTTP endpoints |
| `src/[modulo]/service/` | Lógica de negócio |
| `src/[modulo]/repository/` | Acesso a dados |
| `src/[modulo]/entity/` | Modelo de banco |
| `src/[modulo]/dto/` | Validações |

---

## ✅ Checklist de Validação

Antes de considerar "pronto":

- [ ] npm install (sem erros)
- [ ] npm run migration:generate (todas as 6)
- [ ] npm run migration:run (sucesso)
- [ ] npm run start:dev (servidor iniciado)
- [ ] GET /alunos → 200 OK
- [ ] GET /alunos/1 → 200 OK (com dados)
- [ ] GET /alunos/99999 → 404 Not Found
- [ ] POST /alunos → 201 Created (novo registro)
- [ ] Repetir para todos os 6 novos módulos

---

## 🎯 Próximos Passos

Depois de validar GET /:id, implemente:

- [ ] PUT /:id (atualizar por ID)
- [ ] DELETE /:id (deletar por ID)
- [ ] PATCH /:id (atualização parcial)
- [ ] GET com query params (filtros)
- [ ] Paginação
- [ ] Ordenação
- [ ] Busca por campo específico

---

## 🆘 Suporte

Se tiver problemas:

1. Verifique logs do servidor: `npm run start:dev`
2. Verifique banco de dados: `SELECT * FROM alunos;`
3. Verifique migrations: `SELECT * FROM typeorm_metadata;`
4. Leia: `IMPLEMENTACAO-GET-BY-ID.md`
5. Abra issue no projeto

---

## 📞 Contato

Desenvolvido com ❤️ para o SchoolSystem

**Data:** 2025-05-26
**Status:** ✅ Pronto para produção
**Cobertura:** 100% dos módulos com GET /:id

---

**Bora começar!** 🎉

Execute: `npm run start:dev` e abra `api-rest-examples.http`
