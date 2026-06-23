import { api } from "./api";

export const contasReceberService = {

    getAll: async () => {

        const response =
            await api.get(
                "/contas-receber/"
            );

        return response.data;
    },

    getById: async (id) => {

        const response =
            await api.get(
                `/contas-receber/${id}`
            );

        return response.data;
    },
};