# Proj-estoque

Projeto inicial de API para controle de estoque usando Node.js, Express, PostgreSQL e Sequelize.

## O que ja existe

- Setup do servidor Express em `src/server.js`
- Configuracao do Sequelize em `src/config/database.js`
- Conexao com PostgreSQL em `src/database/connection.js`
- Model `Product` em `src/models/Product.js`
- CRUD basico de produtos em `/products`
- Script para sincronizar o banco com Sequelize

## O que ainda falta para o projeto completo da avaliacao

- Model de usuarios
- Senha criptografada com bcrypt
- Login com token JWT
- Mais tabelas e relacionamentos
- Tabela pivo e relacao N:N
- Middleware de autenticacao
- Docker, PostgreSQL e Nginx via `docker-compose.yml`
- Migrations formais

## Como configurar

Crie um arquivo `.env` usando `.env.example` como base:

```bash
cp .env.example .env
```

Instale as dependencias:

```bash
npm install
```

Sincronize as tabelas no banco:

```bash
npm run db:sync
```

Inicie o servidor:

```bash
npm start
```

Abra a documentacao Swagger:

```text
http://localhost:3000/api-docs
```

## Rotas iniciais

- `GET /health`
- `POST /auth/register`
- `POST /auth/login`
- `GET /auth/me`
- `GET /usuarios`
- `GET /itens`
- `GET /pedidos`
- `GET /itens-pedido`
