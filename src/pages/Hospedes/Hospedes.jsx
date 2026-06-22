import { useState } from "react";

import AddCircleOutlineOutlinedIcon
    from "@mui/icons-material/AddCircleOutlineOutlined";

import HospedeForm from "./HospedeForm";

import { getColumns } from "./columns.jsx";
import { useApi } from "../../shared/hooks/useApi";
import {CustomDataGrid, FormDialog, PageHeader} from "../../shared/components/index.js";

export default function Hospedes() {

    const {
        data,
        loading,
    } = useApi("hospedes");

    const [openModal, setOpenModal] =
        useState(false);

    const [formData, setFormData] =
        useState({
            nome: "",
            cpf: "",
            telefone: "",
            email: "",
        });

    const handleCreate = () => {

        setFormData({
            nome: "",
            cpf: "",
            telefone: "",
            email: "",
        });

        setOpenModal(true);
    };

    const handleEdit = (row) => {

        setFormData(row);

        setOpenModal(true);
    };

    const handleDelete = (row) => {

        alert(
            `Excluir ${row.nome}`
        );
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
                rows={data}
                columns={columns}
                loading={loading}
            />

            <FormDialog
                open={openModal}
                title="Hóspede"
                onClose={() =>
                    setOpenModal(false)
                }
                onSave={() =>
                    setOpenModal(false)
                }
            >
                <HospedeForm
                    formData={formData}
                    setFormData={setFormData}
                />
            </FormDialog>
        </>
    );
}