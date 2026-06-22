import { api } from "./api";

export const quartosService = {

    async getAll() {

        const response =
            await api.get("/quartos/");

        return response.data;
    },

    async create(quarto) {

        const response =
            await api.post(
                "/quartos/",
                quarto
            );

        return response.data;
    },

    async update(id, quarto) {

        const response =
            await api.put(
                `/quartos/${id}`,
                quarto
            );

        return response.data;
    },

    async delete(id) {

        await api.delete(
            `/quartos/${id}`
        );
    },
};