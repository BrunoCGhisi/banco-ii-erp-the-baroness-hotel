/*
====================================================
GESTÃO DE HOSPEDAGEM - CHECKOUT
====================================================

Objetivo:
Finalizar oficialmente uma hospedagem.

Regras implementadas:

• Exige que o hóspede tenha realizado check-in.

• Impede checkout de reservas não hospedadas.

• Exige que a conta esteja totalmente quitada.

• Impede encerramento com débitos pendentes.

• Registra a data real de saída.

• Atualiza o status da reserva para:
  FINALIZADA

====================================================
*/

CREATE OR REPLACE PROCEDURE sp_realizar_checkout(...)
...