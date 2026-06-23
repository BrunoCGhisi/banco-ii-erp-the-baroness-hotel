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

CREATE OR REPLACE PROCEDURE sp_criar_reserva(...)
...