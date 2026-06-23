CREATE TABLE quarto (
    id_quarto SERIAL PRIMARY KEY,
    numero VARCHAR(10) UNIQUE NOT NULL,
    andar INT,
    status VARCHAR(30) NOT NULL,
    id_categoria INT REFERENCES categoria_quarto(id_categoria)
);


