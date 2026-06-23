import {
    useState
} from "react";

import AddCircleOutlineOutlinedIcon
    from "@mui/icons-material/AddCircleOutlineOutlined";

import {

    CustomDataGrid,
    FormDialog,
    PageHeader,

} from "../../shared/components";


import ServicoForm from "./ServicoForm";

import { getColumns } from "./columns";
import { useServicos } from "../../shared/hooks/useService.js";

export default function Servicos() {

    const {

        servicos,
        loading,

        createServico,
        updateServico,
        deleteServico,

    } = useServicos();

    const [openModal,
        setOpenModal] =
        useState(false);

    const [selectedServico,
        setSelectedServico] =
        useState(null);

    const emptyServico = {

        nome: "",
        valor: "",
    };

    const [formData,
        setFormData] =
        useState(emptyServico);

    const handleCreate = () => {

        setSelectedServico(null);

        setFormData(
            emptyServico
        );

        setOpenModal(true);
    };

    const handleEdit = (row) => {

        setSelectedServico(row);

        setFormData(row);

        setOpenModal(true);
    };

    const handleDelete =
        async (row) => {

            const confirmed =
                window.confirm(
                    `Excluir serviço ${row.nome}?`
                );

            if (!confirmed)
                return;

            try {

                await deleteServico(
                    row.id_servico
                );

            } catch (error) {

                alert(
                    error.response?.data?.erro ||
                    "Erro ao excluir serviço"
                );
            }
        };

    const handleSave =
        async () => {

            try {

                if (selectedServico) {

                    await updateServico(
                        selectedServico.id_servico,
                        formData
                    );

                } else {

                    await createServico(
                        formData
                    );
                }

                setOpenModal(false);

            } catch (error) {

                alert(
                    error.response?.data?.erro ||
                    "Erro ao salvar serviço"
                );
            }
        };

    const columns =
        getColumns(
            handleEdit,
            handleDelete
        );

    return (
        <>
            <PageHeader
                titleText="Serviços"
                buttonText="Adicionar"
                IconName={
                    AddCircleOutlineOutlinedIcon
                }
                onButtonClick={
                    handleCreate
                }
            />

            <CustomDataGrid
                rows={servicos}
                columns={columns}
                loading={loading}
            />

            <FormDialog
                open={openModal}
                title={
                    selectedServico
                        ? "Editar Serviço"
                        : "Novo Serviço"
                }
                onClose={() =>
                    setOpenModal(false)
                }
                onSave={handleSave}
            >

                <ServicoForm
                    formData={formData}
                    setFormData={setFormData}
                />

            </FormDialog>
        </>
    );
}