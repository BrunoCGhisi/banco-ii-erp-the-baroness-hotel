import { GridActions }
    from "../../shared/components";

export const getColumns = (
    handleEdit,
    handleDelete
) => [

    {
        field: "id_quarto",
        headerName: "ID",
        width: 80,
    },

    {
        field: "numero",
        headerName: "Número",
        flex: 1,
    },

    {
        field: "andar",
        headerName: "Andar",
        flex: 1,
    },

    {
        field: "categoria",
        headerName: "Categoria",
        flex: 1,
    },

    {
        field: "status",
        headerName: "Status",
        flex: 1,
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