import * as React from "react";
import TextField from "@material-ui/core/TextField";
import { FormControlLabel, Button, Checkbox } from "@material-ui/core";
import { IZipcode } from "models/Zipcode";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { observer } from "mobx-react";
import { ILocation } from "models/Location";
import { useStore } from "contexts/admin/store";
import styles from "styles/admin/Delivery.module.scss"
import dynamic from "next/dynamic"
const ZipCodeLocation = dynamic(() => import("./ZipCodeLocation"), { ssr: false })

interface Props {
  zip: IZipcode;
  handleChangeForm: (event: any) => void;
  handleChangeLocation: (value: ILocation) => void;
  btnCancel: boolean;
  handleCancel: () => void;
  handleCreate: () => void;
  handleSave: (zip: IZipcode) => void;
}

export default observer( function ZipCodeDetails({
  zip,
  btnCancel,
  handleChangeForm,
  handleChangeLocation,
  handleCancel,
  handleCreate,
  handleSave,
}: Props) {

  const methods = useForm<IZipcode>({
    mode: "onSubmit",
    // defaultValues: { name: "blabla", shortName: "blashortname" },
  });

  const {
    register,
    handleSubmit,
    reset,setValue,
    formState: { errors },
  } = methods;  

  // const {
  //   register,
  //   handleSubmit,    
  //   formState: { errors },
  // } = useForm<IZipcode>({
  //   mode: "onSubmit",
  // });
  const onSubmit: SubmitHandler<IZipcode> = (data) => console.log(data);
  const { locationStore } = useStore();
  const newLocation : ILocation = {id: 0, name: "",email:""};
  const locationOptions: ILocation[] = [newLocation].concat(locationStore.locationsRegistry)

  
  return (
    <div>
      <FormProvider {...methods}>
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
            {...register("zip", {
              required: "Verplicht..",
              pattern: /^[1-9][0-9]{3}$/i,
            })}
            id="zip"
            name="zip"
            label="Postcode"
            value={zip.zip}
            inputProps={{
              pattern: {
                value: "/^[1-9][0-9]{3}$/i",
                message: "voer een geldige 4-cijferige postcode in",
              },
              minLength: 4,
              maxLength: 4,
            }}
            onChange={(e) => handleChangeForm(e)}
            variant="outlined"
            size="small"
            placeholder="1111"
            style={{ margin: "10px" }}
          />

          {/* <TextField
            {...register("locationName", {
              required: "Verplicht",
            })}
            label="Locatie"
            required
            id="locationName"
            value={zip.locationName}
            placeholder="Locatie..."
            variant="outlined"
            size="small"
            onChange={(e) => handleChangeForm(e)}
            style={{ margin: "10px" }}
          /> */}

          <ZipCodeLocation
            locations={locationOptions}
            selectedLocation={locationOptions.find(location => location.name === zip.locationName)}
            handleChangeLocation={handleChangeLocation}
          />


          <FormControlLabel
            label="Actief"
            control={
              <Checkbox
                {...register("active")}
                id="active"
                name="active"
                checked={zip.active}
                color="secondary"
                size="small"
                onChange={handleChangeForm}
              />
            }
            style={{ margin: "5px" }}
            labelPlacement="end"
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
              width: "30%",
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
              onClick={() => handleSave(zip)}
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
      </FormProvider>
    </div>
  );
});
