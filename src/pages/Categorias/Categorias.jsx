import {
    TitleSection,
    CustomDataGrid,
} from "../../shared/components/page";

import { useApi } from "../../shared/hooks/useApi";

import { columns } from "./columns";

export default function Categorias() {

    const {
        data,
        loading,
    } = useApi("categorias");

    return (
        <>
            <TitleSection
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