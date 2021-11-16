
import React from "react";

import { useStore } from "contexts/admin/store";
import { observer } from "mobx-react-lite";
import DataTable from "../generics/DataTable";

export default observer(function GenericAllergenDataTable() {
    const { allergenStore, userStore } = useStore();
    const { handleDelete, handleUpdate, handleRowClick } = allergenStore;
    
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
            ]}
            rows={allergenStore.allergensRegistry}
            showActions
            onClick={handleRowClick}
            showEdit
            disabled={allergenStore.isComponentDisabled}
            // disableEdit
            onEdit={handleUpdate}
            showDelete
            disableDelete={userStore.user?.role != "SuperAdmin"}
            onDelete={handleDelete}
            //showId
            paginationTop />
    )
})