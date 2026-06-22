import { useEffect, useState } from "react";

import { quartosService }
    from "../services/quartosService";

export const useQuartos = () => {

    const [loading, setLoading] =
        useState(true);

    const [quartos, setQuartos] =
        useState([]);

    const loadQuartos = async () => {

        setLoading(true);

        const data =
            await quartosService.getAll();

        setQuartos(
            data.map(item => ({
                ...item,
                id: item.id_quarto,
            }))
        );

        setLoading(false);
    };

    useEffect(() => {
        loadQuartos();
    }, []);

    const createQuarto =
        async (quarto) => {

            await quartosService.create(
                quarto
            );

            await loadQuartos();
        };

    const updateQuarto =
        async (id, quarto) => {

            await quartosService.update(
                id,
                quarto
            );

            await loadQuartos();
        };

    const deleteQuarto =
        async (id) => {

            await quartosService.delete(id);

            await loadQuartos();
        };

    return {
        quartos,
        loading,
        createQuarto,
        updateQuarto,
        deleteQuarto,
    };
};