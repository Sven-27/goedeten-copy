import React from "react";
import {DishCategoryTile} from "./DishCategoryTileData";
import {FormControl, InputLabel, Select} from "@material-ui/core";
import styles from "styles/admin/Dish.module.scss"
import { useFormContext } from "react-hook-form";

export interface DishCategoryProps{
  categories: DishCategoryTile[];
  selectedCategory: number;
  handleCategoryChange: (event: any) => void;
}

export default function DishCategory(props: DishCategoryProps) {
  const {categories, selectedCategory, handleCategoryChange} = props;
  const methods = useFormContext();
  return (
    <FormControl variant="outlined" >
      <InputLabel id="dish-category-select-label" htmlFor="dish-category-select">Categorie gerecht</InputLabel>
        <Select className={styles.selects}
         {...methods.register("dishCategoryId")}
          native
          labelId="dish-category-select-label"
          label="Categorie gerecht"
          
          onChange={handleCategoryChange}
          value={selectedCategory}
          variant="outlined"
          inputProps={{
            name: 'DishCategory',
            id: 'dish-category-select',
          }}
        >
          <option value="0"> </option>
          {categories.map((category) => (
            <option key = {category.id} value={category.id}>{category.title}</option>
          ))}
        </Select>

    </FormControl>

  )
}