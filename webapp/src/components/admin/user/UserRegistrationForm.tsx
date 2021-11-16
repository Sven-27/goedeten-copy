import React, { useState } from "react";

import styles from "styles/admin/user/Registration.module.scss";
import { useForm } from "react-hook-form";
import { useStore } from "contexts/admin/store";
import { Button, Dialog, DialogContent, TextField } from "@material-ui/core";

import { User } from "models/User";
import CancelIcon from "@material-ui/icons/Cancel";
import { observer } from "mobx-react";
interface IUserRegistration {  
  username: string;
  name: string;
}

export default observer(function UserRegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRegistration>({
    mode: "onChange",
  });

  const { userStore, commonStore } = useStore();

  const [badRequest, setBadRequest] = useState(true);

  const handleRegister = async (value: IUserRegistration) => {
    let newUser = new User();
    newUser.username = value.username;
    newUser.name = value.name;
    const result = await userStore.register(newUser);
    (result)&& alert (`user ${value.username} is toegevoegd!`)
    userStore.handleCloseEditModal();
  };

  return (
    <div>
      <Dialog
        open={userStore.editOpen}
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
              required
              onClick={() => setBadRequest(false)}
              id="username"
              label="username(email)"
              placeholder="email@test.com"
              {...register( "username", {
                required: "Voer email in",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Voer een geldig email adres in",
                }
              })}
            />
            {errors.username && <p>{errors.username.message}</p>}
            <TextField
              required
              onClick={() => setBadRequest(false)}
              id="name"
              label="display naam"
              placeholder="display naam"
              {...register("name")}
            />
            <Button
              variant="contained"
              color="primary"
              size="small"
              type="submit"
            >
              Registreer
            </Button>
            <Button
              onClick={userStore.handleCancel}
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
