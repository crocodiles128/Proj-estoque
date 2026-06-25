# Modelo Entidade-Relacionamento (MER)

## Entidades e Atributos

### USUARIOS

* **id_usuarios** (PK, INT)
* nome_usuarios (VARCHAR)
* email_usuarios (VARCHAR)
* cargo_usuarios (BIGINT)

### AUTH

* **id_usuarios** (PK, FK, BIGINT)
* senha_hash (VARCHAR)

### PEDIDO

* **id_pedido** (PK, INT)
* data_pedido (DATE)
* **id_usuarios** (FK, INT)
* preco_total (DECIMAL)

### ITEM

* **id_item** (PK, INT)
* nome_item (VARCHAR)
* descricao_item (VARCHAR)
* quantidade_item (BIGINT)
* preco_item (DECIMAL)

### ITEM_PEDIDO (Entidade Associativa)

* **id_pedido** (PK, FK, INT)
* **id_item** (PK, FK, INT)
* quantidade_produto (INT)
* valor_unitario (DECIMAL)

---

# Relacionamentos

## USUARIOS realiza PEDIDO

**Cardinalidade:** 1:N

### Descrição

* Um usuário pode realizar um ou vários pedidos.
* Um pedido pertence a um e apenas um usuário.

### Participação

* USUARIOS (1, N)
* PEDIDO (1, 1)

### Chave Estrangeira

* PEDIDO.id_usuarios → USUARIOS.id_usuarios

---

## PEDIDO contém ITEM_PEDIDO

**Cardinalidade:** 1:N

### Descrição

* Um pedido deve conter um ou vários itens de pedido.
* Um registro de item_pedido pertence a um e apenas um pedido.

### Participação

* PEDIDO (1, N)
* ITEM_PEDIDO (1, 1)

### Chave Estrangeira

* ITEM_PEDIDO.id_pedido → PEDIDO.id_pedido

---

## ITEM faz parte de ITEM_PEDIDO

**Cardinalidade:** 1:N

### Descrição

* Um item pode fazer parte de um ou vários itens de pedido.
* Um registro de item_pedido refere-se a um e apenas um item.

### Participação

* ITEM (1, N)
* ITEM_PEDIDO (1, 1)

### Chave Estrangeira

* ITEM_PEDIDO.id_item → ITEM.id_item

---

## USUARIOS possui AUTH

**Cardinalidade:** 1:1

### Descrição

* Um usuário possui um e apenas um registro de autenticação.
* Um registro de autenticação pertence a um e apenas um usuário.

### Participação

* USUARIOS (1, 1)
* AUTH (1, 1)

### Chave Estrangeira

* AUTH.id_usuarios → USUARIOS.id_usuarios

---

# Resumo das Chaves Primárias (PK)

| Entidade    | Chave Primária       |
| ----------- | -------------------- |
| USUARIOS    | id_usuarios          |
| AUTH        | id_usuarios          |
| PEDIDO      | id_pedido            |
| ITEM        | id_item              |
| ITEM_PEDIDO | (id_pedido, id_item) |

---

# Resumo das Chaves Estrangeiras (FK)

| Tabela      | Chave Estrangeira | Referência            |
| ----------- | ----------------- | --------------------- |
| AUTH        | id_usuarios       | USUARIOS(id_usuarios) |
| PEDIDO      | id_usuarios       | USUARIOS(id_usuarios) |
| ITEM_PEDIDO | id_pedido         | PEDIDO(id_pedido)     |
| ITEM_PEDIDO | id_item           | ITEM(id_item)         |

---

# Regras de Negócio

1. Um usuário pode realizar um ou vários pedidos.
2. Todo pedido deve estar associado a um único usuário.
3. Todo pedido deve possuir pelo menos um item.
4. Um item pode estar presente em vários pedidos.
5. O relacionamento entre PEDIDO e ITEM é resolvido pela entidade associativa ITEM_PEDIDO.
6. A entidade ITEM_PEDIDO armazena a quantidade e o valor unitário do item no momento da venda.
7. Cada usuário possui exatamente um registro de autenticação.
8. Cada registro de autenticação pertence exclusivamente a um usuário.
9. A chave primária de ITEM_PEDIDO é composta por (id_pedido, id_item).
10. O valor total do pedido é armazenado em PEDIDO através do atributo preco_total.

---

# Modelo Relacional Resultante

**USUARIOS**(
id_usuarios PK,
nome_usuarios,
email_usuarios,
cargo_usuarios
)

**AUTH**(
id_usuarios PK FK,
senha_hash
)

**PEDIDO**(
id_pedido PK,
data_pedido,
id_usuarios FK,
preco_total
)

**ITEM**(
id_item PK,
nome_item,
descricao_item,
quantidade_item,
preco_item
)

**ITEM_PEDIDO**(
id_pedido PK FK,
id_item PK FK,
quantidade_produto,
valor_unitario
)