import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

export default function CategoriaForm({
                                          formData,
                                          setFormData,
                                      }) {

    return (
        <Grid container spacing={2}>

            <Grid size={{ xs: 12 }}>
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

            <Grid size={{ xs: 12 }}>
                <TextField
                    fullWidth
                    label="Descrição"
                    value={formData.descricao}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            descricao: e.target.value,
                        })
                    }
                />
            </Grid>

            <Grid size={{ xs: 6 }}>
                <TextField
                    fullWidth
                    type="number"
                    label="Capacidade"
                    value={formData.capacidade}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            capacidade: e.target.value,
                        })
                    }
                />
            </Grid>

            <Grid size={{ xs: 6 }}>
                <TextField
                    fullWidth
                    type="number"
                    label="Valor Diária"
                    value={formData.valor_diaria}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            valor_diaria: e.target.value,
                        })
                    }
                />
            </Grid>

        </Grid>
    );
}