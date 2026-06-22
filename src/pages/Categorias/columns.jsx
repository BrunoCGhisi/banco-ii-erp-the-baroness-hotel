import {GridActions} from "../../shared/components/index.js";

export const getColumns = (
    handleEdit,
    handleDelete
) => [

    {
        field: "id_categoria",
        headerName: "ID",
        width: 80,
    },

    {
        field: "nome",
        headerName: "Nome",
        flex: 2,
    },

    {
        field: "descricao",
        headerName: "Descrição",
        flex: 2,
    },

    {
        field: "capacidade",
        headerName: "Capacidade",
        flex: 1,
    },

    {
        field: "valor_diaria",
        headerName: "Valor Diária",
        flex: 1,

        valueFormatter: (value) => {

            if (!value) {
                return "R$ 0,00";
            }

            return Number(value)
                .toLocaleString(
                    "pt-BR",
                    {
                        style: "currency",
                        currency: "BRL",
                        minimumFractionDigits: 2,
                    }
                );
        },
    },

    {
        field: "actions",
        headerName: "Ações",
        width: 120,

        renderCell: (params) => (
            <GridActions
                row={params.row}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
        ),
    },
];