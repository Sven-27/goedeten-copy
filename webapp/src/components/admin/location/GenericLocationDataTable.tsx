
import React from "react";

import { useStore } from "contexts/admin/store";
import { observer } from "mobx-react-lite";
import DataTable from "./../generics/DataTable";

export default observer(function GenericAllergenDataTable() {
    const { locationStore, userStore } = useStore();
    const { handleDelete, handleUpdate, handleRowClick } = locationStore;
    
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
                    id: 'email',
                    name: 'Email',
                    enableSort: true,
                    align: "left"
                },
            ]}
            rows={locationStore.locationsRegistry}
            showActions
            onClick={handleRowClick}
            showEdit
            disabled={locationStore.isComponentDisabled}
            // disableEdit
            onEdit={handleUpdate}
            showDelete
            disableDelete={userStore.user?.role != "SuperAdmin"}
            onDelete={handleDelete}
            //showId
            paginationTop />
    )
})