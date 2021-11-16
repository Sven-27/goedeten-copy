import { FormControl, InputLabel, OutlinedInput, TextField, Typography } from "@material-ui/core";
import React from "react";
import { useStore } from "contexts/admin/store";
import { observer } from "mobx-react";
import styles from "styles/admin/order/OrderDetailDialog.module.scss";
import { useFormContext } from "react-hook-form";
import DataTable from "../generics/DataTable";
import { DateTime } from "luxon";

export default observer(function OrderTransactions() {
  const { orderStore } = useStore();
  const methods = useFormContext();
  const data = orderStore.dataRow;
  return (
    <div className={styles.transactionTable}>


    <DataTable
    columnData={[
        {
            id: 'id',
            name: 'Id',
            enableSort: true,
            align: "left"
        },
        {
            id: 'transactionId',
            name: 'Transactienummer',
            enableSort: true,
            align: "left"
        },
        {
            id: 'transactionStatus',
            name: 'Status',
            enableSort: true,
            align: "left",
            // calculated: true,
            // calculation: { callback:(a: string) => a.split("T")[0], fields:['orderDate'] }
        },
        {
            id: 'transactionDateTime',
            name: 'Datum en tijd',
            enableSort: true,
            align: "left",
            calculated: true,
            calculation: { callback:(a: string) => DateTime.fromISO(a+"Z").toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS), fields:['transactionDateTime'] }
        },
    ]}
    rows={orderStore.dataRow.transactions}
    showActions
    // onClick={handleRowClick}
    // showEdit={userStore.user?.role == "SuperAdmin"}
    renameEdit="Details"
    // disabled={orderStore.isComponentDisabled}
    // disableEdit
    onEdit={() => orderStore.editOpen = true}
    // showDelete
    // disableDelete={userStore.user?.role != "SuperAdmin"}
    // onDelete={handleDelete}
    //showId
    paginationTop
    hidePagination />
  </div>
  );
});
