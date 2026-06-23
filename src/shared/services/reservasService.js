import { api } from "./api";

export const reservasService = {

    async getAll() {

        const response =
            await api.get("/reservas/");

        return response.data;
    },

    async create(reserva) {

        const response =
            await api.post(
                "/reservas/",
                reserva
            );

        return response.data;
    },

    async update(
        id,
        reserva
    ) {

        const response =
            await api.put(
                `/reservas/${id}`,
                reserva
            );

        return response.data;
    },

    async checkin(id) {

        const response =
            await api.put(
                `/reservas/${id}/checkin`
            );

        return response.data;
    },

    async checkout(id) {

        const response =
            await api.put(
                `/reservas/${id}/checkout`
            );

        return response.data;
    },
};