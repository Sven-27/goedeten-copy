import {
  FormControl,  
  InputLabel,
  OutlinedInput,  
} from "@material-ui/core";
import React from "react";
import { IDish } from "models/Dish";
import NumberFormat from "react-number-format";
import { useFormContext } from "react-hook-form";

interface Props {
  dish: IDish;
  handleChangePrice: (price: string) => void;
}

export default function DishPrice({ dish, handleChangePrice }: Props) {
  const methods = useFormContext();
  let price = dish.priceLarge.toFixed(2).toString();

  const handleChangeP = (event: any) => {
    var val: string = event.target.value;
    const reg = [/^\D+/, /[^.,\d]+/g, /[,]+/, /(\d+\.\d{2}).*$/];
    price = event.target.value
      .replace(reg[0], "")
      .replace(reg[1], "")
      .replace(reg[2], ".")
      .replace(reg[3], "$1");
    handleChangePrice(price);
  };

  return (
    <FormControl variant="outlined" size="medium">
      <InputLabel
        style={{
          backgroundColor: "white",
          paddingLeft: "0.5rem",
          paddingRight: "0.5rem",
        }}
      >
        Prijs
      </InputLabel>
      <NumberFormat
        {...methods.register("priceLarge", {
          required: true,
          validate: {
            positive: v => parseFloat(v) > 0,          
          }
        })}
        id="priceLarge"
        thousandSeparator={true}
        prefix={"€"}
        inputMode="numeric"
        value={price}
        customInput={OutlinedInput}
        onChange={handleChangeP}
      />
      {methods.formState.errors.priceLarge && (
        <p style={{ color: "red" }}> Prijs is verplicht...</p>
      )}
    </FormControl>
  );
}
