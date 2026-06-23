import {
    useEffect,
    useState
} from "react";


import {pagamentosService} from "../services/pagamentosService";

export const usePagamentos = () => {

    const [loading,setLoading] =
        useState(true);

    const [pagamentos,setPagamentos] =
        useState([]);

    const loadPagamentos =
        async()=>{

            setLoading(true);

            const data =
                await pagamentosService.getAll();

            setPagamentos(
                data.map(item=>({
                    ...item,
                    id:
                    item.id_pagamento
                }))
            );
            setLoading(false);
        };

    useEffect(()=>{
        loadPagamentos();
    },[]);

    const registrarPagamento =
        async(dados)=>{
            setLoading(true);
            try{
                const response =
                    await pagamentosService.registrar(
                        dados
                    );
                await loadPagamentos();
                return response;
            }finally{
                setLoading(false);
            }
        };

    return {
        pagamentos,
        loading,
        registrarPagamento,
        reload:
        loadPagamentos
    };

};