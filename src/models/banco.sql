CREATE TABLE usuarios (
    id_usuarios SERIAL PRIMARY KEY,
    nome_usuarios VARCHAR(100) NOT NULL,
    email_usuarios VARCHAR(100) UNIQUE NOT NULL,
    cargo_usuarios VARCHAR(50)
);

CREATE TABLE auth (
    id_usuarios INT PRIMARY KEY,
    senha_hash VARCHAR(255) NOT NULL,

    FOREIGN KEY (id_usuarios)
    REFERENCES usuarios(id_usuarios)
);

CREATE TABLE pedido (
    id_pedido SERIAL PRIMARY KEY,
    data_pedido DATE NOT NULL,
    id_cliente INT NOT NULL,
    preco_total DECIMAL(10,2),

    FOREIGN KEY (id_cliente)
    REFERENCES usuarios(id_usuarios)
);

CREATE TABLE item (
    id_item SERIAL PRIMARY KEY,
    nome_item VARCHAR(100) NOT NULL,
    descricao_item TEXT,
    quantidade_item INT,
    preco_item DECIMAL(10,2)
);

CREATE TABLE item_pedido (
    id_pedido INT,
    id_item INT,
    quantidade_produto INT NOT NULL,
    valor_unitario DECIMAL(10,2) NOT NULL,

    PRIMARY KEY (id_pedido, id_item),

    FOREIGN KEY (id_pedido)
    REFERENCES pedido(id_pedido),

    FOREIGN KEY (id_item)
    REFERENCES item(id_item)
);