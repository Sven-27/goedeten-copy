import React, { useEffect,} from 'react';
import Autocomplete from "@material-ui/lab/Autocomplete";
import {TextField} from "@material-ui/core";
import {ICuisine} from "models/Cuisine";
import styles from "styles/admin/Dish.module.scss"
import { useFormContext } from 'react-hook-form';

export interface DishCuisineProps {
  cuisines: ICuisine[];
  selectedCuisine: ICuisine | undefined;
  handleChangeCuisine: (value: ICuisine) => void;
}

export default function DishCuisine (props: DishCuisineProps) {
  const {cuisines, selectedCuisine, handleChangeCuisine} = props;
  // const newCuisine : ICuisine = {id: 0, name:""}
  // const alloptions : ICuisine[] = [newCuisine].concat(cuisines)
  const methods = useFormContext();
  return (
    <Autocomplete 
      {...methods.register("cuisineId")}
      id="dishcuisine-combo-box"
      options={cuisines}
      getOptionLabel={(option) => (option.name)}
      getOptionSelected={(option, value) => option.name === value.name}
      onChange={(e:any, newValue:ICuisine) => {handleChangeCuisine(newValue)}}
      disableClearable={true}
      className={styles.selects}
      renderInput={(params) => <TextField {...params} label="Keuken" variant="outlined" />}
      value={selectedCuisine}
    />
  )
}