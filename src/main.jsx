import { createRoot } from "react-dom/client";

import { AppThemeProvider } from "./shared/contexts";
import {AppRouter} from "./router/router.jsx";

createRoot(document.getElementById("root")).render(
    <AppThemeProvider>
        <AppRouter />
    </AppThemeProvider>
);