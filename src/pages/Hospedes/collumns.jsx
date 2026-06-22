import {GridActions} from "../../shared/components/index.js";

export const getColumns = (
    handleEdit,
    handleDelete
) => [

    {
        field: "id_hospede",
        headerName: "ID",
        width: 80,
    },

    {
        field: "nome",
        headerName: "Nome",
        flex: 2,
    },

    {
        field: "cpf",
        headerName: "CPF",
        flex: 1,
    },

    {
        field: "telefone",
        headerName: "Telefone",
        flex: 1,
    },

    {
        field: "email",
        headerName: "Email",
        flex: 2,
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