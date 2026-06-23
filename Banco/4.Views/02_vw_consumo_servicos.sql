/*
=========================================================
VIEW: vw_consumo_servicos
=========================================================

OBJETIVO
Exibir todos os serviços consumidos durante as hospedagens.

O QUE ESTA VIEW RESOLVE

- Centraliza o histórico de consumos.
- Identifica qual reserva realizou o consumo.
- Exibe o hóspede responsável.
- Exibe qual serviço foi utilizado.
- Exibe quantidade consumida.
- Exibe valor total cobrado.
- Exibe a data do consumo.

EXEMPLOS DE SERVIÇOS

- Café da manhã
- Lavanderia
- Frigobar
- Estacionamento
- Spa

=========================================================
*/

CREATE OR REPLACE VIEW vw_consumo_servicos AS
SELECT
    cs.id_consumo,
    r.id_reserva,
    h.nome AS hospede_responsavel,
    s.nome AS servico,
    cs.quantidade,
    cs.valor_total,
    cs.data_consumo
FROM consumo_servico cs
         JOIN reserva r
              ON r.id_reserva = cs.id_reserva
         JOIN hospede h
              ON h.id_hospede = r.id_hospede_responsavel
         JOIN servico s
              ON s.id_servico = cs.id_servico;

SELECT * FROM vw_consumo_servicos;