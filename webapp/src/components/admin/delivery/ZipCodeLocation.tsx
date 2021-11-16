import React, { useEffect,} from 'react';
import Autocomplete from "@material-ui/lab/Autocomplete";
import {TextField} from "@material-ui/core";
import styles from "styles/admin/Delivery.module.scss"
import { useFormContext } from 'react-hook-form';
import { ILocation } from 'models/Location';

export interface ZipCodeLocationProps {
  locations: ILocation[];
  selectedLocation: ILocation | undefined;
  handleChangeLocation: (value: ILocation) => void;
}

export default function ZipCodeLocation (props: ZipCodeLocationProps) {
  const {locations, selectedLocation, handleChangeLocation} = props;
  const methods = useFormContext();
  return (
    <Autocomplete
      {...methods.register("locationName")}
      id="locationName"
      options={locations}
      getOptionLabel={(option) => (option.name)}
      getOptionSelected={(option, value) => option.name === value.name}
      onChange={(e:any, newValue:ILocation) => {handleChangeLocation(newValue)}}
      disableClearable={true}
      className={styles.autocomplete}
      renderInput={(params) => <TextField {...params} label="Locatie" variant="outlined" />}
      value={selectedLocation}
      size="small"
    />
  )
}