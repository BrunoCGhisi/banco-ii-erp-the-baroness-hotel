import { BrowserRouter, Routes, Route } from "react-router-dom";

import DrawerMenu from "../shared/components/menu";

import Hospedes from "../pages/Hospedes/Hospedes";
import Categorias from "../pages/Categorias/Categorias";
import Quartos from "../pages/Quartos/Quartos";
import Reservas from "../pages/Reservas/Reservas";
import Servicos from "../pages/Servicos/Servicos";
import ContasReceber from "../pages/ContasReceber/ContasReceber";
import Pagamentos from "../pages/Pagamentos/Pagamentos";

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

                    <Route
                        path="/contas-receber"
                        element={<ContasReceber />}
                    />

                    <Route
                        path="/pagamentos"
                        element={<Pagamentos />}
                    />

                </Routes>
            </DrawerMenu>
        </BrowserRouter>
    );
};