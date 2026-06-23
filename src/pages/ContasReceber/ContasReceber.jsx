import {
    useState
} from "react";


import {
    CustomDataGrid,
    FormDialog,
    PageHeader,
} from "../../shared/components";


import {
    useContasReceber
} from "../../shared/hooks/useContasReceber";


import {
    usePagamentos
} from "../../shared/hooks/usePagamentos";


import {
    getColumns
} from "./columns";


import PagamentoForm
    from "../pagamentos/PagamentoForm";



export default function ContasReceber(){


    const {
        contas,
        loading,
        reload
    }
        =
        useContasReceber();



    const {registrarPagamento} = usePagamentos();



    const [
        openModal,
        setOpenModal
    ]
        =
        useState(false);



    const [
        contaSelecionada,
        setContaSelecionada
    ]
        =
        useState(null);

    const [
        formData,
        setFormData
    ]
        =
        useState({

            valor:"",
            id_forma_pagamento:""

        });
    const handlePagamento = (row)=>{
        setContaSelecionada(row);
        setFormData({
            id_conta:
            row.id_conta,
            valor:
            row.valor_restante,
            id_forma_pagamento:""
        });
        setOpenModal(true);
    };

    const handleSave =
        async()=>{
            try{
                await registrarPagamento({
                    id_conta:
                    contaSelecionada.id_conta,
                    valor:
                    formData.valor,
                    id_forma_pagamento:
                    formData.id_forma_pagamento
                });
                setOpenModal(false);
                await reload();
            }catch(error){
                alert(
                    error.response?.data?.erro ||
                    "Erro ao registrar pagamento"
                );
            }

        };

    return (
        <>
            <PageHeader
                titleText="Financeiro"
            />

            <CustomDataGrid
                rows={contas}
                columns={
                    getColumns(
                        handlePagamento
                    )
                }
                loading={loading}
            />
         <FormDialog
                open={openModal}
                title="Registrar Pagamento"
                onClose={()=>
                    setOpenModal(false)
                }
                onSave={handleSave}
            >
             <PagamentoForm
                 conta={contaSelecionada}
                 formData={formData}
                 setFormData={setFormData}
             />
            </FormDialog>
        </>
    );
}