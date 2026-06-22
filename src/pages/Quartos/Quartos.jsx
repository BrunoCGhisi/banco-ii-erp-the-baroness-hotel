import {
    CustomDataGrid
} from "../../shared/components/page";

import { useApi } from "../../shared/hooks/useApi";

import { columns } from "./columns";
import {TitleText} from "../../shared/components/index.js";

export default function Quartos() {

    const {
        data,
        loading,
    } = useApi("quartos");

    return (
        <>
            <TitleText
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