import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { IDish } from "models/Dish";
import { Paper, TextField } from "@material-ui/core";
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
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
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
  handleChangeForm: (event: any) => void;
}

export default function DishDetailTabs({ dish, handleChangeForm }: Props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  const methods = useFormContext();

  return (
    <Paper className={styles.paper}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          classes={{
            root: classes.customTabRoot,
            indicator: classes.customTabIndicator,
          }}
        >
          <Tab label="Lokaal en seizoensgebonden" {...a11yProps(0)} />
          <Tab label="Gezonde aarde" {...a11yProps(1)} />
          <Tab label="Duurzaam voor je lijf" {...a11yProps(2)} />
          <Tab label="Van knol tot blad" {...a11yProps(3)} />
          <Tab label="Plantaardige eiwitten" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <TextField
          {...methods.register("p1", { maxLength: 300 })}
          id="p1"
          fullWidth={true}
          label="lokaal"
          multiline
          rows={5}
          value={dish.p1}
          onChange={(e) => handleChangeForm(e)}
          variant="outlined"
        />
        {methods.formState.errors.p1 &&
          methods.formState.errors.p1.type === "maxLength" && (
            <p style={{ color: "red" }}>
              {" "}
              Mag niet langer dan 300 karakters zijn...
            </p>
          )}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TextField
          {...methods.register("p2", { maxLength: 300 })}
          id="p2"
          fullWidth={true}
          label="seizoensgebonden"
          multiline
          rows={5}
          value={dish.p2}
          onChange={(e) => handleChangeForm(e)}
          variant="outlined"
        />
        {methods.formState.errors.p2 &&
          methods.formState.errors.p2.type === "maxLength" && (
            <p style={{ color: "red" }}>
              {" "}
              Mag niet langer dan 300 karakters zijn...
            </p>
          )}
      </TabPanel>

      <TabPanel value={value} index={2}>
        <TextField
          {...methods.register("p3", { maxLength: 300 })}
          id="p3"
          fullWidth={true}
          label="goed voor je lijf"
          multiline
          rows={5}
          value={dish.p3}
          onChange={(e) => handleChangeForm(e)}
          variant="outlined"
        />
        {methods.formState.errors.p3 &&
          methods.formState.errors.p3.type === "maxLength" && (
            <p style={{ color: "red" }}>
              {" "}
              Mag niet langer dan 300 karakters zijn...
            </p>
          )}
      </TabPanel>
      <TabPanel value={value} index={3}>
        <TextField
          {...methods.register("p4", { maxLength: 300 })}
          id="p4"
          fullWidth={true}
          label="van kop tot staart"
          multiline
          rows={5}
          value={dish.p4}
          onChange={(e) => handleChangeForm(e)}
          variant="outlined"
        />
        {methods.formState.errors.p4 &&
          methods.formState.errors.p4.type === "maxLength" && (
            <p style={{ color: "red" }}>
              {" "}
              Mag niet langer dan 300 karakters zijn...
            </p>
          )}
      </TabPanel>
      <TabPanel value={value} index={4}>
        <TextField
          {...methods.register("p5", { maxLength: 300 })}
          id="p5"
          fullWidth={true}
          label="plantaardige eiwitten"
          multiline
          rows={5}
          value={dish.p5}
          onChange={(e) => handleChangeForm(e)}
          variant="outlined"
        />
        {methods.formState.errors.p5 &&
          methods.formState.errors.p5.type === "maxLength" && (
            <p style={{ color: "red" }}>
              {" "}
              Mag niet langer dan 300 karakters zijn...
            </p>
          )}
      </TabPanel>
    </Paper>
  );
}
