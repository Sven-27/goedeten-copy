import {
  FormControl,  
  InputLabel,
  OutlinedInput,
} from "@material-ui/core";
import React from "react";
import { IDish } from "models/Dish";
import styles from "styles/admin/Dish.module.scss";
import { useFormContext } from "react-hook-form";
interface Props {
  dish: IDish;
  handleChangeForm: (event: any) => void;
}

export default function DishNameShort({ dish, handleChangeForm }: Props) {
  const methods = useFormContext();
  return (
    <FormControl variant="outlined" className={styles.inputs}>
      <InputLabel> Naam gerecht(kort) </InputLabel>
      <OutlinedInput
       {...methods.register("shortName", { required: true, maxLength:20 })}
        id="shortName"
        value={dish.shortName}
        onChange={(e) => handleChangeForm(e)}
        labelWidth={150}
        placeholder="gerechtnaam kort...."
      />
       {methods.formState.errors.shortName &&  methods.formState.errors.shortName.type === "required"&& (
        <p style={{ color: "red" }}> Korte naam is ook verplicht...</p>
      )}
       {methods.formState.errors.shortName &&  methods.formState.errors.shortName.type === "maxLength"&& (
        <p style={{ color: "red" }}> Mag niet langer dan 20 karakters zijn...</p>
      )}
        
    </FormControl>
  );
}
