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

CREATE OR REPLACE PROCEDURE sp_atualizar_reserva(...)
...