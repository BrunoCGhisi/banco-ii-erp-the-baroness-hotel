/*
=========================================================
VIEW: vw_situacao_financeira
=========================================================

OBJETIVO
Exibir a situação financeira completa de cada hospedagem.

O QUE ESTA VIEW RESOLVE

- Exibe o valor da hospedagem.
- Exibe o valor dos serviços consumidos.
- Exibe o valor total da conta.
- Exibe quanto já foi pago.
- Exibe quanto ainda falta pagar.
- Exibe a situação atual da conta.
- Facilita processos de cobrança.
- Auxilia o checkout do hóspede.

STATUS POSSÍVEIS

- ABERTA
- PARCIAL
- QUITADA

=========================================================
*/

CREATE OR REPLACE VIEW vw_situacao_financeira AS
SELECT

    cr.id_conta,

    r.id_reserva,

    h.nome AS hospede_responsavel,

    cr.valor_hospedagem,
    cr.valor_servicos,
    cr.valor_total,

    COALESCE(
            SUM(p.valor),
            0
    ) AS valor_pago,

    (
        cr.valor_total -
        COALESCE(
                SUM(p.valor),
                0
        )
        ) AS valor_restante,

    cr.status

FROM conta_receber cr

         JOIN reserva r
              ON r.id_reserva = cr.id_reserva

         JOIN hospede h
              ON h.id_hospede =
                 r.id_hospede_responsavel

         LEFT JOIN pagamento p
                   ON p.id_conta = cr.id_conta

GROUP BY
    cr.id_conta,
    r.id_reserva,
    h.nome,
    cr.valor_hospedagem,
    cr.valor_servicos,
    cr.valor_total,
    cr.status;

SELECT * FROM vw_situacao_financeira;