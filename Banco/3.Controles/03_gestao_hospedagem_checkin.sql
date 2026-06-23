/*
====================================================
GESTÃO DE HOSPEDAGEM - CHECK-IN
====================================================

Objetivo:
Registrar oficialmente a entrada do hóspede.

Regras implementadas:

• Permite check-in apenas para reservas válidas.

• Exige que a reserva esteja no status:
  RESERVADA

• Registra a data real de entrada.

• Atualiza o status da reserva para:
  CHECKIN_REALIZADO

• Impede check-in duplicado.

====================================================
*/

CREATE OR REPLACE PROCEDURE sp_realizar_checkin(...)
...