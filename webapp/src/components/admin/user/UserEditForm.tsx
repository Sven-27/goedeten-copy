import React, { useEffect} from "react";
import styles from "styles/admin/user/Edit.module.scss";
import { useForm } from "react-hook-form";
import { useStore } from "contexts/admin/store";
import {
  Button,
  createStyles,
  Dialog,
  DialogContent,
  FormControl,
  InputLabel,
  makeStyles,
  Select,
  TextField,
  Theme,
} from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
import { observer } from "mobx-react";
interface IUserEdit {
  name: string;
  role: string;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);

export default observer(function UserEditForm() {
  const classes = useStyles();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IUserEdit>({
    mode: "onChange",
    defaultValues: { name: "", role: "NoAccess" },
  });

  const { userStore } = useStore();

  const isDisabled = userStore.selectedUser.id === userStore.user?.id;

  const handleRegister = async (value: IUserEdit) => {
    let updatedUser = userStore.selectedUser;
    updatedUser.needsPasswordReset = false;
    const result = await userStore.update(updatedUser);
    result && alert(`user ${updatedUser.username} is updated!`);
    userStore.handleCloseEdit2Modal();
  };
  useEffect(() => {
    reset(userStore.selectedUser);
   }, [reset, userStore.selectedUser]);

  return (
    <div>
      <Dialog
        open={userStore.editOpen2}
        maxWidth={"lg"}
        fullWidth={false}
        onClose={(event, reason) => {
          if (reason !== 'backdropClick') {          
          }
      }}    
      >
        <DialogContent>
          <form
            className={styles.formcontainer}
            onSubmit={handleSubmit((data) => handleRegister(data))}
          >
            <TextField
              {...register("name", { required: "Verplichte veld" })}
              required
              id="name"
              name="name"
              label="display naam"
              placeholder="display naam"
              value={userStore.selectedUser.name}
              onChange={(e) => userStore.handleChangeForm(e)}
            />
            <FormControl className={classes.formControl}>
              <InputLabel shrink id="label-label">
                Acces level
              </InputLabel>

              <Select
                {...register("role")}
                native
                labelId="label-label"
                label="Access level"
                onChange={(e) => userStore.handleChangeForm(e)}
                value={userStore.selectedUser.role}
                disabled={isDisabled}
                inputProps={{
                  name: "role",
                  id: "role",
                }}
              >
                <option key="0" value="NoAccess">
                  NoAccess{" "}
                </option>
                <option key="1" value="Admin">
                  Admin{" "}
                </option>
                <option key="2" value="SuperAdmin">
                  SuperAdmin{" "}
                </option>
              </Select>
            </FormControl>

            <Button
              variant="contained"
              color="primary"
              size="small"
              type="submit"
            >
              Opslaan
            </Button>
            <Button
              onClick={userStore.handleCancel2}
              startIcon={<CancelIcon />}
              variant="contained"
              color="secondary"
              size="small"
            >
              Annuleren
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
});
