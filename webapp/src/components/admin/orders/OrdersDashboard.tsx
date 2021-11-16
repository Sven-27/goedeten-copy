import { Grid, Paper } from "@material-ui/core";
import React, { useEffect } from "react";
import { useStore } from "contexts/admin/store";
import { observer } from "mobx-react-lite";
import OrderDataTable from "./OrderDataTable";
import OrderDetailDialog from "./OrderDetailDialog";

export default observer(function OrdersDashboard() {
  const { orderStore } = useStore();
  useEffect(() => {
    orderStore.loadData()
  }, [])

  return (
    <Grid container spacing={1}>
      <OrderDetailDialog/>
      <Grid item xs={12}>
        <Paper
          elevation={3}
          style={{
            display: "flex",
            backgroundColor: "beige",
            height: "auto",
            width: "100%",
          }}
        ></Paper>
      </Grid>

      <Grid item xs={12}></Grid>

      <Grid item xs={12}>
        <OrderDataTable />
      </Grid>
    </Grid>
  );
});
