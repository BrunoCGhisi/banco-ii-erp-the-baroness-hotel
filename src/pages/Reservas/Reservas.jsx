import {
    useState,
} from "react";

import AddCircleOutlineOutlinedIcon
    from "@mui/icons-material/AddCircleOutlineOutlined";

import {
    CustomDataGrid,
    FormDialog,
    PageHeader,
} from "../../shared/components";

import {
    useReservas
} from "../../shared/hooks/useReservas";

import {
    useHospedes
} from "../../shared/hooks/useHospedes";

import {
    useQuartos
} from "../../shared/hooks/useQuartos";

import ReservaForm
    from "./ReservaForm";

import {
    getColumns
} from "./columns";

export default function Reservas() {

    const {

        reservas,
        loading,

        createReserva,
        updateReserva,

        realizarCheckin,
        realizarCheckout,

    } = useReservas();

    const {
        hospedes,
    } = useHospedes();

    const {
        quartos,
    } = useQuartos();

    const [openModal,
        setOpenModal] =
        useState(false);

    const [selectedReserva,
        setSelectedReserva] =
        useState(null);

    const emptyReserva = {

        id_hospede_responsavel: "",
        id_quarto: "",

        checkin_previsto: "",
        checkout_previsto: "",

        quantidade_hospedes: 1,
    };

    const [formData,
        setFormData] =
        useState(emptyReserva);

    const formatDateForInput =
        (date) => {

            if (!date)
                return "";

            return new Date(date)
                .toISOString()
                .split("T")[0];
        };

    const handleCreate = () => {

        setSelectedReserva(null);

        setFormData(
            emptyReserva
        );

        setOpenModal(true);
    };

    const handleEdit = (row) => {

        setSelectedReserva(row);

        setFormData({

            ...row,

            checkin_previsto:
                formatDateForInput(
                    row.checkin_previsto
                ),

            checkout_previsto:
                formatDateForInput(
                    row.checkout_previsto
                ),
        });

        setOpenModal(true);
    };

    const handleDelete =
        async () => {

            alert(
                "Delete ainda não implementado."
            );
        };

    const handleSave =
        async () => {

            try {

                if (selectedReserva) {

                    await updateReserva(

                        selectedReserva.id_reserva,

                        formData
                    );

                } else {

                    await createReserva(
                        formData
                    );
                }

                setOpenModal(false);

            } catch (error) {

                alert(
                    error.response?.data?.erro ||
                    "Erro ao salvar reserva"
                );
            }
        };

    const handleCheckin =
        async (row) => {

            try {

                await realizarCheckin(
                    row.id_reserva
                );

            } catch (error) {

                alert(
                    error.response?.data?.erro
                );
            }
        };

    const handleCheckout =
        async (row) => {

            try {

                await realizarCheckout(
                    row.id_reserva
                );

            } catch (error) {

                alert(
                    error.response?.data?.erro
                );
            }
        };

    const columns =
        getColumns(

            handleCheckin,
            handleCheckout,

            handleEdit,
            handleDelete

        );

    return (
        <>
            <PageHeader
                titleText="Reservas"
                buttonText="Adicionar"
                IconName={
                    AddCircleOutlineOutlinedIcon
                }
                onButtonClick={
                    handleCreate
                }
            />

            <CustomDataGrid
                rows={reservas}
                columns={columns}
                loading={loading}
            />

            <FormDialog
                open={openModal}
                title={
                    selectedReserva
                        ? "Editar Reserva"
                        : "Nova Reserva"
                }
                onClose={() =>
                    setOpenModal(false)
                }
                onSave={handleSave}
            >

                <ReservaForm
                    formData={formData}
                    setFormData={setFormData}
                    hospedes={hospedes}
                    quartos={quartos}
                />

            </FormDialog>

        </>
    );
}