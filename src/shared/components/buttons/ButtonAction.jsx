import { Button } from "@mui/material";

export default function ButtonAction({
                                         buttonText,
                                         IconName,
                                         onClick,
                                     }) {
    return (
        <Button
            variant="outlined"
            color="primary"
            startIcon={IconName ? <IconName /> : null}
            onClick={onClick}
        >
            {buttonText}
        </Button>
    );
}