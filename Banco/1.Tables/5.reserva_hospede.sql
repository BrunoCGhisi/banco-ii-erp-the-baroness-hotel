CREATE TABLE reserva_hospede (
    id_reserva INT REFERENCES reserva(id_reserva),
    id_hospede INT REFERENCES hospede(id_hospede),
    PRIMARY KEY(id_reserva,id_hospede)
);
