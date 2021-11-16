import { Checkbox,FormControlLabel } from "@material-ui/core";
import React from "react";
import { useStore } from "contexts/admin/store";
import { observer } from "mobx-react";
import { useFormContext } from "react-hook-form";



export default observer(function CookActive (){
  const{cookStore} = useStore()
  const methods = useFormContext();
  return (
    
    <FormControlLabel
    label="Actief"
    control={
      <Checkbox    
         {...methods.register("active")}       
        id="active"
        name="active"
        checked={cookStore.row.active}
        color="secondary"
        size="small"
        onChange={(e)=>cookStore.handleChangeFormCheckBox(e)}
      />
    }
    style={{ margin: "5px" }}
    labelPlacement="end"
  />
    
  )
})