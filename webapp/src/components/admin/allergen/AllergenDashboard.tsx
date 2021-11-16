import {Grid, Paper } from "@material-ui/core";
import React, { useEffect } from "react";

import AllergenDetails from "./AllergenDetails";
import AllergenSearchComponent from "./AllergenSearchComponent";
import { useStore } from "contexts/admin/store";
import { observer } from "mobx-react-lite";
import GenericAllergenDataTable from "./GenericAllergenDataTable";

export default observer(function AllergenDashboard() { 
  const {allergenStore} = useStore();
  useEffect(() => {
    allergenStore.loadData()
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
          <AllergenDetails />
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <AllergenSearchComponent />
      </Grid>

      <Grid item xs={12}>
        {/* <AllergenDataList /> */}
        <GenericAllergenDataTable />
      </Grid>
    </Grid>
  );
});
