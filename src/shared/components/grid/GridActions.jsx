import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import IconButton from "@mui/material/IconButton";

export default function GridActions({
                                        row,
                                        onEdit,
                                        onDelete,
                                    }) {

    return (
        <>
            <IconButton
                onClick={() => onEdit(row)}
            >
                <EditIcon />
            </IconButton>

            <IconButton
                onClick={() => onDelete(row)}
            >
                <DeleteIcon />
            </IconButton>
        </>
    );
}