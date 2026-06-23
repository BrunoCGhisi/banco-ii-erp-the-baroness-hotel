/*
====================================================
CONTROLE DE DISPONIBILIDADE DE QUARTOS
====================================================

Objetivo:
Garantir que um quarto não possua duas reservas
ativas para períodos conflitantes.

Regras implementadas:

• Impede reservas sobrepostas para o mesmo quarto.

• Considera apenas reservas com status:
  - RESERVADA
  - CHECKIN_REALIZADO

• Permite reservas para períodos distintos.

• Executa automaticamente antes de INSERT e UPDATE.

• Mantém a integridade da agenda dos quartos.

====================================================
*/

