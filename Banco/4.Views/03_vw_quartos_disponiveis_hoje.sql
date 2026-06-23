/*
=========================================================
VIEW: vw_quartos_disponiveis_hoje
=========================================================

OBJETIVO
Exibir todos os quartos disponíveis na data atual.

O QUE ESTA VIEW RESOLVE

- Exibe apenas quartos disponíveis.
- Ignora quartos em manutenção.
- Ignora quartos interditados.
- Ignora quartos reservados para hoje.
- Ignora quartos ocupados atualmente.
- Facilita a criação de novas reservas.
- Auxilia a recepção na consulta de disponibilidade.

REGRAS

- O quarto deve possuir status DISPONIVEL.
- Não pode existir reserva ativa para a data atual.

=========================================================
*/

CREATE OR REPLACE VIEW vw_quartos_disponiveis_hoje AS
SELECT
    q.id_quarto,
    q.numero,
    cq.nome AS categoria
FROM quarto q
         JOIN categoria_quarto cq
              ON cq.id_categoria = q.id_categoria
WHERE q.status = 'DISPONIVEL'
  AND NOT EXISTS (
    SELECT 1
    FROM reserva r
    WHERE r.id_quarto = q.id_quarto
      AND CURRENT_DATE BETWEEN
        r.checkin_previsto
        AND r.checkout_previsto
      AND r.status IN (
                       'RESERVADA',
                       'CHECKIN_REALIZADO'
        )
);

SELECT * FROM vw_quartos_disponiveis_hoje;