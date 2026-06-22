import {
    TitleSection,
    CustomDataGrid,
} from "../../shared/components/page";

import { useApi } from "../../shared/hooks/useApi";

import { columns } from "./columns";

export default function Hospedes() {

    const {
        data,
        loading,
    } = useApi("hospedes");

    return (
        <>
            <TitleSection
                titleText="Hóspedes"
            />

            <CustomDataGrid
                rows={data}
                columns={columns}
                loading={loading}
            />
        </>
    );
}