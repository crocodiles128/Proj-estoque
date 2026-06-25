# Dicionário de Dados

## Tabela: USUARIOS

| Campo          | Tipo de Dado | Tamanho | Chave | Nulo | Descrição                                    |
| -------------- | ------------ | ------- | ----- | ---- | -------------------------------------------- |
| id_usuarios    | INT          | -       | PK    | Não  | Identificador único do usuário.              |
| nome_usuarios  | VARCHAR      | 255     | -     | Não  | Nome do usuário.                             |
| email_usuarios | VARCHAR      | 255     | -     | Não  | Endereço de e-mail do usuário.               |
| cargo_usuarios | BIGINT       | -       | -     | Não  | Código ou identificação do cargo do usuário. |

---

## Tabela: AUTH

| Campo       | Tipo de Dado | Tamanho | Chave  | Nulo | Descrição                                                       |
| ----------- | ------------ | ------- | ------ | ---- | --------------------------------------------------------------- |
| id_usuarios | BIGINT       | -       | PK, FK | Não  | Identificador do usuário vinculado ao registro de autenticação. |
| senha_hash  | VARCHAR      | 255     | -      | Não  | Senha criptografada do usuário.                                 |

**Chave Estrangeira:**

*  id_usuarios → USUARIOS(id_usuarios)

---

## Tabela: PEDIDO

| Campo       | Tipo de Dado | Tamanho | Chave | Nulo | Descrição                                         |
| ----------- | ------------ | ------- | ----- | ---- | ------------------------------------------------- |
| id_pedido   | INT          | -       | PK    | Não  | Identificador único do pedido.                    |
| data_pedido | DATE         | -       | -     | Não  | Data de realização do pedido.                     |
| id_usuarios | INT          | -       | FK    | Não  | Identificador do usuário responsável pelo pedido. |
| preco_total | DECIMAL      | 10,2    | -     | Não  | Valor total do pedido.                            |

**Chave Estrangeira:**

* id_usuarios → USUARIOS(id_usuarios)

---

## Tabela: ITEM

| Campo           | Tipo de Dado | Tamanho | Chave | Nulo | Descrição                         |
| --------------- | ------------ | ------- | ----- | ---- | --------------------------------- |
| id_item         | INT          | -       | PK    | Não  | Identificador único do item.      |
| nome_item       | VARCHAR      | 255     | -     | Não  | Nome do item.                     |
| descricao_item  | VARCHAR      | 500     | -     | Sim  | Descrição detalhada do item.      |
| quantidade_item | BIGINT       | -       | -     | Não  | Quantidade disponível em estoque. |
| preco_item      | DECIMAL      | 10,2    | -     | Não  | Preço unitário atual do item.     |

---

## Tabela: ITEM_PEDIDO

| Campo              | Tipo de Dado | Tamanho | Chave  | Nulo | Descrição                                    |
| ------------------ | ------------ | ------- | ------ | ---- | -------------------------------------------- |
| id_pedido          | INT          | -       | PK, FK | Não  | Identificador do pedido.                     |
| id_item            | INT          | -       | PK, FK | Não  | Identificador do item.                       |
| quantidade_produto | INT          | -       | -      | Não  | Quantidade do item incluída no pedido.       |
| valor_unitario     | DECIMAL      | 10,2    | -      | Não  | Valor unitário do item no momento da compra. |

**Chaves Estrangeiras:**

* id_pedido → PEDIDO(id_pedido)
* id_item → ITEM(id_item)

---

# Resumo das Chaves Primárias

| Tabela      | Chave Primária       |
| ----------- | -------------------- |
| USUARIOS    | id_usuarios          |
| AUTH        | id_usuarios          |
| PEDIDO      | id_pedido            |
| ITEM        | id_item              |
| ITEM_PEDIDO | (id_pedido, id_item) |

---

# Resumo das Chaves Estrangeiras

| Tabela      | Campo       | Referência            |
| ----------- | ----------- | --------------------- |
| AUTH        | id_usuarios | USUARIOS(id_usuarios) |
| PEDIDO      | id_usuarios | USUARIOS(id_usuarios) |
| ITEM_PEDIDO | id_pedido   | PEDIDO(id_pedido)     |
| ITEM_PEDIDO | id_item     | ITEM(id_item)         |

---

# Observações

1. A tabela **AUTH** foi separada da tabela **USUARIOS** para armazenar exclusivamente informações de autenticação.
2. A tabela **ITEM_PEDIDO** atua como entidade associativa entre **PEDIDO** e **ITEM**, resolvendo o relacionamento muitos-para-muitos (N:N).
3. O atributo **valor_unitario** em **ITEM_PEDIDO** preserva o histórico de preços dos itens no momento da venda.
4. O atributo **preco_total** em **PEDIDO** armazena o valor final da compra, facilitando consultas e relatórios.
5. A chave primária composta de **ITEM_PEDIDO** impede a duplicação do mesmo item dentro de um mesmo pedido.

