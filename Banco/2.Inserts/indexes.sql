CREATE INDEX idx_reserva_quarto
    ON reserva(id_quarto);

CREATE INDEX idx_reserva_responsavel
    ON reserva(id_hospede_responsavel);

CREATE INDEX idx_reserva_checkin
    ON reserva(checkin_previsto);

CREATE INDEX idx_reserva_checkout
    ON reserva(checkout_previsto);

CREATE INDEX idx_reserva_hospede
    ON reserva_hospede(id_hospede);

CREATE INDEX idx_reserva_hospede_reserva
    ON reserva_hospede(id_reserva);

CREATE INDEX idx_pagamento_conta
    ON pagamento(id_conta);

CREATE INDEX idx_consumo_reserva
    ON consumo_servico(id_reserva);
