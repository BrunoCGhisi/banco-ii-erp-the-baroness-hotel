import {
    useEffect,
    useState,
} from "react";

import {
    contasReceberService
} from "../services/contasReceberService";

export const useContasReceber = () => {

    const [loading, setLoading] =
        useState(true);

    const [contas, setContas] =
        useState([]);

    const loadContas =
        async () => {

            setLoading(true);

            const data =
                await contasReceberService.getAll();

            setContas(
                data.map(item=>({
                    ...item,
                    id:item.id_conta
                }))
            );
            setLoading(false);
        };

    useEffect(() => {

        loadContas();

    }, []);

    return {

        contas,
        loading,

        reload: loadContas,
    };
};