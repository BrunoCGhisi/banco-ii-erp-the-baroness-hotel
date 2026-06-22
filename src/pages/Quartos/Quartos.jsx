import {
    TitleSection,
    CustomDataGrid,
} from "../../shared/components/page";

import { useApi } from "../../shared/hooks/useApi";

import { columns } from "./columns";

export default function Quartos() {

    const {
        data,
        loading,
    } = useApi("quartos");

    return (
        <>
            <TitleSection
                titleText="Quartos"
            />

            <CustomDataGrid
                rows={data}
                columns={columns}
                loading={loading}
            />
        </>
    );
}