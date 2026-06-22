import { useState } from "react";

import AddCircleOutlineOutlinedIcon
    from "@mui/icons-material/AddCircleOutlineOutlined";

import CategoriaForm
    from "./CategoriaForm";

import { getColumns }
    from "./columns";

import { useCategorias }
    from "../../shared/hooks/useCategorias";

import {
    CustomDataGrid,
    FormDialog,
    PageHeader,
} from "../../shared/components";

export default function Categorias() {

    const {

        categorias,
        loading,

        createCategoria,
        updateCategoria,
        deleteCategoria,

    } = useCategorias();

    const [openModal, setOpenModal] =
        useState(false);

    const [selectedCategoria,
        setSelectedCategoria] =
        useState(null);

    const emptyCategoria = {

        nome: "",
        descricao: "",
        valor_diaria: "",
    };

    const [formData, setFormData] =
        useState(emptyCategoria);

    const handleCreate = () => {

        setSelectedCategoria(null);

        setFormData(
            emptyCategoria
        );

        setOpenModal(true);
    };

    const handleEdit = (row) => {

        setSelectedCategoria(row);

        setFormData(row);

        setOpenModal(true);
    };

    const handleDelete = async (
        row
    ) => {

        const confirmed =
            window.confirm(
                `Deseja excluir ${row.nome}?`
            );

        if (!confirmed) {
            return;
        }

        try {

            await deleteCategoria(
                row.id_categoria
            );

        } catch (error) {

            const mensagem =
                error?.response?.data?.erro ||
                "Não foi possível excluir.";

            alert(mensagem);
        }
    };

    const handleSave = async () => {

        try {

            if (selectedCategoria) {

                await updateCategoria(
                    selectedCategoria.id_categoria,
                    formData
                );

            } else {

                await createCategoria(
                    formData
                );
            }

            setOpenModal(false);

        } catch (error) {

            const mensagem =
                error?.response?.data?.erro ||
                "Erro ao salvar.";

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
                titleText="Categorias"
                buttonText="Adicionar"
                IconName={
                    AddCircleOutlineOutlinedIcon
                }
                onButtonClick={
                    handleCreate
                }
            />

            <CustomDataGrid
                rows={categorias}
                columns={columns}
                loading={loading}
            />

            <FormDialog
                open={openModal}
                title={
                    selectedCategoria
                        ? "Editar Categoria"
                        : "Nova Categoria"
                }
                onClose={() =>
                    setOpenModal(false)
                }
                onSave={handleSave}
            >
                <CategoriaForm
                    formData={formData}
                    setFormData={setFormData}
                />
            </FormDialog>
        </>
    );
}