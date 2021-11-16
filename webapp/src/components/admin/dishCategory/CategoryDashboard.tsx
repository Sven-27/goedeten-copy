import {Grid, Paper } from "@material-ui/core";
import React, { useEffect } from "react";
import CategoryDetails from "./CategoryDetails";
import CategorySearchComponent from "./CategorySearchComponent";
import { useStore } from "contexts/admin/store";
import { observer } from "mobx-react-lite";
import GenericCategoryDataTable from "./GenericCategoryDataTable";

export default observer(function CategoryDashboard() { 
  const {dishCategoryStore} = useStore();
  useEffect(() => {
    dishCategoryStore.loadData()
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
          <CategoryDetails />
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <CategorySearchComponent />
      </Grid>

      <Grid item xs={12}>        
        <GenericCategoryDataTable />
      </Grid>
    </Grid>
  );
});
