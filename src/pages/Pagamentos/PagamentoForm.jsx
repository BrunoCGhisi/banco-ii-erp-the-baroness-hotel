import Grid from "@mui/material/Grid";

import TextField
    from "@mui/material/TextField";

import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
} from "@mui/material";


export default function PagamentoForm({

                                          conta,

                                          formData = {},
                                          setFormData = () => {},

                                      }) {


    return (

        <Grid
            container
            spacing={2}
        >

            <Grid size={12}>

                <TextField
                    fullWidth
                    disabled
                    label="Conta"
                    value={
                        conta?.id_conta || ""
                    }
                />

            </Grid>


            <Grid size={12}>

                <TextField
                    fullWidth
                    type="number"
                    label="Valor"
                    value={
                        formData.valor || ""
                    }
                    onChange={(e)=>
                        setFormData({

                            ...formData,

                            valor:
                            e.target.value,

                        })
                    }
                />

            </Grid>


            <Grid size={12}>

                <FormControl fullWidth>

                    <InputLabel>
                        Forma de pagamento
                    </InputLabel>


                    <Select
                        variant="outlined"
                        label="Forma de pagamento"

                        value={
                            formData.id_forma_pagamento || ""
                        }

                        onChange={(e)=>

                            setFormData({
                                ...formData,
                                id_forma_pagamento:
                                e.target.value,
                            })
                        }
                    >

                        <MenuItem value={1}>
                            PIX
                        </MenuItem>

                        <MenuItem value={2}>
                            Crédito
                        </MenuItem>

                        <MenuItem value={3}>
                            Débito
                        </MenuItem>

                        <MenuItem value={4}>
                            Dinheiro
                        </MenuItem>

                    </Select>

                </FormControl>

            </Grid>

        </Grid>

    );
}