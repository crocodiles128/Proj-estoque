CREATE TABLE IF NOT EXISTS usuarios (
    id_usuarios SERIAL PRIMARY KEY,
    nome_usuarios VARCHAR(100) NOT NULL,
    email_usuarios VARCHAR(100) UNIQUE NOT NULL,
    cargo_usuarios VARCHAR(50)
);