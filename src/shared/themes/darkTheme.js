import { createTheme } from "@mui/material";

export const DarkTheme = createTheme({
    palette: {
        mode: "dark",

        primary: {
            main: "#FFD600",
        },

        background: {
            default: "#121212",
            paper: "#1E1E1E",
        },
    },
});