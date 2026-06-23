CREATE TABLE categoria_quarto (
    id_categoria SERIAL PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    descricao TEXT,
    capacidade INT NOT NULL,
    valor_diaria NUMERIC(10,2) NOT NULL
);
