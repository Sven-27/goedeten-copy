import {Grid, Paper } from "@material-ui/core";
import React, { useEffect } from "react";
import IngredientDetails from "./IngredientDetails";
import IngredientSearchComponent from "./IngredientSearchComponent";
import { useStore } from "contexts/admin/store";
import { observer } from "mobx-react-lite";
import GenericIngredientDataTable from "./GenericIngredientDataTable";

export default observer(function IngredientDashboard() { 
  const {ingredientStore} = useStore();
  useEffect(() => {
    ingredientStore.loadData()
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
          <IngredientDetails />
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <IngredientSearchComponent />
      </Grid>

      <Grid item xs={12}>        
        <GenericIngredientDataTable />
      </Grid>
    </Grid>
  );
});
