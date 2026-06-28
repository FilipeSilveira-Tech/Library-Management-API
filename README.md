# 📚 Library Management API

Uma API REST para gerenciamento de bibliotecas, permitindo o controle de livros, leitores e empréstimos.

> Status: 🚧 Em Desenvolvimento

---

# Objetivo
Desenvolver uma API REST utilizando boas práticas de arquitetura, persistência de dados, documentação e testes.

---

# Tecnologias
- [ ] Node.js
- [ ] TypeScript
- [ ] Express/Fastify
- [ ] PostgreSQL
- [ ] Prisma ORM
- [ ] Zod
- [ ] Swagger
- [ ] Docker
- [ ] JWT (Extra)
- [ ] Vitest/Jest

---

# Roadmap
## ✅ Fase 1 — Configuração Inicial
### Projeto
- [ ] Criar repositório Git
- [ ] Inicializar projeto Node
- [ ] Configurar TypeScript
- [ ] Configurar ESLint
- [ ] Configurar Prettier
- [ ] Configurar EditorConfig
- [ ] Configurar Husky (Opcional)
- [ ] Configurar Git Ignore

### Ambiente
- [ ] Criar arquivo `.env`
- [ ] Criar `.env.example`
- [ ] Configurar Docker
- [ ] Configurar Docker Compose
- [ ] Configurar PostgreSQL

### Prisma
- [ ] Instalar Prisma
- [ ] Configurar datasource
- [ ] Gerar primeira migration

---

# ✅ Fase 2 — Modelagem
## Book
- [ ] Criar Model
- [ ] Criar Migration
- [ ] Criar Repository
- [ ] Criar Service
- [ ] Criar Controller
- [ ] Criar Rotas

---

## Reader
- [ ] Criar Model
- [ ] Criar Migration
- [ ] Criar Repository
- [ ] Criar Service
- [ ] Criar Controller
- [ ] Criar Rotas

---

## Loan
- [ ] Criar Model
- [ ] Criar Migration
- [ ] Criar Repository
- [ ] Criar Service
- [ ] Criar Controller
- [ ] Criar Rotas

---

# ✅ Fase 3 — CRUD Livros
## Endpoints
- [ ] POST /books
- [ ] GET /books
- [ ] GET /books/:id
- [ ] PATCH /books/:id
- [ ] DELETE /books/:id

## Regras
- [ ] ISBN único
- [ ] Quantidade maior que zero
- [ ] Validação de dados
- [ ] Tratamento de erros

---

# ✅ Fase 4 — CRUD Leitores
## Endpoints
- [ ] POST /readers
- [ ] GET /readers
- [ ] GET /readers/:id
- [ ] PATCH /readers/:id
- [ ] DELETE /readers/:id

## Regras
- [ ] Email único
- [ ] Nome obrigatório
- [ ] Telefone válido

---

# ✅ Fase 5 — Empréstimos
## Endpoints
- [ ] POST /loans
- [ ] GET /loans
- [ ] GET /loans/:id
- [ ] PATCH /loans/:id/return

## Regras
- [ ] Verificar estoque
- [ ] Diminuir estoque
- [ ] Registrar data do empréstimo
- [ ] Registrar previsão de devolução
- [ ] Alterar status

---

# ✅ Fase 6 — Devoluções
- [ ] Registrar devolução
- [ ] Atualizar estoque
- [ ] Atualizar status
- [ ] Registrar histórico

---

# ✅ Fase 7 — Regras de Negócio
- [ ] ISBN único
- [ ] Email único
- [ ] Máximo de 3 empréstimos por leitor
- [ ] Não excluir livro emprestado
- [ ] Não emprestar sem estoque
- [ ] Não devolver livro duas vezes

---

# ✅ Fase 8 — Filtros
## Livros
- [ ] Buscar por título
- [ ] Buscar por autor
- [ ] Buscar por categoria

## Leitores
- [ ] Buscar por nome

## Empréstimos
- [ ] Ativos
- [ ] Finalizados
- [ ] Em atraso

---

# ✅ Fase 9 — Paginação
- [ ] Paginação
- [ ] Ordenação
- [ ] Limite de registros

---

# ✅ Fase 10 — Validações
- [ ] Zod
- [ ] Middleware de validação
- [ ] Mensagens de erro padronizadas

---

# ✅ Fase 11 — Tratamento de Erros
- [ ] Error Handler
- [ ] Classes de erro
- [ ] HTTP Status adequados

---

# ✅ Fase 12 — Documentação
- [ ] Swagger
- [ ] Exemplos de Request
- [ ] Exemplos de Response
- [ ] Documentar erros

---

# ✅ Fase 13 — Testes
## Unitários
- [ ] Services
- [ ] Validators
- [ ] Utils

## Integração
- [ ] Endpoints
- [ ] Banco de dados

---

# ✅ Fase 14 — Extras

## Autenticação
- [ ] Cadastro
- [ ] Login
- [ ] JWT
- [ ] Middleware Auth

## Dashboard
- [ ] Total de livros
- [ ] Livros disponíveis
- [ ] Livros emprestados
- [ ] Empréstimos ativos
- [ ] Empréstimos atrasados

---

# Estrutura do Projeto
```text
src/
├── config/
├── controllers/
├── database/
│   ├── migrations/
│   ├── prisma/
│   └── seed.ts
├── middlewares/
├── repositories/
├── routes/
├── schemas/
├── services/
├── tests/
├── types/
├── utils/
├── app.ts
└── server.ts
````

---

# Como Executar
## Instalar dependências

```bash
npm install
```

## Executar banco

```bash
docker compose up -d
```

## Executar migrations

```bash
npx prisma migrate dev
```

## Rodar projeto

```bash
npm run dev
```

## Rodar testes

```bash
npm test
```

---

# Funcionalidades Implementadas

## Livros
* [ ]

## Leitores
* [ ]

## Empréstimos
* [ ]

## Autenticação
* [ ]

## Dashboard
* [ ]

---

# Melhorias Futuras
* [ ] Upload de capa dos livros
* [ ] Reserva de livros
* [ ] Notificação de atraso
* [ ] Multas
* [ ] Relatórios PDF
* [ ] Cache com Redis
* [ ] CI/CD
* [ ] Deploy

---

# Licença
MIT
