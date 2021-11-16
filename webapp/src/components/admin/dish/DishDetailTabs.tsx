import React, { useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import Box from "@material-ui/core/Box";
import { IDish } from "models/Dish";
import { Button, Paper, TextField } from "@material-ui/core";
import DishIngredientsEdit from "./DishIngredientsEdit";
import { IIngredient } from "models/Ingredient";
import { useFormContext } from "react-hook-form";
import styles from "styles/admin/Dish.module.scss"

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    flexGrow: 0.5,
  },

  customTabRoot: {
    color: "#ffffdb",
    backgroundColor: "$darkgreen",
  },
  customTabIndicator: {
    backgroundColor: "#98bf82",
    height: "3px",
    top: "40px",
  },
}));

interface Props {
  dish: IDish;
  allIngredients: IIngredient[];
  ingredients: IIngredient[];
  handleDescriptionChange: (value: string) => void;
  handleHeatingChange: (value: string) => void;
  // setIngredients:(value: IIngredient[]) => void;
  handleiIngredientChange: (value: IIngredient[]) => void;
}

export default function DishDetailTabs({
  dish,
  allIngredients,
  ingredients,
  handleDescriptionChange,
  handleHeatingChange,
  // setIngredients,
  handleiIngredientChange,
}: Props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [openIngredients, setOpenIngredients] = useState(false);
  const methods = useFormContext();

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleCloseIngredients = (value: IIngredient[]) => {
    handleiIngredientChange(value);
    ingredients = value;
    setOpenIngredients(false);
  };
  const handleOpen = () => {
    setOpenIngredients(true);
  };

  return (
    <Paper className = {styles.paper}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          classes={{
            root: classes.customTabRoot,
            indicator: classes.customTabIndicator,
          }}
        >
          <Tab label="Omschrijving" {...a11yProps(0)} />
          <Tab label="Ingrediënten " {...a11yProps(1)} />
          <Tab label="Bereidings advies" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <TextField
          {...methods.register("description", { maxLength: 500 })}
          id="description"
          fullWidth={true}
          label="omschrijving"
          multiline
          rows={5}
          value={dish.description}
          onChange={(e) => handleDescriptionChange(e.target.value)}
          variant="outlined"
        />
        {methods.formState.errors.description &&
          methods.formState.errors.description.type === "maxLength" && (
            <p style={{ color: "red" }}>
              {" "}
              Mag niet langer dan 500 karakters zijn...
            </p>
          )}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TextField
          {...methods.register("ingredients")}
          id="ingredients"
          fullWidth={true}
          label="ingrediënten "
          multiline
          value={
            ingredients.length == 0
              ? "nog geen ingrediënten "
              : ingredients.map((item) => item.name).join(", ")
          }
          variant="outlined"
        />
        <div className="dish__row2__column2__small__container">
          <Button variant="contained" color="primary" onClick={handleOpen}>
            Ingredienten wijzigen
          </Button>
          <DishIngredientsEdit
            ingredients={ingredients}
            dishId={dish.id}
            open={openIngredients}
            onClose={handleCloseIngredients}
            allIngredients={allIngredients}
          />
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TextField
          {...methods.register("heating", { maxLength: 500 })}
          id="heating"
          fullWidth={true}
          label="bereidings advies"
          multiline
          rows={5}
          value={dish.heating}
          onChange={(e) => handleHeatingChange(e.target.value)}
          variant="outlined"
        />
        {methods.formState.errors.heating &&
          methods.formState.errors.heating.type === "maxLength" && (
            <p style={{ color: "red" }}>
              {" "}
              Mag niet langer dan 500 karakters zijn...
            </p>
          )}
      </TabPanel>
    </Paper>
  );
}
