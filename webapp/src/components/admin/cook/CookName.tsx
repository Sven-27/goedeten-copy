import { FormControl, InputLabel, OutlinedInput } from "@material-ui/core";
import React from "react";
import { useStore } from "contexts/admin/store";
import { observer } from "mobx-react";
import styles from "styles/admin/CookEdit.module.scss";
import { useFormContext } from "react-hook-form";

export default observer(function CookName() {
  const { cookStore } = useStore();
  const methods = useFormContext();
  return (
    <FormControl variant="outlined" className={styles.inputs}>
      <InputLabel>Naam kok </InputLabel>
      <OutlinedInput
        {...methods.register("name", { required: true })}
        //required
        id="name"
        name="name"
        value={cookStore.row.name}
        onChange={(e) => cookStore.handleChangeFormInput(e, e.target.value)}
        labelWidth={105}
        placeholder="naam van kook..."
      />
      {methods.formState.errors.name && (
        <p style={{ color: "red" }}> Naam is verplicht...</p>
      )}
    </FormControl>
  );
});
