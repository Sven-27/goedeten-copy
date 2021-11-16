import { FormControl, InputLabel, OutlinedInput } from "@material-ui/core";
import React from "react";
import { useStore } from "contexts/admin/store";
import { observer } from "mobx-react";
import { useFormContext } from "react-hook-form";



export default observer(function CookAddress (){
  const{cookStore} = useStore()
  const methods = useFormContext();
  return (    
      <FormControl  variant="outlined"  >
        <InputLabel >Address </InputLabel>
        <OutlinedInput
         {...methods.register("address")}
         id="address"
         value={cookStore.row.address}
         onChange={(e) => cookStore.handleChangeFormInput(e, e.target.value)}
         labelWidth={105}
         placeholder="address..."
        />
      </FormControl>
    
  )
})