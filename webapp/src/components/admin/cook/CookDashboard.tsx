import React, { useEffect } from "react";
import { Button } from "@material-ui/core";
import { Grid, Paper } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import CookTable from "./CookTable";
import CookSearchComponent from "./CookSearchComponent";
import { useStore } from "contexts/admin/store";
import { observer } from "mobx-react";
import CookEditDialog from "./CookEditDialog";

export default observer(function DishDashboard() {
  const { cookStore,locationStore } = useStore();
  useEffect(() => {
    locationStore.loadData()
    cookStore.loadData()
  }, [])

  return (
    <Grid container spacing={1}>
      <CookEditDialog />

      <Grid item xs={12}>
        <Paper
          elevation={3}
          style={{
            display: "flex",
            backgroundColor: "beige",
            height: "auto",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Button
            variant="contained"
            size="small"
            color="default"
            onClick={cookStore.handleAddNew}
            startIcon={<AddIcon />}
            style={{ margin: "5px" }}
          >
            Nieuw toevoegen
          </Button>
        </Paper>
      </Grid>

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
          <CookSearchComponent />
        </Paper>
      </Grid>
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
          <CookTable />
        </Paper>
      </Grid>
    </Grid>
  );
});
