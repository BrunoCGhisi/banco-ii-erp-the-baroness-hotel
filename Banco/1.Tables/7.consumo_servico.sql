CREATE TABLE consumo_servico (
    id_consumo SERIAL PRIMARY KEY,
    id_reserva INT REFERENCES reserva(id_reserva),
    id_servico INT REFERENCES servico(id_servico),
    quantidade INT,
    data_consumo DATE,
    valor_total NUMERIC(10,2)
);
