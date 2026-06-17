CREATE TABLE IF NOT EXISTS pedido (
    id_pedido SERIAL PRIMARY KEY,
    data_pedido DATE NOT NULL,
    id_usuarios INTEGER NOT NULL,
    preco_total DECIMAL(10,2),
    FOREIGN KEY (id_usuarios) REFERENCES usuarios(id_usuarios)
);