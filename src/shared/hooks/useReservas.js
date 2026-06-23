import {
    useEffect,
    useState,
} from "react";

import {
    reservasService
} from "../services/reservasService";

export const useReservas = () => {

    const [loading, setLoading] =
        useState(true);

    const [reservas, setReservas] =
        useState([]);

    const loadReservas =
        async () => {

            setLoading(true);

            const data =
                await reservasService.getAll();

            setReservas(
                data.map(item => ({
                    ...item,
                    id: item.id_reserva,
                }))
            );

            setLoading(false);
        };

    useEffect(() => {

        loadReservas();

    }, []);

    const createReserva =
        async (reserva) => {

            await reservasService.create(
                reserva
            );

            await loadReservas();
        };

    const updateReserva =
        async (
            id,
            reserva
        ) => {

            await reservasService.update(
                id,
                reserva
            );

            await loadReservas();
        };

    const realizarCheckin =
        async (id) => {

            await reservasService.checkin(
                id
            );

            await loadReservas();
        };

    const realizarCheckout =
        async (id) => {

            await reservasService.checkout(
                id
            );

            await loadReservas();
        };

    return {

        reservas,
        loading,

        createReserva,
        updateReserva,

        realizarCheckin,
        realizarCheckout,
    };
};