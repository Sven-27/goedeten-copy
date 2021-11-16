import {Grid, Paper } from "@material-ui/core";
import React, { useEffect } from "react";
import VatCategoryDetails from "./VatCategoryDetails";
import { useStore } from "contexts/admin/store";
import { observer } from "mobx-react-lite";
import GenericVatCategoryDataTable from "./GenericVatCategoryDataTable";

export default observer(function VatCategoryDashboard() { 
  const {vatCategoryStore} = useStore();
  useEffect(() => {
    vatCategoryStore.loadData()
  }, [])

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Paper
          elevation={3}
          style={{
            display: "flex",
            backgroundColor: "beige",
            height: "auto",
            width: "100%",
          }}
        >
          <VatCategoryDetails />
        </Paper>
      </Grid>
    

      <Grid item xs={12}>        
        <GenericVatCategoryDataTable />
      </Grid>
    </Grid>
  );
});
