INSERT INTO reserva (
    data_reserva,
    checkin_previsto,
    checkout_previsto,
    checkin_real,
    checkout_real,
    status,
    quantidade_hospedes,
    id_quarto,
    id_hospede_responsavel,
    valor_diaria_aplicada,
    valor_hospedagem
)
VALUES
    ('2024-01-10','2024-02-01','2024-02-05','2024-02-01','2024-02-05','FINALIZADA',2,1,1,180,720),
    ('2025-03-15','2025-04-10','2025-04-12',NULL,NULL,'CANCELADA',2,2,2,260,520),
    ('2025-08-20','2025-09-01','2025-09-07','2025-09-01',NULL,'CHECKIN_REALIZADO',3,4,3,420,2520),
    ('2026-01-05','2026-02-15','2026-02-20',NULL,NULL,'RESERVADA',4,6,1,650,3250);
