import React from "react";
import {FormControl, InputLabel, Select} from "@material-ui/core";
import styles from "styles/admin/Dish.module.scss"
import { useFormContext } from "react-hook-form";
import { IVatCategory } from "models/VatCategory";

export interface VatCategoryProps{
  categories: IVatCategory[];
  selectedCategory: number;
  handleCategoryChange: (event: any) => void;
}

export default function DishCategory(props: VatCategoryProps) {
  const {categories, selectedCategory, handleCategoryChange} = props;
  const methods = useFormContext();
  return (
    <FormControl variant="outlined" >
      <InputLabel id="dish-category-select-label" htmlFor="dish-category-select">Vat categorie %</InputLabel>
        <Select className={styles.vatselect}
         {...methods.register("vatCategoryId")}
          native
          labelId="dish-category-select-label"
          label="Vat categorie %"
          
          onChange={handleCategoryChange}
          value={selectedCategory}
          variant="outlined"
          inputProps={{
            name: 'vatCategory',
            id: 'dish-category-select',
          }}
        >          
          {categories.map((category) => (
            <option key = {category.id} value={category.id}>{category.name} - {category.value}%</option>
          ))}
        </Select>

    </FormControl>

  )
}