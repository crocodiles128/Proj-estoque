CREATE TABLE pedido (
    id_pedido SERIAL PRIMARY KEY,
    data_pedido DATE NOT NULL,
    id_cliente INTEGER NOT NULL,
    preco_total DECIMAL(10,2),

    FOREIGN KEY (id_cliente)
    REFERENCES usuarios(id_usuarios)
);