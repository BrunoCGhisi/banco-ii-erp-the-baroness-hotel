import {CustomDataGrid} from "../../shared/components/page";

import { useApi } from "../../shared/hooks/useApi";

import { columns } from "./columns";
import {TitleText} from "../../shared/components/index.js";

export default function Hospedes() {

    const {
        data,
        loading,
    } = useApi("hospedes");

    return (
        <>
            <TitleText
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