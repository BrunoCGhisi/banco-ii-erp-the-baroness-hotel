/*
=========================================================
VIEW: vw_pagamentos
=========================================================

OBJETIVO
Exibir o histórico de pagamentos registrados no sistema.

O QUE ESTA VIEW RESOLVE

- Exibe todos os pagamentos realizados.
- Exibe a reserva relacionada.
- Exibe o hóspede responsável.
- Exibe a forma de pagamento utilizada.
- Exibe o valor pago.
- Exibe a data do pagamento.
- Exibe o número da parcela.
- Exibe a quantidade total de parcelas da conta.

FORMAS DE PAGAMENTO

- PIX
- Crédito
- Débito
- Dinheiro

=========================================================
*/

CREATE OR REPLACE VIEW vw_pagamentos AS
SELECT

    p.id_pagamento,
    p.id_conta,

    c.id_reserva,

    h.nome AS hospede,

    fp.descricao AS forma_pagamento,

    p.valor,
    p.data_pagamento,

    p.parcela,

    COUNT(*) OVER (
        PARTITION BY p.id_conta
    ) AS total_parcelas

FROM pagamento p

         INNER JOIN conta_receber c
                    ON c.id_conta = p.id_conta

         INNER JOIN reserva r
                    ON r.id_reserva = c.id_reserva

         INNER JOIN hospede h
                    ON h.id_hospede =
                       r.id_hospede_responsavel

         INNER JOIN forma_pagamento fp
                    ON fp.id_forma_pagamento =
                       p.id_forma_pagamento;

SELECT *
FROM vw_pagamentos;