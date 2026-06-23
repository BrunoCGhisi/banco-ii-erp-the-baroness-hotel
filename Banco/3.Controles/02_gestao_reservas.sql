/*
====================================================
GESTÃO DE RESERVAS
====================================================

Objetivo:
Criar reservas e gerar automaticamente a conta
financeira correspondente.

Regras implementadas:

• Cria uma nova reserva.

• Calcula a quantidade de diárias.

• Obtém automaticamente o valor da diária a partir
  da categoria do quarto.

• Calcula o valor total da hospedagem.

• Impede checkout anterior ou igual ao checkin.

• Cria automaticamente uma conta a receber.

• Define o status inicial da reserva como:
  RESERVADA

• Define o status inicial da conta como:
  ABERTA

====================================================
*/

CREATE OR REPLACE PROCEDURE sp_criar_reserva(
   p_id_hospede_responsavel INT,
   p_id_quarto INT,
   p_checkin DATE,
   p_checkout DATE,
   p_quantidade_hospedes INT
)
LANGUAGE plpgsql
AS $$
DECLARE
v_reserva_id INT;
   v_valor_diaria NUMERIC(10,2);
   v_qtd_diarias INT;
   v_valor_hospedagem NUMERIC(10,2);
BEGIN

   IF p_checkout <= p_checkin THEN
       RAISE EXCEPTION
       'Checkout deve ser posterior ao checkin';
END IF;

SELECT cq.valor_diaria
INTO v_valor_diaria
FROM quarto q
         JOIN categoria_quarto cq
              ON cq.id_categoria = q.id_categoria
WHERE q.id_quarto = p_id_quarto;

v_qtd_diarias := p_checkout - p_checkin;

   v_valor_hospedagem :=
       v_qtd_diarias * v_valor_diaria;

INSERT INTO reserva(
    data_reserva,
    checkin_previsto,
    checkout_previsto,
    status,
    quantidade_hospedes,
    valor_diaria_aplicada,
    valor_hospedagem,
    id_hospede_responsavel,
    id_quarto
)
VALUES(
  CURRENT_DATE,
  p_checkin,
  p_checkout,
  'RESERVADA',
  p_quantidade_hospedes,
  v_valor_diaria,
  v_valor_hospedagem,
  p_id_hospede_responsavel,
  p_id_quarto
      )
    RETURNING id_reserva
INTO v_reserva_id;

INSERT INTO conta_receber(
    id_reserva,
    valor_hospedagem,
    valor_servicos,
    valor_total,
    vencimento,
    status
)
VALUES(
  v_reserva_id,
  v_valor_hospedagem,
  0,
  v_valor_hospedagem,
  p_checkin,
  'ABERTA'
      );

END;
$$;
