import {Button, TextField} from "@material-ui/core"
import { SubmitHandler, useForm } from "react-hook-form"
import { IAllergen } from "models/Allergen";
import { useStore } from "contexts/admin/store";
import { observer } from "mobx-react"



export default observer(function AllergenDetails() {
    const {allergenStore} = useStore();
    const {btnCancel, handleChangeForm,
      handleCancel, handleCreate,handleSave} = allergenStore 


    const {register, handleSubmit,  formState: { errors } } = useForm<IAllergen>({
      mode:"onSubmit",
      })
      const onSubmit: SubmitHandler<IAllergen> = data => data;
    
    

  return (
    <div >
      <form onSubmit={handleSubmit(onSubmit)}
      >
        <div
          style={{
            display: "flex",
            padding: "10px",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
         
          <TextField
          {...register("name",{ 
            required: "Verplichte veld"})}    
            label="Naam"
            required
            id="name"
            
            value={allergenStore.dataRow.name}
            placeholder=" naam..."
            variant="outlined"
            size = "small"
            onChange={(e) => handleChangeForm(e)}
          />
        </div>
        <div
          style={{
            display: "flex",
            padding: "10px",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              width: "50%",
            }}
          >
             <Button
              //type="submit"
              size="small"
              id="createBtn"
              variant="contained"
              onClick={handleCreate}
              style={{ display: btnCancel ? "none" : "block" }}
            >
                Nieuw toevoegen
           
            </Button>
            <Button
              type="submit"
              size="small"
              id="saveBtn"
              variant="contained"
              style={{ display: btnCancel ? "block" : "none" }}
              onClick={()=>handleSave(allergenStore.dataRow)}
            >
                Opslaan
                   </Button>
          </div>

          <div
            style={{
              display: "flex",
              width: "30%",
              justifyContent: "end",
            }}
          >
            <div style={{ justifyContent: "align-left" }}>
              <Button              
                size="small"
                variant="contained"
                color="secondary"
                style={{ display: btnCancel ? "block" : "none" }}
                onClick={handleCancel}
              >
                Annuleren
              </Button>
            </div>
            
          </div>
        </div>

        {/* =======end of form */}
      </form>
    </div>
  )
})
