import { useEffect, useState } from "react";

import { api } from "../services/api";

export function useApi(endpoint) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadData = async () => {

        try {

            setLoading(true);

            const response = await api.get(
                `/${endpoint}/`
            );

            setData(
                response.data
            );

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