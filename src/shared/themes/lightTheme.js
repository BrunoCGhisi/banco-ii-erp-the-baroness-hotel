import { createTheme } from "@mui/material";

export const LightTheme = createTheme({
    palette: {
        mode: "light",

        primary: {
            main: "#FFD600",
        },

        background: {
            default: "#F5F5F5",
            paper: "#FFFFFF",
        },
    },
});