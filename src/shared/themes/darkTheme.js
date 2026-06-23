import { createTheme } from "@mui/material";
import {amber, yellow} from "@mui/material/colors";

export const DarkTheme = createTheme({
    palette: {
        mode: "dark",

        primary: {
            main: yellow["A200"],
        },

        background: {
            default: "#490a1b",
            paper: "#43101e",
        },
    },
});