
import React  from "react";
import { useStore } from "contexts/admin/store";
import { observer } from "mobx-react-lite";
import DataTable from "../generics/DataTable";
import userStore from "contexts/admin/userStore";

export default observer(function GenericCategoryDataTable() {
    const { dishCategoryStore,userStore } = useStore();
    const { handleDelete, handleUpdate, handleRowClick } = dishCategoryStore;
   

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
            rows={dishCategoryStore.categoriesRegistry}
            showActions
            onClick={handleRowClick}
            showEdit
            disabled={dishCategoryStore.isComponentDisabled}
            // disableEdit
            onEdit={handleUpdate}
            showDelete
            disableDelete={userStore.user?.role != "SuperAdmin"}
            onDelete={handleDelete}
            //showId
            paginationTop />
    )
})