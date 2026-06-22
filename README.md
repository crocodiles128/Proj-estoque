# Proj-estoque

API REST para controle de estoque utilizando Node.js, Express, PostgreSQL, Sequelize com documentação Swagger.

## Funcionalidades

- Autenticação JWT (register, login, profile)
- CRUD completo de Usuários
- CRUD completo de Itens (produtos)
- CRUD completo de Pedidos
- CRUD completo de Itens do Pedido (tabela pivô com relação N:N)
- Middleware de autenticação protegendo todas as rotas (exceto login/register)
- Documentação Swagger em `/api-docs`

## Documentação Swagger

Todas as APIs estão documentadas via Swagger. Acesse:

```text
http://localhost:3000/api-docs
```

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

Execute as migrations:

```bash
npm run db:migrate
```

Inicie o servidor:

```bash
npm start
```

## Rotas da API

### Autenticação (públicas)
- `POST /auth/register` - Cadastro de usuário
- `POST /auth/login` - Login e retorno de token JWT
- `GET /auth/me` - Perfil do usuário autenticado

### Usuários (protegidas)
- `GET /usuarios` - Listar usuários
- `GET /usuarios/{id}` - Buscar usuário por ID
- `POST /usuarios` - Criar usuário
- `PUT /usuarios/{id}` - Atualizar usuário
- `DELETE /usuarios/{id}` - Remover usuário

### Itens (protegidas)
- `GET /itens` - Listar itens
- `GET /itens/{id}` - Buscar item por ID
- `POST /itens` - Criar item
- `PUT /itens/{id}` - Atualizar item
- `DELETE /itens/{id}` - Remover item

### Pedidos (protegidas)
- `GET /pedidos` - Listar pedidos
- `GET /pedidos/{id}` - Buscar pedido por ID
- `POST /pedidos` - Criar pedido
- `PUT /pedidos/{id}` - Atualizar pedido
- `DELETE /pedidos/{id}` - Remover pedido

### Itens do Pedido (protegidas)
- `GET /itens-pedido` - Listar itens vinculados aos pedidos
- `GET /itens-pedido/{id_pedido}/{id_item}` - Buscar item do pedido
- `POST /itens-pedido` - Vincular item a um pedido
- `PUT /itens-pedido/{id_pedido}/{id_item}` - Atualizar item do pedido
- `DELETE /itens-pedido/{id_pedido}/{id_item}` - Remover item do pedido
