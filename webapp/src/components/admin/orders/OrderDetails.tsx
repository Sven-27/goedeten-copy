import { FormControl, InputLabel, OutlinedInput, TextField, Typography } from "@material-ui/core";
import React from "react";
import { useStore } from "contexts/admin/store";
import { observer } from "mobx-react";
import styles from "styles/admin/order/OrderDetailDialog.module.scss";
import { useFormContext } from "react-hook-form";
import { DateTime } from "luxon";

export default observer(function OrderDetails() {
  const { orderStore } = useStore();
  const methods = useFormContext();
  const data = orderStore.dataRow;
  return (
    <FormControl variant="outlined" className={styles.inputs}>
      <div className={styles.orderInfo}>
      <Typography>Ordernummer: {data.orderNumber}</Typography>
      <Typography>Orderdatum: {data.orderDate.split("T")[0]}</Typography>
      <Typography>Ordertijd: {DateTime.fromISO(data.orderDate+"Z").toLocaleString(DateTime.TIME_24_WITH_SECONDS)}</Typography>
      </div>
      <div className={styles.orderInfo}>
      <Typography>Totaalbedrag: €{data.totalAmount.toFixed(2)}</Typography>
      <Typography>Bedrag hoge BTW: €{data.highVatAmount.toFixed(2)}</Typography>
      <Typography>Bedrag lage BTW: €{data.lowVatAmount.toFixed(2)}</Typography>
      </div>
      <TextField
        {...methods.register("lastName", { required: true })}
        //required
        id="lastName"
        name="lastName"
        label="Achternaam"
        value={data.lastName}
        onChange={(e) => orderStore.handleChangeForm(e)}
        variant="outlined"
        size="small"
        placeholder="Achternaam"
        className={styles.textfield}
      />
      {methods.formState.errors.name && (
        <p style={{ color: "red" }}> Naam is verplicht...</p>
      )}
      <TextField
        {...methods.register("firstName", { required: true })}
        //required
        id="firstName"
        name="firstName"
        label="Voornaam"
        value={data.firstName}
        onChange={(e) => orderStore.handleChangeForm(e)}
        variant="outlined"
        size="small"
        placeholder="Voornaam"
        className={styles.textfield}
      />
      {methods.formState.errors.name && (
        <p style={{ color: "red" }}> Naam is verplicht...</p>
      )}
      <TextField
        {...methods.register("street", { required: true })}
        //required
        id="street"
        name="street"
        label="Straat"
        value={data.street}
        onChange={(e) => orderStore.handleChangeForm(e)}
        variant="outlined"
        size="small"
        placeholder="Straat"
        className={styles.textfield}
      />
      {methods.formState.errors.name && (
        <p style={{ color: "red" }}> Naam is verplicht...</p>
      )}
      <TextField
        {...methods.register("houseNumber", { required: true })}
        //required
        id="houseNumber"
        name="houseNumber"
        label="Huisnummer"
        value={data.houseNumber}
        onChange={(e) => orderStore.handleChangeForm(e)}
        variant="outlined"
        size="small"
        placeholder="Huisnummer"
        className={styles.textfield}
      />
      {methods.formState.errors.name && (
        <p style={{ color: "red" }}> Naam is verplicht...</p>
      )}
      <TextField
        {...methods.register("addHouseNumber")}
        id="addHouseNumber"
        name="addHouseNumber"
        label="Toevoeging huisnummer"
        value={data.addHouseNumber || " "}
        onChange={(e) => orderStore.handleChangeForm(e)}
        variant="outlined"
        size="small"
        placeholder="Toevoeging huisnummer"
        className={styles.textfield}
      />
      {methods.formState.errors.name && (
        <p style={{ color: "red" }}> Naam is verplicht...</p>
      )}
      <TextField
        {...methods.register("zipcode", { required: true })}
        //required
        id="zipcode"
        name="zipcode"
        label="Postcode"
        value={data.zipcode}
        onChange={(e) => orderStore.handleChangeForm(e)}
        variant="outlined"
        size="small"
        placeholder="Postcode"
        className={styles.textfield}
      />
      {methods.formState.errors.name && (
        <p style={{ color: "red" }}> Naam is verplicht...</p>
      )}
      <TextField
        {...methods.register("city", { required: true })}
        //required
        id="city"
        name="city"
        label="Woonplaats"
        value={data.city}
        onChange={(e) => orderStore.handleChangeForm(e)}
        variant="outlined"
        size="small"
        placeholder="Woonplaats"
        className={styles.textfield}
      />
      {methods.formState.errors.name && (
        <p style={{ color: "red" }}> Naam is verplicht...</p>
      )}
      <TextField
        {...methods.register("email", { required: true })}
        //required
        id="email"
        name="email"
        label="E-mail"
        value={data.email}
        onChange={(e) => orderStore.handleChangeForm(e)}
        variant="outlined"
        size="small"
        placeholder="E-mail"
        className={styles.textfield}
      />
      {methods.formState.errors.name && (
        <p style={{ color: "red" }}> Naam is verplicht...</p>
      )}
      <TextField
        {...methods.register("phone", { required: true })}
        //required
        id="phone"
        name="phone"
        label="Telefoonnummer"
        value={data.phone}
        onChange={(e) => orderStore.handleChangeForm(e)}
        variant="outlined"
        size="small"
        placeholder="Telefoonnummer"
        className={styles.textfield}
      />
      {methods.formState.errors.name && (
        <p style={{ color: "red" }}> Naam is verplicht...</p>
      )}
      <div></div>
      <TextField
        {...methods.register("details")}
        id="details"
        name="details"
        label="Opmerkingen order"
        value={data.details}
        onChange={(e) => orderStore.handleChangeForm(e)}
        variant="outlined"
        size="small"
        placeholder="Opmerkingen order"
        className={styles.textfield}
        multiline
      />
      <TextField
        {...methods.register("dietdetails")}
        id="dietdetails"
        name="dietdetails"
        label="Dieetwensen"
        value={data.dietdetails}
        onChange={(e) => orderStore.handleChangeForm(e)}
        variant="outlined"
        size="small"
        placeholder="Dieetwensen"
        className={styles.textfield}
        multiline
      />
    </FormControl>
  );
});
