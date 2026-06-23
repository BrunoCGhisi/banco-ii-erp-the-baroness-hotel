import {
    CustomDataGrid,
    PageHeader
} from "../../shared/components";

import {
    usePagamentos
} from "../../shared/hooks/usePagamentos";

import {
    getColumns
} from "./columns";

export default function Pagamentos(){

    const {
        pagamentos,
        loading
    } = usePagamentos();

    return (
        <>
            <PageHeader
                titleText="Pagamentos"

            />

            <CustomDataGrid
                rows={pagamentos}
                columns={
                    getColumns()
                }
                loading={loading}
            />
        </>
    );
}