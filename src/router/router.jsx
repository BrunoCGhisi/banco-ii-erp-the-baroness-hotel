import { BrowserRouter, Routes, Route } from "react-router-dom";

import DrawerMenu from "../shared/components/menu";
import {Categorias, Hospedes, Quartos, Reservas, Servicos} from "../pages/index.js";


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

                    <Route
                        path="/reservas"
                        element={<Reservas />}
                    />

                    <Route
                        path="/servicos"
                        element={<Servicos />}
                    />

                </Routes>
            </DrawerMenu>
        </BrowserRouter>
    );
};