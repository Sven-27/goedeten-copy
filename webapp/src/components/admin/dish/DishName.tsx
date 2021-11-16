import { FormControl, InputLabel, OutlinedInput } from "@material-ui/core";
import React from "react";
import { IDish } from "models/Dish";
import styles from "styles/admin/Dish.module.scss";
import { useFormContext, UseFormReturn } from "react-hook-form";
interface Props {
  dish: IDish;
  handleChangeForm: (event: any) => void;

}

export default function DishName({ dish, handleChangeForm }: Props) {

 const methods = useFormContext();
  return (
    <FormControl variant="outlined" >
      <InputLabel>Naam gerecht </InputLabel>
      <OutlinedInput
       {...methods.register("name", { required: true ,maxLength: 80, })}
        id="name"       
        name="name"
        value={dish.name}
        multiline
        rows={2}
        onChange={(e) => handleChangeForm(e)}
        labelWidth={105}
        placeholder="gerechtnaam..."
        style ={{ paddingTop: 0, paddingBottom: 0 }}
      />
     
     {methods.formState.errors.name &&  methods.formState.errors.name.type === "required"&& (
        <p style={{ color: "red" }}> Naam is verplicht...</p>
      )}
       {methods.formState.errors.name &&  methods.formState.errors.name.type === "maxLength"&& (
        <p style={{ color: "red" }}> Mag niet langer dan 80 karakters zijn...</p>
      )}
    </FormControl>
  );
}
