import {Grid, Paper } from "@material-ui/core";
import React, { useEffect } from "react";
import LocationDetails from "./LocationDetails";
import LocationSearchComponent from "./LocationSearchComponent";
import { useStore } from "contexts/admin/store";
import { observer } from "mobx-react-lite";
import GenericLocationDataTable from "./GenericLocationDataTable";

export default observer(function LocationDashboard() { 
  const {locationStore} = useStore();
  useEffect(() => {
    locationStore.loadData()
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
          <LocationDetails />
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <LocationSearchComponent />
      </Grid>

      <Grid item xs={12}>
        {/* <LocationDataList /> */}
        <GenericLocationDataTable />
      </Grid>
    </Grid>
  );
});
