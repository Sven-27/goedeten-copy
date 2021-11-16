
import React from "react";

import { useStore } from "contexts/admin/store";
import { observer } from "mobx-react-lite";
import DataTable from "../generics/DataTable";
import { OrderStatus } from "models/Order";
import { DateTime } from "luxon";

export default observer(function OrderDataTable() {
    const { orderStore, userStore } = useStore();
    const { handleSave, handleRowClick } = orderStore;

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
                    id: 'orderNumber',
                    name: 'Ordernummer',
                    enableSort: true,
                    align: "left"
                },
                {
                    id: 'orderDate',
                    name: 'Datum',
                    enableSort: true,
                    align: "left",
                    calculated: true,
                    calculation: { callback:(a: string) => DateTime.fromISO(a+"Z").toLocaleString(DateTime.DATE_SHORT), fields:['orderDate'] }
                },
                {
                    id: 'orderTime',
                    name: 'Tijd',
                    enableSort: true,
                    align: "left",
                    calculated: true,
                    calculation: { callback:(a: string) => DateTime.fromISO(a+"Z").toLocaleString(DateTime.TIME_24_WITH_SECONDS), fields:['orderDate'] }
                },
                {
                    id: 'orderStatus',
                    name: 'Orderstatus',
                    enableSort: true,
                    align: "left",
                    calculated: true,
                    calculation: { callback:(a: number) => OrderStatus[a], fields:['status'] }
                },
                {
                    id: 'totalAmount',
                    name: 'Bedrag',
                    enableSort: true,
                    align: "left",
                    calculated: true,
                    calculation: { callback:(a: number) => `€ ${a.toFixed(2).padStart(7, "\u2000")}`, fields:['totalAmount'] }
                },
                {
                    id: 'email',
                    name: 'Email',
                    enableSort: true,
                    align: "left"
                },

            ]}
            rows={orderStore.ordersRegistry}
            showActions
            onClick={handleRowClick}
            showEdit={userStore.user?.role == "SuperAdmin"}
            renameEdit="Details"

            // disableEdit
            onEdit={() => orderStore.editOpen = true}
            // showDelete
            disableDelete={userStore.user?.role != "SuperAdmin"}
            // onDelete={handleDelete}
            //showId
            paginationTop />
    )
})