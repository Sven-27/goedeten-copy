import { Button, Grid, Paper } from "@material-ui/core";
import React, { useEffect } from "react";
import { useStore } from "contexts/admin/store";
import { observer } from "mobx-react-lite";
import UserTable from "./UserTable";
import AddIcon from "@material-ui/icons/Add";
import UserRegistrationForm from "./UserRegistrationForm";
import UserEditForm from "./UserEditForm";

export default observer(function UserDashboard() {
  const { userStore } = useStore();
  useEffect(() => {
    userStore.loadData();
  }, []);

  return userStore.user?.role == "SuperAdmin" ? (
    <Grid container spacing={1}>
      <UserRegistrationForm/>
      <UserEditForm/>
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
          <Button
            variant="contained"
            size="small"
            color="default"
            onClick={userStore.handleAddNew}
            startIcon={<AddIcon />}
            style={{ margin: "5px" }}
          >
            Nieuw toevoegen
          </Button>
        </Paper>
      </Grid>

      <Grid item xs={12}></Grid>

      <Grid item xs={12}>
        <UserTable></UserTable>
      </Grid>
    </Grid>
  ) : (
    <p> Jij bent niet bevoegd om deze panel te bekijken</p>
  );
});