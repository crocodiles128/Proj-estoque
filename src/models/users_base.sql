CREATE TABLE usuarios (
    id_usuarios SERIAL PRIMARY KEY,
    nome_usuarios VARCHAR(100) NOT NULL,
    email_usuarios VARCHAR(100) UNIQUE NOT NULL,
    cargo_usuarios VARCHAR(50)
);

CREATE TABLE auth (
    id_usuarios INTEGER PRIMARY KEY,
    senha_hash VARCHAR(255) NOT NULL,

    FOREIGN KEY (id_usuarios)
    REFERENCES usuarios(id_usuarios)
);