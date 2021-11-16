import { Grid, Paper } from "@material-ui/core";
import React, { useEffect } from "react";
import { useStore } from "contexts/admin/store";
import { observer } from "mobx-react-lite";

export default observer(function ReportsDashboard() {
  const { locationStore } = useStore();

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
        ></Paper>
      </Grid>

      <Grid item xs={12}></Grid>

      <Grid item xs={12}>
        <h1>Reports</h1>
      </Grid>
    </Grid>
  );
});
