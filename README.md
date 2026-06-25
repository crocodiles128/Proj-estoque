# Proj-estoque

API REST para controle de estoque utilizando Node.js, Express, PostgreSQL e Sequelize com documentação Swagger.

## Funcionalidades

- Autenticação JWT (register, login, profile)
- CRUD completo de Usuários
- CRUD completo de Itens (produtos)
- CRUD completo de Pedidos
- CRUD completo de Itens do Pedido
- Tabela pivô `ITEM_PEDIDO` para relacionar `ITENS` e `PEDIDOS` em uma relação N:N
- Middleware de autenticação protegendo todas as rotas (exceto login/register)
- Documentação Swagger em `/api-docs`

## Containers utilizados

- `nginx` - servidor HTTP reverso que encaminha requisições para a aplicação
- `app` - container da aplicação Node.js
- `db` - container PostgreSQL para persistência de dados
- `node_cli` - container Node.js opcional para uso de comandos CLI e migrações

## Bibliotecas utilizadas

- `express` - framework web para Node.js
- `sequelize` - ORM para PostgreSQL
- `pg` e `pg-hstore` - driver e utilitário PostgreSQL
- `jsonwebtoken` - geração e validação de JWT
- `bcrypt` - hashing de senhas
- `dotenv` - gerenciamento de variáveis de ambiente
- `swagger-jsdoc` e `swagger-ui-express` - documentação Swagger

## Como configurar

Crie um arquivo `.env` usando `.env.example` como base:

```bash
cp .env.example .env
```

Instale as dependências:

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

## Usando Docker

Para iniciar os containers com Docker Compose:

```bash
docker compose up --build
```

Isso criará os containers `nginx`, `app`, `db` e `node_cli` (perfil `cli`).

## Como realizar login e usar o token JWT

1. Faça uma requisição `POST /auth/login` com o corpo:

```json
{
  "email": "seu@email.com",
  "senha": "sua_senha"
}
```

2. A resposta retorna um token JWT:

```json
{
  "token": "seu.jwt.token.aqui"
}
```

3. Use o token nas rotas protegidas no cabeçalho `Authorization`:

```http
Authorization: Bearer seu.jwt.token.aqui
```

4. A rota `GET /auth/me` retorna os dados do usuário autenticado usando o token.

## Documentação Swagger

Todas as APIs estão documentadas via Swagger. Acesse:

```text
http://localhost:3000/api-docs
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

