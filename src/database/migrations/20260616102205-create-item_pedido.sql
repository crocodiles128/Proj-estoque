CREATE TABLE IF NOT EXISTS item_pedido (
    id_pedido INTEGER NOT NULL,
    id_item INTEGER NOT NULL,
    quantidade_produto INTEGER NOT NULL,
    valor_unitario DECIMAL(10,2) NOT NULL,
    PRIMARY KEY (id_pedido, id_item),
    FOREIGN KEY (id_pedido) REFERENCES pedido(id_pedido),
    FOREIGN KEY (id_item) REFERENCES item(id_item)
);