export const getColumns = ()=>[
    {
        field:"id_pagamento",
        headerName:"ID",
        width:80
    },

    {
        field:"id_conta",
        headerName:"Conta",
        width:100
    },
    {
        field:"hospede",
        headerName:"Hóspede",
        flex:2
    },
    {
        field:"valor",
        headerName:"Valor",
        flex:1,
        valueFormatter:(value)=>

            Number(value)
                .toLocaleString(
                    "pt-BR",
                    {
                        style:"currency",
                        currency:"BRL"
                    }
                )
    },
    {
        field:"forma_pagamento",
        headerName:"Forma",
        flex:1
    },
    {
        field:"data_pagamento",
        headerName:"Data",
        flex:1,

        valueFormatter:(value)=>{

            if(!value)
                return "";

            return new Date(value)
                .toLocaleDateString(
                    "pt-BR"
                );
        }
    },
    {
        field:"parcela",
        headerName:"Parcela",
        flex: 1
    }
];