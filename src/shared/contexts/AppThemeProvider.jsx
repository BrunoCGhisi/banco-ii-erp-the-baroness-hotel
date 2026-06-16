import {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
} from "react";

import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, GlobalStyles } from "@mui/material";

import { DarkTheme, LightTheme } from "../themes";

const ThemeContext = createContext({});

export const useAppThemeContext = () => {
    return useContext(ThemeContext);
};

export const AppThemeProvider = ({ children }) => {
    const [themeName, setThemeName] = useState("darkTheme");

    const toggleTheme = useCallback(() => {
        setThemeName((oldThemeName) =>
            oldThemeName === "lightTheme"
                ? "darkTheme"
                : "lightTheme"
        );
    }, []);

    const theme = useMemo(() => {
        return themeName === "lightTheme"
            ? LightTheme
            : DarkTheme;
    }, [themeName]);

    return (
        <ThemeContext.Provider
            value={{
                themeName,
                toggleTheme,
            }}
        >
            <ThemeProvider theme={theme}>
                <CssBaseline />

                <GlobalStyles
                    styles={{
                        "::selection": {
                            backgroundColor: theme.palette.primary.main,
                            color: theme.palette.primary.contrastText,
                        },

                        "::-moz-selection": {
                            backgroundColor: theme.palette.primary.main,
                            color: theme.palette.primary.contrastText,
                        },

                        body: {
                            backgroundColor:
                            theme.palette.background.default,
                        },
                    }}
                />

                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};