
import React from "react";

import { useStore } from "contexts/admin/store";
import { observer } from "mobx-react-lite";
import DataTable from "../generics/DataTable";

export default observer(function GenericVatCategoryDataTable() {
    const { vatCategoryStore, userStore } = useStore();
    const {  handleUpdate, handleRowClick } = vatCategoryStore;
    
    return (
        <DataTable
            columnData={[
                {
                    id: 'id',
                    name: 'Id',
                    enableSort: true,
                    align: "left"
                },
                {
                    id: 'name',
                    name: 'Naam',
                    enableSort: true,
                    align: "left"
                },
                {
                    id: 'value',
                    name: 'Vaarde %',
                    enableSort: true,
                    align: "left"
                },
            ]}
            rows={vatCategoryStore.vatcategorysRegistry}
            showActions
            onClick={handleRowClick}
            showEdit
            disabled={vatCategoryStore.isComponentDisabled}  
            onEdit={handleUpdate} 
            paginationTop />
    )
})