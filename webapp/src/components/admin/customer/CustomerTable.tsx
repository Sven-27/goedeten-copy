import React, { useEffect } from "react";
import { useStore } from "contexts/admin/store";
import { observer } from "mobx-react-lite";
import DataTable from "./../generics/DataTable";

export default observer(function CustomerTable() {
  const { customerStore, userStore } = useStore();

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
          id: 'date',
          name: 'Datum geregistreerd',
          enableSort: true,
          align: "left"
        },
        {
          id: 'email',
          name: 'E-Mail',
          enableSort: true,
          align: "left"
        },

        {
          id: 'isDeliveryRange',
          name: 'Binnen leveringsgebied',
          enableSort: true,
          align: "left"
        },
        {
          id: 'zipcode',
          name: 'Postcode',
          enableSort: true,
          align: "left"
        },

      ]}
      rows={customerStore.customerRegistry}
      showActions
      showEdit
      // disableEdit
      onEdit={(()=>true)}
      showDelete
      disableDelete={userStore.user?.role != "SuperAdmin"}
      onDelete={(()=>true)}
      showId
      showExport
      paginationTop 
      />
  )
})