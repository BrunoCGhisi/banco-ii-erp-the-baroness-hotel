export const formatDateBR = (value) => {

    if (!value)
        return "";

    const [
        ano,
        mes,
        dia
    ] = value.split("-");

    return `${dia}/${mes}/${ano}`;
};