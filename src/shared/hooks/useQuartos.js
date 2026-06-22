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

        setQuartos(data);

        setLoading(false);
    };

    useEffect(() => {
        loadQuartos();
    }, []);

    const createQuarto =
        async (quarto) => {

            const novo =
                await quartosService.create(
                    quarto
                );

            setQuartos(old => [
                ...old,
                novo,
            ]);
        };

    const updateQuarto =
        async (id, quarto) => {

            const atualizado =
                await quartosService.update(
                    id,
                    quarto
                );

            setQuartos(old =>
                old.map(item =>
                    item.id_quarto === id
                        ? atualizado
                        : item
                )
            );
        };

    const deleteQuarto =
        async (id) => {

            await quartosService.delete(id);

            setQuartos(old =>
                old.filter(item =>
                    item.id_quarto !== id
                )
            );
        };

    return {
        quartos,
        loading,
        createQuarto,
        updateQuarto,
        deleteQuarto,
    };
};