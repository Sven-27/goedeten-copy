import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@material-ui/core";
import React from "react";
import { IDish } from "models/Dish";
import styles from "styles/admin/Dish.module.scss";
import NumberFormat from "react-number-format";
import { useFormContext } from "react-hook-form";
interface Props {
  dish: IDish;
  handleChangeQuantity: (value: string) => void;
}

export default function DishMaxQuantity({ dish, handleChangeQuantity }: Props) {
  let quantity = dish.maxQuantity.toString();

  const handleChange = (event: any) => {
    const re = /^[0-9\b]+$/;
    if (event.target.value === "" || re.test(event.target.value)) {
      quantity = event.target.value;
    }
    handleChangeQuantity(quantity);
  };
  const methods = useFormContext();
  return (
    <FormControl variant="outlined" className={styles.inputs}>
      <InputLabel
        style={{
          backgroundColor: "white",
          paddingLeft: "0.5rem",
          paddingRight: "0.5rem",
        }}
      >
        Max.aantal
      </InputLabel>
      <NumberFormat
        {...methods.register("maxQuantity", {
           required: true,
           validate: {
             positive: v => parseInt(v) > 0         
           }           
           })}
        id="maxQuantity"
        thousandSeparator={true}
        inputMode="numeric"
        value={quantity}
        customInput={OutlinedInput}
        onChange={(e) => handleChange(e)}
      />
      {methods.formState.errors.maxQuantity && (
        <p style={{ color: "red" }}> Aantal is verplicht...</p>
      )}
    </FormControl>
  );
}
