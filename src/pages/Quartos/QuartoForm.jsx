import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from "@mui/material";

export default function QuartoForm({
                                       formData,
                                       setFormData,
                                       categorias,
                                   }) {

    console.log(categorias);
    return (

        <Grid
            container
            spacing={2}
        >

            <Grid item xs={12}>

                <TextField
                    fullWidth
                    label="Número"
                    value={formData.numero}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            numero:
                            e.target.value,
                        })
                    }
                />

            </Grid>

            <Grid size={{xs: 6}}>

                <TextField
                    fullWidth
                    type="number"
                    label="Andar"
                    value={formData.andar}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            andar:
                            e.target.value,
                        })
                    }
                />

            </Grid>

            <Grid size={{xs: 6}}>

                <FormControl fullWidth>

                    <InputLabel>
                        Categoria
                    </InputLabel>

                    <Select
                        variant="outlined"
                        label="Categoria"
                        value={
                            formData.id_categoria || ""
                        }
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                id_categoria:
                                e.target.value,
                            })
                        }
                        >

                        {categorias.map(cat => (

                            <MenuItem
                                key={
                                    cat.id_categoria
                                }
                                value={
                                    cat.id_categoria
                                }
                            >
                                {cat.nome}
                            </MenuItem>

                        ))}

                    </Select>

                </FormControl>

            </Grid>

            <Grid size={{xs: 12}}>

                <FormControl fullWidth>

                    <InputLabel>
                        Status
                    </InputLabel>

                    <Select
                        variant="outlined"
                        label="Status"
                        value={
                            formData.status || ""
                        }
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                status:
                                e.target.value,
                            })
                        }
                        >

                        <MenuItem
                            value="DISPONIVEL"
                        >
                            Disponível
                        </MenuItem>

                        <MenuItem
                            value="MANUTENCAO"
                        >
                            Manutenção
                        </MenuItem>

                        <MenuItem
                            value="INTERDITADO"
                        >
                            Interditado
                        </MenuItem>

                    </Select>

                </FormControl>

            </Grid>

        </Grid>
    );
}