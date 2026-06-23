import { api } from "./api";

export const pagamentosService = {

    registrar: async (dados) => {
        const response =
            await api.post(
                "/pagamentos/",
                dados
            );
        return response.data;
    },

    getAll: async () => {

        const response =
            await api.get(
                "/pagamentos/"
            );
        return response.data;
    },
};