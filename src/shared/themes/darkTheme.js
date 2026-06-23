import { createTheme } from "@mui/material";
import {amber} from "@mui/material/colors";

export const DarkTheme = createTheme({
    palette: {
        mode: "dark",

        primary: {
            main: amber[500],
        },

        background: {
            default: "#160A0D",
            paper: "#211015",
        },
    },
});