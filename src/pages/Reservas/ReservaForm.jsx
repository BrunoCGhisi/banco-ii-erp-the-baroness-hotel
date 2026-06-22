import Grid from "@mui/material/Grid";

import TextField
    from "@mui/material/TextField";

import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
} from "@mui/material";

export default function ReservaForm({

                                        formData,
                                        setFormData,

                                        hospedes,
                                        quartos,

                                    }) {

    return (

        <Grid
            container
            spacing={2}
        >

            <Grid size={12}>

                <FormControl fullWidth>

                    <InputLabel>
                        Hóspede
                    </InputLabel>

                    <Select
                        label="Hóspede"
                        value={
                            formData.id_hospede_responsavel
                        }
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                id_hospede_responsavel:
                                e.target.value,
                            })
                        }
                    >

                        {hospedes.map(item => (

                            <MenuItem
                                key={item.id_hospede}
                                value={item.id_hospede}
                            >
                                {item.nome}
                            </MenuItem>

                        ))}

                    </Select>

                </FormControl>

            </Grid>

            <Grid size={12}>

                <FormControl fullWidth>

                    <InputLabel>
                        Quarto
                    </InputLabel>

                    <Select
                        label="Quarto"
                        value={
                            formData.id_quarto
                        }
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                id_quarto:
                                e.target.value,
                            })
                        }
                    >

                        {quartos.map(item => (

                            <MenuItem
                                key={item.id_quarto}
                                value={item.id_quarto}
                            >
                                {item.numero}
                            </MenuItem>

                        ))}

                    </Select>

                </FormControl>

            </Grid>

            <Grid size={6}>

                <TextField
                    fullWidth
                    type="date"
                    label="Check-in"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={
                        formData.checkin_previsto
                    }
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            checkin_previsto:
                            e.target.value,
                        })
                    }
                />

            </Grid>

            <Grid size={6}>

                <TextField
                    fullWidth
                    type="date"
                    label="Checkout"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={
                        formData.checkout_previsto
                    }
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            checkout_previsto:
                            e.target.value,
                        })
                    }
                />

            </Grid>

            <Grid size={12}>

                <TextField
                    fullWidth
                    type="number"
                    label="Quantidade de hóspedes"
                    value={
                        formData.quantidade_hospedes
                    }
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            quantidade_hospedes:
                            e.target.value,
                        })
                    }
                />

            </Grid>

        </Grid>
    );
}