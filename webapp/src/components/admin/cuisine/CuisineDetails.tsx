import * as React from "react"
import { Button, TextField } from "@material-ui/core"
import { SubmitHandler, useForm } from "react-hook-form"
import { ICuisine } from "models/Cuisine"

interface Props {
  dataRow: ICuisine;
  handleChangeForm: (event: any) => void;
  btnCancel: boolean;
  handleCancel: () => void;
  handleCreate: () => void;
  handleSave: (value: ICuisine) => void;

}

export default function CuisineDetails({ dataRow, btnCancel, handleChangeForm,
  handleCancel, handleCreate, handleSave }: Props) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<ICuisine>({
    mode: "onSubmit",
  })
  const onSubmit: SubmitHandler<ICuisine> = data => console.log(data);



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
            {...register("name", {
              required: "Verplichte veld"
            })}
            label="Naam"
            required
            id="name"

            value={dataRow.name}
            placeholder=" naam..."
            variant="outlined"
            size="small"
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
              onClick={() => handleSave(dataRow)}
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
}
