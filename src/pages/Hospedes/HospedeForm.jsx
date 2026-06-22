import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

export default function HospedeForm({
                                        formData,
                                        setFormData,
                                    }) {

    return (
        <Grid container spacing={2}>

            <Grid item xs={12}>
                <TextField
                    fullWidth
                    label="Nome"
                    value={formData.nome}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            nome: e.target.value,
                        })
                    }
                />
            </Grid>

            <Grid item xs={12}>
                <TextField
                    fullWidth
                    label="CPF"
                    value={formData.cpf}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            cpf: e.target.value,
                        })
                    }
                />
            </Grid>

            <Grid item xs={12}>
                <TextField
                    fullWidth
                    label="Telefone"
                    value={formData.telefone}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            telefone: e.target.value,
                        })
                    }
                />
            </Grid>

            <Grid item xs={12}>
                <TextField
                    fullWidth
                    label="Email"
                    value={formData.email}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            email: e.target.value,
                        })
                    }
                />
            </Grid>

        </Grid>
    );
}