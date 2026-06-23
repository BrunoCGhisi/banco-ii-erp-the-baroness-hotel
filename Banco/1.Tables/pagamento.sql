CREATE TABLE pagamento (
    id_pagamento SERIAL PRIMARY KEY,
    id_conta INT REFERENCES conta_receber(id_conta),
    id_forma_pagamento INT REFERENCES forma_pagamento(id_forma_pagamento),
    valor NUMERIC(10,2),
    data_pagamento DATE,
    parcela INT
);
