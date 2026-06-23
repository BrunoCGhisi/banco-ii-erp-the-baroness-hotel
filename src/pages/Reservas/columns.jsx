import Button
    from "@mui/material/Button";

import {
    GridActions
} from "../../shared/components";

import {
    formatDateBR
} from "../../shared/utils";


export const getColumns = (

    handleCheckin,
    handleCheckout,
    handleEdit,
    handleDelete

) => [

    {
        field: "id_reserva",
        headerName: "ID",
        width: 80,
    },

    {
        field: "hospede_responsavel",
        headerName: "Hóspede",
        flex: 2,
    },

    {
        field: "numero_quarto",
        headerName: "Quarto",
        flex: 1,
    },

    {
        field: "checkin_previsto",
        headerName: "Check-in",
        flex: 1,

        valueFormatter: (value) =>
            formatDateBR(value),
    },

    {
        field: "checkout_previsto",
        headerName: "Check-out",
        flex: 1,

        valueFormatter: (value) =>
            formatDateBR(value),
    },

    {
        field: "status",
        headerName: "Status",
        flex: 1,
    },

    {
        field: "acoes",
        headerName: "Ações",
        width: 280,

        renderCell: (params) => (

            <>
                <GridActions
                    row={params.row}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />

                {params.row.status ===
                    "RESERVADA" && (

                        <Button
                            size="small"
                            onClick={() =>
                                handleCheckin(
                                    params.row
                                )
                            }
                        >
                            Check-in
                        </Button>
                    )}

                {params.row.status ===
                    "CHECKIN_REALIZADO" && (

                        <Button
                            size="small"
                            onClick={() =>
                                handleCheckout(
                                    params.row
                                )
                            }
                        >
                            Checkout
                        </Button>
                    )}

            </>
        ),
    },
];