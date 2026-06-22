import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
} from "@mui/material";
import {TitleText} from "../typoGraphs/index.js";
import {ButtonAction} from "../buttons/index.js";

export default function FormDialog({open, title, children, onClose, onSave }) {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth="md"
        >
            <DialogTitle>
                <TitleText
                    titleText={title}
                    variant="h5"
                    sx={{ mb: 0 }}
                />
            </DialogTitle>

            <DialogContent dividers>
                {children}
            </DialogContent>

            <DialogActions>
                <Button onClick={onClose}>
                    Cancelar
                </Button>

                <ButtonAction onClick={onSave} buttonText={"Registrar"} />

            </DialogActions>
        </Dialog>
    );
}