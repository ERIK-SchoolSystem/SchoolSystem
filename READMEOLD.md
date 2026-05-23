# 🎓 SchoolSystem

Sistema de gestão escolar desenvolvido para controle de alunos, cursos, turmas e matrículas, com arquitetura baseada em boas práticas de backend.

---

## 📌 Sobre o Projeto

O **SchoolSystem** é uma aplicação que tem como objetivo gerenciar processos acadêmicos essenciais, como cadastro de alunos, organização de turmas e confirmação de matrículas.

O sistema foi modelado a partir de um caso de uso central (**Confirmar Matrícula**), garantindo uma base sólida para expansão e manutenção.

---

## 🚀 Funcionalidades

* 👨‍🎓 Cadastro de alunos
* 📚 Cadastro de cursos
* 🏫 Criação de turmas
* 📝 Matrícula de alunos
* ✅ Confirmação de matrícula (com regras de negócio)

---

## 🧠 Regra de Negócio Principal

> A matrícula só pode ser confirmada se houver vaga disponível e o pagamento estiver aprovado.

---

## 🌐 API (Exemplo de Endpoint)

### Confirmar Matrícula

```http
POST /enrollments/{id}/confirm
```

### 📥 Request

```json
{
  "studentId": 1,
  "classId": 10,
  "payment": {
    "status": "approved"
  }
}
```

### 📤 Response

```json
{
  "status": "confirmed",
  "enrollmentId": 55
}
```

---

## 🏗️ Arquitetura

O projeto segue uma arquitetura em camadas:

* **Controller** → Entrada da aplicação (HTTP)
* **Service** → Regras de negócio
* **Repository** → Acesso a dados
* **ORM** → Mapeamento objeto-relacional
* **Banco de Dados** → Persistência (PostgreSQL)

---

## 🗄️ Modelo de Dados

Principais entidades do sistema:

* Student
* Course
* Class
* Enrollment
* Payment

---

## 🐳 Tecnologias Utilizadas

* Backend: (definir — ex: Java, Node.js, etc.)
* Banco de Dados: PostgreSQL
* ORM: (ex: Hibernate, Prisma, etc.)
* Containerização: Docker

---

## ⚙️ Como Executar o Projeto

```bash
# Clonar repositório
git clone https://github.com/seu-usuario/schoolSystem.git

# Entrar na pasta
cd schoolSystem

# Subir containers
docker-compose up
```

---

## 📂 Estrutura do Projeto

```
schoolSystem/
│── src/
│   ├── controller/
│   ├── service/
│   ├── repository/
│   ├── model/
│── docker/
│── README.md
```

---

## 📈 Futuras Melhorias

* Autenticação de usuários
* Painel administrativo
* Relatórios acadêmicos
* Integração com frontend (Flutter)

---

## 👨‍💻 Autor

**Erik Mazzuco**
Desenvolvimento de Sistemas Corporativos

---

## 📄 Licença

Este projeto é acadêmico e de uso educacional.
