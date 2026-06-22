import { api } from "./api";

export const hospedesService = {

    getAll: async () => {

        const response =
            await api.get("/hospedes/");

        return response.data;
    },

    create: async (hospede) => {

        const response =
            await api.post(
                "/hospedes/",
                hospede
            );

        return response.data;
    },

    update: async (
        id,
        hospede
    ) => {

        const response =
            await api.put(
                `/hospedes/${id}`,
                hospede
            );

        return response.data;
    },

    delete: async (id) => {

        await api.delete(
            `/hospedes/${id}`
        );
    },
};