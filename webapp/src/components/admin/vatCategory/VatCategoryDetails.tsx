import {
  Button,
  TextField,
  OutlinedInput,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import { SubmitHandler, useForm } from "react-hook-form";
import { IVatCategory } from "models/VatCategory";
import { useStore } from "contexts/admin/store";
import { observer } from "mobx-react";
import React from "react";
import NumberFormat from "react-number-format";

export default observer(function VatCategoryDetails() {
  const { vatCategoryStore } = useStore();
  const {
    btnCancel,
    handleChangeForm,
    handleCancel,
    handleSave,
    handleChangeValue,
  } = vatCategoryStore;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IVatCategory>({
    mode: "onSubmit",
  });
  const onSubmit: SubmitHandler<IVatCategory> = (data) => data;

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
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
              required: "Verplichte veld",
            })}
            label="Naam"
            required
            id="name"
            value={vatCategoryStore.dataRow.name}
            placeholder=" naam..."
            variant="outlined"
            onChange={(e) => handleChangeValue(e)}
            style={{ paddingRight: "8px" }}
          />
          <FormControl variant="outlined" size="medium">
            <InputLabel
              style={{
                backgroundColor: "beige",
                paddingLeft: "0.5rem",
                paddingRight: "0.5rem",
              }}
            >
              BTW waarde %
            </InputLabel>
            <NumberFormat
              {...register("value", {
                required: true,
              })}
              id="value"
              thousandSeparator={true}
              inputMode="numeric"
              value={vatCategoryStore.dataRow.value}
              customInput={OutlinedInput}
              onChange={(e) => handleChangeForm(e)}
            />
          </FormControl>
      
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
              size="small"
              id="createBtn"
              variant="contained"
              style={{ display: "none" }}
            >
              Nieuw toevoegen
            </Button>

            <Button
              type="submit"
              size="small"
              id="saveBtn"
              variant="contained"
              style={{ display: btnCancel ? "block" : "none" }}
              onClick={() => handleSave(vatCategoryStore.dataRow)}
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

      
      </form>
    </div>
  );
});
