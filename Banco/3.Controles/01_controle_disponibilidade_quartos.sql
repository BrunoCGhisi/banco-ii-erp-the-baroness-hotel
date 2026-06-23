/*
====================================================
CONTROLE DE DISPONIBILIDADE DE QUARTOS
====================================================

Objetivo:
Garantir que um quarto não possua duas reservas
ativas para períodos conflitantes.

Regras implementadas:

• Impede reservas sobrepostas para o mesmo quarto.

• Considera apenas reservas com status:
  - RESERVADA
  - CHECKIN_REALIZADO

• Permite reservas para períodos distintos.

• Executa automaticamente antes de INSERT e UPDATE.

• Mantém a integridade da agenda dos quartos.

====================================================
*/

CREATE OR REPLACE FUNCTION fn_validar_conflito_reserva()
RETURNS TRIGGER
AS $$
BEGIN

   IF EXISTS (
       SELECT 1
       FROM reserva r
       WHERE r.id_quarto = NEW.id_quarto
         AND r.id_reserva <> COALESCE(NEW.id_reserva, 0)
         AND r.status IN (
               'RESERVADA',
               'CHECKIN_REALIZADO'
         )

         AND (
               NEW.checkin_previsto < r.checkout_previsto
           AND NEW.checkout_previsto > r.checkin_previsto
         )
   )
   THEN

       RAISE EXCEPTION
       'Já existe uma reserva para o quarto % entre % e %',
       NEW.id_quarto,
       NEW.checkin_previsto,
       NEW.checkout_previsto;

END IF;

RETURN NEW;

END;
$$
LANGUAGE plpgsql;

/* =================================== */

CREATE TRIGGER trg_validar_conflito_reserva
    BEFORE INSERT OR UPDATE
     ON reserva
     FOR EACH ROW
     EXECUTE FUNCTION fn_validar_conflito_reserva();
