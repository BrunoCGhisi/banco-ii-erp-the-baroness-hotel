CREATE TABLE reserva (
     id_reserva SERIAL PRIMARY KEY,
     data_reserva DATE NOT NULL,
     checkin_previsto DATE NOT NULL,
     checkout_previsto DATE NOT NULL,
     checkin_real DATE,
     checkout_real DATE,
     status VARCHAR(30) NOT NULL,
     quantidade_hospedes INT NOT NULL,
     id_quarto INT REFERENCES quarto(id_quarto),
     id_hospede_responsavel INT REFERENCES hospede(id_hospede),
     valor_diaria_aplicada NUMERIC(10,2),
     valor_hospedagem NUMERIC(10,2)
);