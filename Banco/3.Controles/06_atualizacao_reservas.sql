/*
====================================================
ATUALIZAÇÃO DE RESERVAS
====================================================

Objetivo:
Permitir alterações em reservas existentes.

Regras implementadas:

• Permite alterar:
  - hóspede responsável
  - quarto
  - datas
  - quantidade de hóspedes

• Recalcula automaticamente:
  - valor da diária
  - valor da hospedagem

• Atualiza automaticamente a conta financeira.

• Impede checkout anterior ou igual ao checkin.

• Mantém consistência entre reserva e financeiro.

====================================================
*/

CREATE OR REPLACE PROCEDURE sp_atualizar_reserva(
    p_id_reserva INT,
    p_id_hospede_responsavel INT,
    p_id_quarto INT,
    p_checkin DATE,
    p_checkout DATE,
    p_quantidade_hospedes INT
)
LANGUAGE plpgsql
AS $$
DECLARE

v_valor_diaria NUMERIC(10,2);
    v_qtd_diarias INT;
    v_valor_hospedagem NUMERIC(10,2);

BEGIN
    IF p_checkout <= p_checkin THEN
        RAISE EXCEPTION
        'Checkout deve ser posterior ao checkin';

END IF;

SELECT
    cq.valor_diaria
INTO
    v_valor_diaria
FROM quarto q
        JOIN categoria_quarto cq
        ON cq.id_categoria = q.id_categoria
WHERE q.id_quarto = p_id_quarto;

v_qtd_diarias := p_checkout - p_checkin;
v_valor_hospedagem := v_qtd_diarias * v_valor_diaria;

UPDATE reserva
SET
    checkin_previsto = p_checkin,
    checkout_previsto = p_checkout,
    quantidade_hospedes = p_quantidade_hospedes,
    valor_diaria_aplicada = v_valor_diaria,
    valor_hospedagem = v_valor_hospedagem,
    id_hospede_responsavel = p_id_hospede_responsavel,
    id_quarto = p_id_quarto
WHERE id_reserva = p_id_reserva;

UPDATE conta_receber
SET
    valor_hospedagem = v_valor_hospedagem,
    valor_total = (
        v_valor_hospedagem +
        COALESCE(valor_servicos,0)
        ),
    vencimento = p_checkin
WHERE id_reserva = p_id_reserva;

END;
$$;