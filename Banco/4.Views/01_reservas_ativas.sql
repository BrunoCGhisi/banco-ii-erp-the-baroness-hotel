/*
=========================================================
VIEW: vw_reservas_ativas
=========================================================

OBJETIVO
Exibir todas as reservas que ainda não foram finalizadas.

O QUE ESTA VIEW RESOLVE

- Exibe apenas reservas em andamento.
- Ignora reservas canceladas.
- Ignora reservas já finalizadas.
- Exibe o hóspede responsável pela reserva.
- Exibe o quarto reservado.
- Facilita consultas da recepção.
- Pode ser utilizada na tela principal de reservas.

STATUS CONSIDERADOS

- RESERVADA
- CHECKIN_REALIZADO

=========================================================
*/

CREATE OR REPLACE VIEW vw_reservas_ativas AS
SELECT
    r.id_reserva,
    h.nome AS hospede_responsavel,
    q.numero AS numero_quarto,
    r.checkin_previsto,
    r.checkout_previsto,
    r.status
FROM reserva r
         JOIN hospede h
              ON h.id_hospede = r.id_hospede_responsavel
         JOIN quarto q
              ON q.id_quarto = r.id_quarto
WHERE r.status IN (
                   'RESERVADA',
                   'CHECKIN_REALIZADO'
    );

SELECT * FROM vw_reservas_ativas;