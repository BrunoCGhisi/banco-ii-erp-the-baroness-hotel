import { BrowserRouter, Routes, Route } from "react-router-dom";

import DrawerMenu from "../shared/components/menu";

import { Usuarios } from "../pages/index.js";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <DrawerMenu>
                <Routes>
                    <Route path="/" element={<Usuarios />} />
                    <Route path="/usuarios" element={<Usuarios />} />

                </Routes>
            </DrawerMenu>
        </BrowserRouter>
    );
};