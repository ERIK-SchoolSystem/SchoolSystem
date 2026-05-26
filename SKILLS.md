# 🛠️ Skills

## 💻 Tecnologias

| Tecnologia | Versão | Utilização |
|------------|--------|-----------|
| **TypeScript** | 5.7.3 | Linguagem principal com tipagem forte |
| **Node.js** | 24.0.0 | Runtime JavaScript |
| **pnpm** | 10.33.0 | Package manager com performance otimizada |
| **PostgreSQL** | 8.21.0 | Banco de dados relacional |

---

## 🎯 Back-end

### Framework & Runtime
- **NestJS** `11.0.1` - Framework Node.js completo com arquitetura modular
- **Express** `5.2.1` - Servidor HTTP

### ORM & Database
- **TypeORM** `1.0.0` - ORM para manipulação de dados com PostgreSQL
- **PostgreSQL Driver** (`pg`) `8.21.0` - Conexão nativa com PostgreSQL

### Validação & Transformação
- **class-validator** `0.15.1` - Validação decorada de DTOs
- **class-transformer** `0.5.1` - Transformação e serialização de dados
- **Reflect Metadata** `0.2.2` - Suporte a decoradores TypeScript

### Programação Reativa
- **RxJS** `7.8.1` - Operadores reativos para fluxos assíncronos

### Testes
- **Jest** `30.0.0` - Framework de testes unitários
- **@nestjs/testing** `11.0.1` - Utilitários de teste NestJS
- **Supertest** `7.0.0` - Testes E2E e HTTP
- **ts-jest** `29.2.5` - Suporte TypeScript em testes

---

## 🏗️ Arquitetura

### Padrões Implementados
- **Repository Pattern** - Abstração da camada de dados
- **MVC Layered Architecture** - Controllers → Services → Repository
- **Module Pattern** - Organização modular de features
- **Dependency Injection** - Inversão de controle com NestJS
- **DTO Pattern** - Validação e transformação de entrada/saída
- **Singleton Pattern** - Providers globais do NestJS

### Estrutura de Pastas
```
📦 Modular por Feature
 ├── 📂 alunos/
 │   ├── controller/      # Endpoints HTTP
 │   ├── service/         # Lógica de negócio
 │   ├── repository/      # Acesso a dados
 │   ├── entity/          # Modelo de banco
 │   ├── dto/             # Data Transfer Objects
 │   └── module/          # Definição do módulo
 └── 📂 common/
     └── enums/           # Enumerações globais
```

---

## 🔒 Segurança & Validação

### Validações Implementadas
- **ValidationPipe Global** - Whitelist automática de propriedades
- **Class Validator Decorators** - Validação em tempo real
  - `@IsEmail()` - Validação de emails
  - `@IsDateString()` - Validação de datas (ISO 8601)
  - `@Length()` - Validação de comprimento de strings
  - `@IsNotEmpty()` - Campos obrigatórios com mensagens customizadas

### Segurança no Banco de Dados
- **Constraints Únicos** - Matricula, CPF, Email (previne duplicação)
- **Status Enum** - Controle de atividade (ATIVO/INATIVO)
- **Tipagem em Banco** - Tipos específicos (date, varchar, etc)
- **Migrations Versionadas** - Rastreamento de alterações no schema

### Tratamento de Erros
- **ConflictException** - Resposta HTTP apropriada para conflitos
- **HTTP Status Codes** - Uso de Status Codes corretos (200, 201, 409)
- **Mensagens de Erro Customizadas** - Feedback claro ao cliente

---

## 🧪 Testes & Qualidade

### Cobertura de Testes
- **Unit Tests** - Testes de repositório e serviços
- **E2E Tests** - Testes de fluxo completo com Supertest
- **Mocking** - Jest mocks para dependências
- **Coverage Reports** - Relatórios de cobertura de código

### Code Quality Tools
- **ESLint** `9.18.0` - Análise estática com regras TypeScript
  - typescript-eslint integration
  - Prettier integration automática
  - Regras strictas para `noExplicitAny`, `noFloatingPromises`
- **Prettier** `3.4.2` - Formatação automática de código
  - Single quotes
  - Trailing commas
  - 2 espaços de indentação
- **TypeScript Strict Mode** - Type checking rigoroso
  - `strictNullChecks` ativo
  - `noImplicitAny` desativado (permissivo)
  - `forceConsistentCasingInFileNames` ativo

