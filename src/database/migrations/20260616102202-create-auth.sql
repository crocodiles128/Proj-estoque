CREATE TABLE IF NOT EXISTS auth (
    id_usuarios INTEGER PRIMARY KEY,
    senha_hash VARCHAR(255) NOT NULL,
    FOREIGN KEY (id_usuarios) REFERENCES usuarios(id_usuarios)
);