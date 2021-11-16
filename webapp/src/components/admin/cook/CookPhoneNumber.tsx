import { FormControl, InputLabel, OutlinedInput } from "@material-ui/core";
import React from "react";
import { useStore } from "contexts/admin/store";
import { observer } from "mobx-react";
import styles from "styles/admin/CookEdit.module.scss";
import { useFormContext } from "react-hook-form";



export default observer(function CookPhoneNumber (){
  const{cookStore} = useStore()
  const methods = useFormContext();
  return(    
      <FormControl  variant="outlined"  className={styles.inputs}>
        <InputLabel >Telefoon</InputLabel>
        <OutlinedInput
        {...methods.register("phoneNumber")}
         id="phoneNumber"
         value={cookStore.row.phoneNumber}
         labelWidth={105}
         onChange={(e) => cookStore.handleChangeFormInput(e, e.target.value)}
         placeholder="telefoon nummer..."
        />
      </FormControl>   
  )
})