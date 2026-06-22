import { useState } from "react";

import AddCircleOutlineOutlinedIcon
    from "@mui/icons-material/AddCircleOutlineOutlined";

import {
    CustomDataGrid,
    FormDialog,
    PageHeader,
} from "../../shared/components";

import HospedeForm from "./HospedeForm";


import { useHospedes } from "../../shared/hooks/useHospedes.js";
import {getColumns} from "./collumns.jsx";


export default function Hospedes() {

    const {
        hospedes,
        loading,
        createHospede,
        updateHospede,
        deleteHospede,
    } = useHospedes();

    const [openModal, setOpenModal] =
        useState(false);

    const [selectedHospede, setSelectedHospede] =
        useState(null);

    const emptyHospede = {
        nome: "",
        cpf: "",
        telefone: "",
        email: "",
        endereco: "",
        data_nascimento: null,
    };

    const [formData, setFormData] =
        useState(emptyHospede);

    const handleCreate = () => {

        setSelectedHospede(null);

        setFormData(
            emptyHospede
        );

        setOpenModal(true);
    };

    const handleEdit = (row) => {

        setSelectedHospede(row);

        setFormData(row);

        setOpenModal(true);
    };

    const handleDelete = async (row) => {

        const confirmed =
            window.confirm(
                `Deseja excluir ${row.nome}?`
            );

        if (!confirmed) {
            return;
        }

        try {

            await deleteHospede(
                row.id_hospede
            );

        } catch (error) {

            const mensagem =
                error?.response?.data?.erro ||
                "Não foi possível excluir o hóspede.";

            alert(mensagem);
        }
    };

    const handleSave = async () => {

        try {

            const payload = {
                ...formData,
                data_nascimento:
                    formData.data_nascimento || null,
            };

            if (selectedHospede) {

                await updateHospede(
                    selectedHospede.id_hospede,
                    payload
                );

            } else {

                await createHospede(
                    payload
                );
            }

            setOpenModal(false);

        } catch (error) {

            const mensagem =
                error?.response?.data?.erro ||
                "Erro ao salvar hóspede.";

            alert(mensagem);
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
                titleText="Hóspedes"
                buttonText="Adicionar"
                IconName={
                    AddCircleOutlineOutlinedIcon
                }
                onButtonClick={
                    handleCreate
                }
            />

            <CustomDataGrid
                rows={hospedes}
                columns={columns}
                loading={loading}
            />

            <FormDialog
                open={openModal}
                title={
                    selectedHospede
                        ? "Editar Hóspede"
                        : "Novo Hóspede"
                }
                onClose={() =>
                    setOpenModal(false)
                }
                onSave={handleSave}
            >
                <HospedeForm
                    formData={formData}
                    setFormData={setFormData}
                />
            </FormDialog>
        </>
    );
}