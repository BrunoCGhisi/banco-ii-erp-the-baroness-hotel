import {
    GridActions
} from "../../shared/components";

export const getColumns = (
    handleEdit,
    handleDelete
) => [

    {
        field: "id_servico",
        headerName: "ID",
        width: 80,
    },

    {
        field: "nome",
        headerName: "Nome",
        flex: 2,
    },

    {
        field: "valor",
        headerName: "Valor",
        flex: 1,

        valueFormatter: (value) =>

            Number(value)
                .toLocaleString(
                    "pt-BR",
                    {
                        style: "currency",
                        currency: "BRL",
                    }
                ),
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