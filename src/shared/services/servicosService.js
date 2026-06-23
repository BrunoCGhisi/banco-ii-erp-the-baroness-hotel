import { api } from "./api";

export const servicosService = {

    async getAll() {

        const response =
            await api.get("/servicos/");

        return response.data;
    },

    async create(servico) {

        const response =
            await api.post(
                "/servicos/",
                servico
            );

        return response.data;
    },

    async update(
        id,
        servico
    ) {

        const response =
            await api.put(
                `/servicos/${id}`,
                servico
            );

        return response.data;
    },

    async delete(id) {

        await api.delete(
            `/servicos/${id}`
        );
    },
};