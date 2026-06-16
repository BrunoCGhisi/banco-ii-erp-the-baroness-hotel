import Box from "@mui/material/Box";
import {ButtonAction, TitleText} from "../index.js";

export default function PageHeader({
                                       titleText,
                                       buttonText,
                                       IconName,
                                       onButtonClick,
                                   }) {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
            }}
        >
            <TitleText titleText={titleText} />

            <ButtonAction
                buttonText={buttonText}
                IconName={IconName}
                onClick={onButtonClick}
            />
        </Box>
    );
}