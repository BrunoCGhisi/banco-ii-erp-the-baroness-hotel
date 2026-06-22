import { useEffect, useState }
    from "react";

import AddCircleOutlineOutlinedIcon
    from "@mui/icons-material/AddCircleOutlineOutlined";

import {
    CustomDataGrid,
    FormDialog,
    PageHeader,
} from "../../shared/components";

import { useQuartos }
    from "../../shared/hooks/useQuartos";

import { categoriasService }
    from "../../shared/services/categoriasService";

import QuartoForm
    from "./QuartoForm";

import { getColumns }
    from "./columns";

export default function Quartos() {

    const {
        quartos,
        loading,
        createQuarto,
        updateQuarto,
        deleteQuarto,
    } = useQuartos();

    const [categorias,
        setCategorias] =
        useState([]);

    const [openModal,
        setOpenModal] =
        useState(false);

    const [selectedQuarto,
        setSelectedQuarto] =
        useState(null);

    const emptyQuarto = {

        numero: "",
        andar: "",
        status: "DISPONIVEL",
        id_categoria: "",
    };

    const [formData,
        setFormData] =
        useState(emptyQuarto);

    useEffect(() => {

        const loadCategorias =
            async () => {

                const data =
                    await categoriasService.getAll();

                setCategorias(data);
            };

        loadCategorias();

    }, []);

    const handleCreate = () => {

        setSelectedQuarto(null);

        setFormData(
            emptyQuarto
        );

        setOpenModal(true);
    };

    const handleEdit = (row) => {

        setSelectedQuarto(row);

        setFormData(row);

        setOpenModal(true);
    };

    const handleDelete =
        async (row) => {

            const confirmed =
                window.confirm(
                    `Excluir quarto ${row.numero}?`
                );

            if (!confirmed)
                return;

            try {

                await deleteQuarto(
                    row.id_quarto
                );

            } catch (error) {

                alert(
                    error.response?.data?.erro ||
                    "Erro ao excluir quarto."
                );
            }
        };

    const handleSave =
        async () => {

            try {

                if (selectedQuarto) {

                    await updateQuarto(
                        selectedQuarto.id_quarto,
                        formData
                    );

                } else {

                    await createQuarto(
                        formData
                    );
                }

                setOpenModal(false);

            } catch (error) {

                alert(
                    error.response?.data?.erro ||
                    "Erro ao salvar."
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
                titleText="Quartos"
                buttonText="Adicionar"
                IconName={
                    AddCircleOutlineOutlinedIcon
                }
                onButtonClick={
                    handleCreate
                }
            />

            <CustomDataGrid
                rows={quartos}
                columns={columns}
                loading={loading}
            />

            <FormDialog
                open={openModal}
                title={
                    selectedQuarto
                        ? "Editar Quarto"
                        : "Novo Quarto"
                }
                onClose={() =>
                    setOpenModal(false)
                }
                onSave={handleSave}
            >

                <QuartoForm
                    formData={formData}
                    setFormData={setFormData}
                    categorias={categorias}
                />

            </FormDialog>

        </>
    );
}