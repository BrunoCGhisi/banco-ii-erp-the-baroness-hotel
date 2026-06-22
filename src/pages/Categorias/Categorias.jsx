
import { useApi } from "../../shared/hooks/useApi";

import { columns } from "./columns.jsx";
import {CustomDataGrid, TitleText} from "../../shared/components/index.js";

export default function Categorias() {

    const {
        data,
        loading,
    } = useApi("categorias");

    return (
        <>
            <TitleText
                titleText="Categorias"
            />

            <CustomDataGrid
                rows={data}
                columns={columns}
                loading={loading}
            />
        </>
    );
}