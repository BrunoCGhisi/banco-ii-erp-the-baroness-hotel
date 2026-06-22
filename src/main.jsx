import { createRoot } from "react-dom/client";


import {AppRouter} from "./router/router.jsx";

createRoot(document.getElementById("root")).render(
    <AppThemeProvider>
        <AppRouter />
    </AppThemeProvider>
);