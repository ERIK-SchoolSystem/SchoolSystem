# 🎓 SchoolSystem

Sistema de gestão escolar desenvolvido para controle de alunos, cursos, turmas e matrículas.

O projeto foi criado com foco em organização acadêmica, regras de negócio e arquitetura backend baseada em boas práticas de desenvolvimento.

---

# 📌 Objetivo do Projeto

O objetivo do sistema é permitir o gerenciamento completo de processos acadêmicos, incluindo:

- Cadastro de alunos
- Cadastro de cursos
- Gerenciamento de turmas
- Controle de matrículas
- Confirmação de matrícula baseada em regras de negócio

O sistema foi desenvolvido considerando modularização, separação de responsabilidades e facilidade de manutenção.

---

# 🚀 Funcionalidades

## 👨‍🎓 Alunos

- Cadastro de alunos
- Atualização de dados
- Consulta de alunos
- Remoção de alunos

## 📚 Cursos

- Cadastro de cursos
- Listagem de cursos
- Atualização de cursos

## 🏫 Turmas

- Criação de turmas
- Controle de vagas
- Associação de cursos

## 📝 Matrículas

- Criação de matrícula
- Consulta de matrícula
- Confirmação de matrícula
- Validação de pagamento
- Validação de vagas disponíveis

---

# 🧠 Regras de Negócio

## Confirmar Matrícula

A matrícula somente pode ser confirmada quando:

- O pagamento estiver aprovado
- Existirem vagas disponíveis na turma
- O aluno estiver devidamente cadastrado

### Cenários de erro

- Turma sem vagas → HTTP 400
- Pagamento não aprovado → HTTP 400
- Matrícula inexistente → HTTP 404

---

# 🏗️ Arquitetura do Projeto

O projeto segue arquitetura em camadas:

```text
Controller → Entrada HTTP
Service → Regras de negócio
Repository → Persistência
Entity/Model → Estrutura de dados
DTO → Validação e transferência de dados
```

## Organização

```text
src/
├── modules/
│   ├── students/
│   ├── courses/
│   ├── classes/
│   ├── enrollments/
│
├── common/
├── database/
├── tests/
```

---

# 🗄️ Modelo de Dados

Principais entidades do sistema:

- Student
- Course
- Class
- Enrollment
- Payment

---

# 🐳 Tecnologias Utilizadas

- Node.js
- NestJS
- TypeScript
- PostgreSQL
- Prisma ORM
- Docker
- Jest
- REST Client / Insomnia / Postman

---

# ⚙️ Pré-requisitos

Antes de executar o projeto, é necessário possuir instalado:

- Node.js 20+
- Docker e Docker Compose
- PostgreSQL
- Git
- PNPM ou NPM

---

# 📥 Clonando o Projeto

```bash
git clone https://github.com/seu-usuario/schoolSystem.git
```

```bash
cd schoolSystem
```

---

# 📦 Instalação das Dependências

Com NPM:

```bash
npm install
```

Ou com PNPM:

```bash
pnpm install
```

---

# 🔐 Configuração do Ambiente

Crie um arquivo chamado:

```bash
.env
```

Utilize como base o arquivo:

```bash
.env.example
```

---

# 📄 Exemplo de .env

```env
PORT=3000
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/schoolsystem
JWT_SECRET=example_secret
NODE_ENV=development
```

---

# 🌍 Variáveis de Ambiente

| Variável | Descrição |
|---|---|
| PORT | Porta da aplicação |
| DATABASE_URL | URL de conexão com PostgreSQL |
| JWT_SECRET | Chave JWT |
| NODE_ENV | Ambiente da aplicação |

---

# ▶️ Executando o Projeto

## Desenvolvimento

```bash
npm run start:dev
```

## Produção

```bash
npm run build
npm run start:prod
```

---

# 🐳 Executando com Docker

```bash
docker-compose up --build
```

---

# 🧪 Executando Testes

## Testes unitários

```bash
npm run test
```

## Cobertura de testes

```bash
npm run test:cov
```

---

# 🌐 Endpoints Principais

## 👨‍🎓 Students

| Método | Endpoint | Descrição |
|---|---|---|
| POST | /students | Criar aluno |
| GET | /students | Listar alunos |
| GET | /students/:id | Buscar aluno |

---

## 📚 Courses

| Método | Endpoint | Descrição |
|---|---|---|
| POST | /courses | Criar curso |
| GET | /courses | Listar cursos |

---

## 🏫 Classes

| Método | Endpoint | Descrição |
|---|---|---|
| POST | /classes | Criar turma |
| GET | /classes | Listar turmas |

---

## 📝 Enrollments

| Método | Endpoint | Descrição |
|---|---|---|
| POST | /enrollments | Criar matrícula |
| POST | /enrollments/:id/confirm | Confirmar matrícula |

---

# 📥 Exemplo de Requisição

## Confirmar Matrícula

```http
POST /enrollments/55/confirm
```

### Body

```json
{
  "studentId": 1,
  "classId": 10,
  "payment": {
    "status": "approved"
  }
}
```

---

# 📤 Exemplo de Resposta

## Sucesso — HTTP 200

```json
{
  "status": "confirmed",
  "enrollmentId": 55
}
```

## Erro — HTTP 400

```json
{
  "message": "Class has no available seats"
}
```

## Erro — HTTP 404

```json
{
  "message": "Enrollment not found"
}
```

---

# 📡 Status HTTP Utilizados

| Código | Significado |
|---|---|
| 200 | Sucesso |
| 201 | Criado com sucesso |
| 400 | Requisição inválida |
| 401 | Não autorizado |
| 404 | Recurso não encontrado |
| 500 | Erro interno |

---

# 📚 Documentação da API

Caso esteja utilizando Swagger:

```text
http://localhost:3000/api/docs
```

---

# 🧪 Testes Manuais

Os testes manuais podem ser executados utilizando:

- REST Client (.http)
- Postman
- Insomnia

Arquivo sugerido:

```text
/docs/http/enrollments.http
```

---

# 🤝 Fluxo de Colaboração

## Padrão de Branches

```text
feature/nome-funcionalidade
fix/nome-correcao
docs/documentacao
test/testes
```

## Exemplos

```text
feature/confirm-enrollment
fix/payment-validation
docs/update-readme
```

---

# 📝 Padrão de Commits

```text
feat: adiciona endpoint de matrícula
fix: corrige validação de vagas
docs: atualiza README
refactor: reorganiza services
```

---

# 👨‍💻 Equipe

| Nome | Função |
|---|---|
| Erik Mazzuco | Backend / Documentação |

---

# 📈 Melhorias Futuras

- Autenticação JWT
- Controle de permissões
- Painel administrativo
- Relatórios acadêmicos
- Integração com frontend Flutter
- Upload de documentos

---

# 📄 Licença

Este projeto possui finalidade acadêmica e educacional.

Uso permitido apenas para fins de estudo.

---

# 📌 Status do Projeto

🚧 Projeto em desenvolvimento acadêmico.

