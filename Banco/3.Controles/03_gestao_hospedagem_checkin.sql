/*
====================================================
GESTÃO DE HOSPEDAGEM - CHECK-IN
====================================================

Objetivo:
Registrar oficialmente a entrada do hóspede.

Regras implementadas:

• Permite check-in apenas para reservas válidas.

• Exige que a reserva esteja no status:
  RESERVADA

• Registra a data real de entrada.

• Atualiza o status da reserva para:
  CHECKIN_REALIZADO

• Impede check-in duplicado.

====================================================
*/

CREATE OR REPLACE PROCEDURE sp_realizar_checkin(
   p_id_reserva INT
)
LANGUAGE plpgsql
AS $$
DECLARE
v_status VARCHAR(30);
BEGIN

SELECT status
INTO v_status
FROM reserva
WHERE id_reserva = p_id_reserva;

IF v_status <> 'RESERVADA' THEN
       RAISE EXCEPTION
       'Reserva deve estar RESERVADA';
END IF;
UPDATE reserva
SET
    checkin_real = CURRENT_DATE,
    status = 'CHECKIN_REALIZADO'
WHERE id_reserva = p_id_reserva;
END;
$$;
