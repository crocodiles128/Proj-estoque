CREATE TABLE IF NOT EXISTS item (
    id_item SERIAL PRIMARY KEY,
    nome_item VARCHAR(100) NOT NULL,
    descricao_item TEXT,
    quantidade_item INTEGER,
    preco_item DECIMAL(10,2)
);