
import React  from "react";
import { useStore } from "contexts/admin/store";
import { observer } from "mobx-react-lite";
import DataTable from "../generics/DataTable";
import userStore from "contexts/admin/userStore";

export default observer(function GenericIngredientDataTable() {
    const { ingredientStore,userStore } = useStore();
    const { handleDelete, handleUpdate, handleRowClick } = ingredientStore;
   

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
            rows={ingredientStore.ingredientsRegistry}
            showActions
            onClick={handleRowClick}
            showEdit
            disabled={ingredientStore.isComponentDisabled}
            // disableEdit
            onEdit={handleUpdate}
            showDelete
            disableDelete={userStore.user?.role != "SuperAdmin"}
            onDelete={handleDelete}
            //showId
            paginationTop />
    )
})