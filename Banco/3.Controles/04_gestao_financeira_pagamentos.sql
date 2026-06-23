/*
====================================================
GESTÃO FINANCEIRA - PAGAMENTOS
====================================================

Objetivo:
Registrar pagamentos e controlar a situação
financeira das hospedagens.

Regras implementadas:

• Registra pagamentos.

• Não permite pagamentos com valor zero.

• Não permite pagamentos negativos.

• Não permite pagamentos acima do saldo devedor.

• Calcula automaticamente o número da parcela.

• Permite pagamentos parciais.

• Atualiza automaticamente o status financeiro.

Status possíveis:

  ABERTA
  PARCIAL
  QUITADA

• Mantém o histórico completo dos pagamentos.

====================================================
*/

CREATE OR REPLACE PROCEDURE sp_registrar_pagamento(
    p_id_conta INT,
    p_valor NUMERIC(10,2),
    p_id_forma_pagamento INT
)
LANGUAGE plpgsql
AS $$

DECLARE

v_total_conta NUMERIC(10,2);
    v_total_pago NUMERIC(10,2);
    v_novo_total_pago NUMERIC(10,2);
    v_proxima_parcela INT;

BEGIN

IF p_valor <= 0 THEN

    RAISE EXCEPTION
    'Valor do pagamento deve ser maior que zero';

END IF;

SELECT valor_total
INTO v_total_conta
FROM conta_receber
WHERE id_conta = p_id_conta;

IF v_total_conta IS NULL THEN
    RAISE EXCEPTION
    'Conta não encontrada';
END IF;
SELECT COALESCE(
           SUM(valor),
           0
       )
INTO v_total_pago
FROM pagamento
WHERE id_conta = p_id_conta;


v_novo_total_pago :=
v_total_pago + p_valor;

IF v_novo_total_pago > v_total_conta THEN

    RAISE EXCEPTION
    'Pagamento excede o valor restante da conta. Restante disponível: %',
    (v_total_conta - v_total_pago);

END IF;
-- calcula próxima parcela
SELECT COALESCE(
               MAX(parcela),
               0
       ) + 1
INTO v_proxima_parcela
FROM pagamento
WHERE id_conta = p_id_conta;
INSERT INTO pagamento(

    id_conta,
    id_forma_pagamento,
    valor,
    data_pagamento,
    parcela
)
VALUES(
  p_id_conta,
  p_id_forma_pagamento,
  p_valor,
  CURRENT_DATE,
  v_proxima_parcela
      );

IF v_novo_total_pago = v_total_conta THEN
UPDATE conta_receber
SET status = 'QUITADA'
WHERE id_conta = p_id_conta;

ELSE
UPDATE conta_receber
SET status = 'PARCIAL'
WHERE id_conta = p_id_conta;

END IF;
END;
$$;
