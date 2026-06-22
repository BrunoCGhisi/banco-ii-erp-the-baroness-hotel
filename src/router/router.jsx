import { BrowserRouter, Routes, Route } from "react-router-dom";

import DrawerMenu from "../shared/components/menu";
import {Categorias, Hospedes, Quartos} from "../pages/index.js";


export const AppRouter = () => {
    return (
        <BrowserRouter>
            <DrawerMenu>
                <Routes>

                    <Route
                        path="/"
                        element={<Hospedes />}
                    />

                    <Route
                        path="/hospedes"
                        element={<Hospedes />}
                    />

                    <Route
                        path="/categorias"
                        element={<Categorias />}
                    />

                    <Route
                        path="/quartos"
                        element={<Quartos />}
                    />
                </Routes>
            </DrawerMenu>
        </BrowserRouter>
    );
};