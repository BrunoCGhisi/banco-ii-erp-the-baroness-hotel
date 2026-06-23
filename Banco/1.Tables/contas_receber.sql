CREATE TABLE conta_receber (
    id_conta SERIAL PRIMARY KEY,
    id_reserva INT REFERENCES reserva(id_reserva),
    valor_hospedagem NUMERIC(10,2),
    valor_servicos NUMERIC(10,2),
    valor_total NUMERIC(10,2),
    vencimento DATE,
    status VARCHAR(30)
);
