import { FormControl, InputLabel, Select } from "@material-ui/core";
import React from "react";
import { useStore } from "contexts/admin/store";
import { observer } from "mobx-react";
import styles from "styles/admin/CookEdit.module.scss";
import { useFormContext } from "react-hook-form";

export default observer(function CookLocation() {
  const { cookStore, locationStore } = useStore();
  const methods = useFormContext();
  return (
    <FormControl variant="outlined"  >
      <InputLabel
        id="cook-location-select-label"
        htmlFor="cook-location-select"
      >
        Locatie van kook
      </InputLabel>
      <Select className={styles.selects}
        {...methods.register("locationName",{
          required: true })}
        native
        labelId="cook-location-select-label"
        label="Location van kook"
        onChange={(e) => cookStore.handleLocationName(e.target.value)}
        value={cookStore.row.locationName}
        variant="outlined"
         inputProps={{
           name: "locationName",
           id: "locationName-select",
         }}
      >
        <option value=""> </option>
        {locationStore.locationsRegistry.map((item) => (
          <option key={item.id} value={item.name}>
            {item.name}
          </option>
        ))}
      </Select>
      {methods.formState.errors.locationName && <p style ={{ color:"red"}} > Locatie is verplicht...</p>}
    </FormControl>
  );
});
