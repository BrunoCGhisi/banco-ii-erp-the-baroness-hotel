/*
=========================================================
VIEW: vw_ocupacao_quartos
=========================================================

OBJETIVO
Exibir a ocupação atual dos quartos do hotel.

O QUE ESTA VIEW RESOLVE

- Exibe todos os quartos cadastrados.
- Exibe a categoria do quarto.
- Exibe o status operacional do quarto.
- Exibe reservas ativas vinculadas ao quarto.
- Permite visualizar ocupação geral do hotel.
- Auxilia a recepção e a gerência.

STATUS DE RESERVA CONSIDERADOS

- RESERVADA
- CHECKIN_REALIZADO

=========================================================
*/

CREATE OR REPLACE VIEW vw_ocupacao_quartos AS
SELECT

    q.id_quarto,
    q.numero,

    cq.nome AS categoria,

    q.status AS status_quarto,

    r.status AS status_reserva,

    r.checkin_previsto,
    r.checkout_previsto

FROM quarto q

         LEFT JOIN reserva r
                   ON r.id_quarto = q.id_quarto
                       AND r.status IN (
                                        'RESERVADA',
                                        'CHECKIN_REALIZADO'
                           )

         LEFT JOIN categoria_quarto cq
                   ON cq.id_categoria = q.id_categoria;

SELECT *
FROM vw_ocupacao_quartos;