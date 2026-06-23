import {
    useEffect,
    useState,
} from "react";

import {servicosService} from "../services/servicosService.js";



export const useServicos = () => {

    const [loading, setLoading] =
        useState(true);

    const [servicos, setServicos] =
        useState([]);

    const loadServicos =
        async () => {

            setLoading(true);

            const data =
                await servicosService.getAll();

            setServicos(
                data.map(item => ({
                    ...item,
                    id: item.id_servico,
                }))
            );

            setLoading(false);
        };

    useEffect(() => {

        loadServicos();

    }, []);

    const createServico =
        async (servico) => {

            await servicosService.create(
                servico
            );

            await loadServicos();
        };

    const updateServico =
        async (
            id,
            servico
        ) => {

            await servicosService.update(
                id,
                servico
            );

            await loadServicos();
        };

    const deleteServico =
        async (id) => {

            await servicosService.delete(
                id
            );

            await loadServicos();
        };

    return {

        servicos,
        loading,

        createServico,
        updateServico,
        deleteServico,
    };
};