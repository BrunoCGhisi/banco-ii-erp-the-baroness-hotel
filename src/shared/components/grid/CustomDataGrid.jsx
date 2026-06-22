import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

export default function CustomDataGrid({
                                           rows,
                                           columns,
                                           loading = false,
                                           getRowId,
                                       }) {

    return (
        <Box
            sx={{
                height: "auto",
                width: "100%",
                overflow: "hidden",
            }}
        >
            <DataGrid
                rows={rows}
                columns={columns}
                loading={loading}
                getRowId={getRowId}
                pageSizeOptions={[6, 12, 24]}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 6,
                        },
                    },
                }}
                disableRowSelectionOnClick
                sx={{
                    "& .MuiDataGrid-columnHeader": {
                        color: "primary.main",
                    },

                    "& .MuiDataGrid-columnHeaderTitle": {
                        fontWeight: 700,
                    },
                }}
            />
        </Box>
    );
}