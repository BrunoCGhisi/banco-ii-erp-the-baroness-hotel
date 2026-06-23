import Grid from "@mui/material/Grid";

import TextField
    from "@mui/material/TextField";

export default function ServicoForm({

                                        formData,
                                        setFormData,

                                    }) {

    return (

        <Grid
            container
            spacing={2}
        >

            <Grid size={12}>

                <TextField
                    fullWidth
                    label="Nome"
                    value={formData.nome}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            nome:
                            e.target.value,
                        })
                    }
                />

            </Grid>

            <Grid size={12}>

                <TextField
                    fullWidth
                    type="number"
                    label="Valor"

                    value={formData.valor}

                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            valor:
                            e.target.value,
                        })
                    }
                />

            </Grid>

        </Grid>
    );
}