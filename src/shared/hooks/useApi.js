import { useEffect, useState } from "react";

import { api } from "../services/api";

export function useApi(endpoint) {

    const [data, setData] =
        useState([]);

    const [loading, setLoading] =
        useState(true);

    const loadData = async () => {

        try {

            setLoading(true);

            const response =
                await api.get(
                    `/${endpoint}/`
                );

            const rows =
                response.data.map(item => ({

                    ...item,

                    id:
                        item.id ||
                        item.id_hospede ||
                        item.id_categoria ||
                        item.id_quarto ||
                        item.id_reserva ||
                        item.id_servico ||
                        item.id_conta ||
                        item.id_pagamento

                }));

            setData(rows);

        } catch (error) {

            console.error(
                `Erro ao carregar ${endpoint}:`,
                error
            );

        } finally {

            setLoading(false);
        }
    };

    useEffect(() => {

        loadData();

    }, [endpoint]);

    return {

        data,
        loading,
        reload: loadData,

    };
}