---

## 📊 Banco de Dados

### Sistema Gerenciador
- **PostgreSQL** - Banco relacional robusto

### Conceitos Implementados
- **Migrations Versionadas** - Controle de versão do schema
- **Entities com Decorators** - Mapeamento objeto-relacional
- **Relacionamentos** - Preparado para escalabilidade
- **Indices Únicos** - Performance em buscas
- **Tipos de Dados Específicos** - Date, VARCHAR, INT

### Entidades
- **Alunos** - Cadastro com validações completas
  - Campos: ID, Nome, Matrícula, Data Nascimento, CPF, Email, Telefone, Turma, Status
  - Constraints: Matrícula, CPF, Email (únicos)

---

## ⚙️ DevOps & Tooling

### Build & Deploy
- **Build TypeScript** - Compilação para JavaScript
- **Watch Mode** - Desenvolvimento em tempo real
- **Source Maps** - Debug fácil em produção

### Package Management
- **pnpm** - Gerenciamento eficiente com lock files determinísticos

### Scripts Automatizados
```bash
build           # Compilar TypeScript
format          # Formatar código com Prettier
start           # Rodar em produção
start:dev       # Modo desenvolvimento com watch
start:debug     # Debug com breakpoints
lint            # Análise e correção automática
test            # Testes unitários
test:watch      # Watch tests
test:cov        # Cobertura
test:debug      # Debug testes
test:e2e        # Testes integração
migration:*     # Controle de migrations
```

### Configuração
- **Variáveis de Ambiente** - DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME
- **TypeScript Configuration** - ES2023, módulos Node.js
- **ESLint Config** - TypeScript-aware com prettier integration

---

## 📚 Funcionalidades

### Gestão de Alunos
- ✅ **Cadastro de Alunos** - Criação com validação completa
- ✅ **Consulta de Alunos** - Listagem ordenada (nome ASC)
- ✅ **Validações Únicas** - Matrícula, CPF, Email não podem duplicar
- ✅ **Filtro por Status** - Exibe apenas alunos ativos
- ✅ **DTOs Tipados** - Validação automática na entrada

### Preparado Para Expansão
- Cursos (documentado no README)
- Turmas (documentado no README)
- Matrículas (documentado no README)
- Enums para status de matrícula (PENDING, CONFIRMED, CANCELLED)

---

## 🧠 Soft Skills Aplicadas no Projeto

### Código Limpo & Manutenibilidade
- ✅ **Nomes Descritivos** - Variáveis e funções autoexplicativas
- ✅ **SOLID Principles** - Single Responsibility em cada classe
- ✅ **DRY (Don't Repeat Yourself)** - Reutilização via Repository Pattern
- ✅ **Separação de Responsabilidades** - Controller, Service, Repository bem definidos

### Boas Práticas
- ✅ **Type Safety** - TypeScript em modo strict
- ✅ **Error Handling** - Tratamento apropriado de exceções
- ✅ **Validação de Dados** - Múltiplas camadas de validação
- ✅ **Documentação** - Mensagens de erro claras e significativas
- ✅ **Testes Automatizados** - Confiança no código

### Arquitetura
- ✅ **Modularização** - Features em módulos independentes
- ✅ **Escalabilidade** - Estrutura preparada para crescimento
- ✅ **Reusabilidade** - Componentes reutilizáveis
- ✅ **Manutenibilidade** - Fácil adicionar novas features

### Desenvolvimento Profissional
- ✅ **Version Control** - Git integrado
- ✅ **Code Formatting** - Padronização automática
- ✅ **Linting** - Análise estática contínua
- ✅ **Debugging** - Suporte completo para debug
- ✅ **Performance** - pnpm para instalações otimizadas

---

## 🚀 Diferenciais

- 🎯 **Type-Safe Validation** - Validação em tempo de compilação e runtime
- 🔄 **Reactive Programming** - RxJS para operações assíncronas
- 📦 **Modular & Scalable** - Fácil adicionar novos recursos
- 🧪 **Bem Testado** - Unit + E2E tests
- 📝 **Production Ready** - Migrations, environment vars, error handling
- ⚡ **Performance** - pnpm lock, source maps, incremental build
- 🔒 **Secure** - Validações, constraints, error messages seguros
