# Desafio Técnico 02 — Desenvolvedor Back-end Júnior

## Tema
Sistema de Gestão de Biblioteca (Library Management API)

### Objetivo
Desenvolva uma API REST para gerenciar livros, leitores e empréstimos.

## Stack
- Node.js
- TypeScript
- Express ou Fastify
- PostgreSQL
- Prisma
- Zod
- Swagger
- Docker
- Git

## Funcionalidades

### Livros
- POST /books
- GET /books
- GET /books/:id
- PATCH /books/:id
- DELETE /books/:id

Campos: título, ISBN, autor, editora, categoria, ano, quantidadeDisponivel.

### Leitores
- POST /readers
- GET /readers
- GET /readers/:id
- PATCH /readers/:id

Campos: nome, email, telefone.

### Empréstimos
- POST /loans
- PATCH /loans/:id/return
- GET /loans
- GET /readers/:id/history

Campos: livro, leitor, dataEmprestimo, dataPrevistaDevolucao, dataDevolucao, status.

## Regras de Negócio
- ISBN único.
- Email único.
- Não emprestar livro sem estoque.
- Máximo de 3 empréstimos ativos por leitor.
- Reduzir estoque ao emprestar.
- Aumentar estoque ao devolver.
- Não excluir livro com empréstimos ativos.
- Registrar histórico.

## Requisitos
- Arquitetura em camadas.
- Paginação.
- Filtros.
- Tratamento de erros.
- Validação com Zod.
- Swagger.
- Migrations.
- Variáveis de ambiente.

## Extras
- JWT
- Perfis de usuário
- Dashboard de estatísticas
- Docker Compose
- Testes unitários e integração
- Seed

## Entregáveis
- Código
- README
- Swagger
- Testes
- Docker Compose
- .env.example
