/*
====================================================
GESTÃO FINANCEIRA - PAGAMENTOS
====================================================

Objetivo:
Registrar pagamentos e controlar a situação
financeira das hospedagens.

Regras implementadas:

• Registra pagamentos.

• Não permite pagamentos com valor zero.

• Não permite pagamentos negativos.

• Não permite pagamentos acima do saldo devedor.

• Calcula automaticamente o número da parcela.

• Permite pagamentos parciais.

• Atualiza automaticamente o status financeiro.

Status possíveis:

  ABERTA
  PARCIAL
  QUITADA

• Mantém o histórico completo dos pagamentos.

====================================================
*/

CREATE OR REPLACE PROCEDURE sp_registrar_pagamento(...)
...