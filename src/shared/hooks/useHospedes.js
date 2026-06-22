import {
    useEffect,
    useState,
} from "react";

import {
    hospedesService
} from "../services/hospedesService";

export const useHospedes = () => {

    const [loading, setLoading] =
        useState(true);

    const [hospedes, setHospedes] =
        useState([]);

    const loadHospedes =
        async () => {

            setLoading(true);

            const data =
                await hospedesService.getAll();

            setHospedes(data);

            setLoading(false);
        };

    useEffect(() => {

        loadHospedes();

    }, []);

    const createHospede =
        async (hospede) => {

            const novo =
                await hospedesService.create(
                    hospede
                );

            setHospedes(old => [
                ...old,
                novo,
            ]);
        };

    const updateHospede =
        async (
            id,
            hospede
        ) => {

            const atualizado =
                await hospedesService.update(
                    id,
                    hospede
                );

            setHospedes(old =>
                old.map(item =>
                    item.id_hospede === id
                        ? atualizado
                        : item
                )
            );
        };

    const deleteHospede =
        async (id) => {

            await hospedesService.delete(
                id
            );

            setHospedes(old =>
                old.filter(item =>
                    item.id_hospede !== id
                )
            );
        };

    return {

        hospedes,
        loading,

        createHospede,
        updateHospede,
        deleteHospede,
    };
};