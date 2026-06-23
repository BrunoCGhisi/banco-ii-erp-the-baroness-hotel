/*
====================================================
GESTÃO DE HOSPEDAGEM - CHECKOUT
====================================================

Objetivo:
Finalizar oficialmente uma hospedagem.

Regras implementadas:

• Exige que o hóspede tenha realizado check-in.

• Impede checkout de reservas não hospedadas.

• Exige que a conta esteja totalmente quitada.

• Impede encerramento com débitos pendentes.

• Registra a data real de saída.

• Atualiza o status da reserva para:
  FINALIZADA

====================================================
*/

CREATE OR REPLACE PROCEDURE sp_realizar_checkout(
   p_id_reserva INT
)
LANGUAGE plpgsql
AS $$
DECLARE
v_status_conta VARCHAR(30);
   v_status_reserva VARCHAR(30);
BEGIN

SELECT
    cr.status,
    r.status
INTO
    v_status_conta,
    v_status_reserva
FROM reserva r
         JOIN conta_receber cr
              ON cr.id_reserva = r.id_reserva
WHERE r.id_reserva = p_id_reserva;

IF v_status_reserva <> 'CHECKIN_REALIZADO' THEN
       RAISE EXCEPTION
       'Reserva não está hospedada';
END IF;

   IF v_status_conta <> 'QUITADA' THEN
       RAISE EXCEPTION
       'Conta ainda não foi quitada';
END IF;

UPDATE reserva
SET
    checkout_real = CURRENT_DATE,
    status = 'FINALIZADA'
WHERE id_reserva = p_id_reserva;

END;
$$;
