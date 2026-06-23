import Button
    from "@mui/material/Button";


export const getColumns =
    (handlePagamento) => [

        {
            field: "id_conta",
            headerName: "Conta",
            width: 80,
        },

        {
            field: "id_reserva",
            headerName: "Reserva",
            width: 80,
        },


        {
            field: "hospede_responsavel",
            headerName: "Hóspede",
            flex: 1,
        },


        {
            field: "valor_hospedagem",
            headerName: "Hospedagem",
            flex:0.7,

            valueFormatter: (value) =>
                Number(value)
                    .toLocaleString(
                        "pt-BR",
                        {
                            style:"currency",
                            currency:"BRL"
                        }
                    ),
        },


        {
            field:"valor_servicos",
            headerName:"Serviços",
            flex:0.7,

            valueFormatter:(value)=>
                Number(value)
                    .toLocaleString(
                        "pt-BR",
                        {
                            style:"currency",
                            currency:"BRL"
                        }
                    ),
        },

        {
            field:"valor_total",
            headerName:"Total",
            flex:0.7,

            valueFormatter:(value)=>
                Number(value)
                    .toLocaleString(
                        "pt-BR",
                        {
                            style:"currency",
                            currency:"BRL"
                        }
                    ),
        },

        {
            field:"valor_pago",
            headerName:"Pago",
            flex:0.7,

            valueFormatter:(value)=>
                Number(value)
                    .toLocaleString(
                        "pt-BR",
                        {
                            style:"currency",
                            currency:"BRL"
                        }
                    ),
        },

        {
            field:"valor_restante",
            headerName:"Restante",
            flex:0.7,

            valueFormatter:(value)=>
                Number(value)
                    .toLocaleString(
                        "pt-BR",
                        {
                            style:"currency",
                            currency:"BRL"
                        }
                    ),
        },

        {
            field:"status",
            headerName:"Status",
            flex:1,
        },

        {
            field:"acoes",
            headerName:"Ações",
            flex: 1,

            renderCell:(params)=>(

                <Button
                    size="small"
                    disabled={
                        params.row.valor_restante <= 0
                    }
                    onClick={() =>
                        handlePagamento(
                            params.row
                        )
                    }
                >

                    Registrar pagamento

                </Button>

            )
        }

    ];