import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import CommentIcon from "@material-ui/icons/Comment";
import { IAllergen } from "models/Allergen";
import agent from "adapters/agent";
import { Button } from "@material-ui/core";
import { useFormContext } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export interface DishAllergensEditProps {
  open: boolean;
  dishId: number;
  allergens: IAllergen[];
  setAllergens: (value: IAllergen[]) => void;
  onClose: (value: IAllergen[]) => void;
}

export default function DishAllergensEdit(props: DishAllergensEditProps) {
  const { open, allergens, setAllergens, dishId, onClose } = props;
  const [listAllergens, setListAllergens] = useState<IAllergen[]>([]);
  const classes = useStyles();
  const methods = useFormContext();

  const getAllergenList = async () =>
    setListAllergens(await agent.allergens.list());

  React.useEffect(() => {
    void getAllergenList();
  }, [allergens]);

  const handleToggle = (value: IAllergen) => () => {
    const currentIndex = allergens.findIndex((item) => item.id == value.id);
    const newChecked = [...allergens];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setAllergens(newChecked);
  };

  const handleClose = () => {
    onClose(allergens);
  };

  const handleSave = () => {
    let save: number[] = [];
    allergens.forEach((item) => {
      if (item.id != undefined) {
        save.push(item.id);
      }
    });
    try {
      //void agent.dishes.setAllergens(dishId, save)
    } catch (e) {
      console.log(e);
    }
    onClose(allergens);
  };

  return (
    <Dialog
      open={open}
      onClose={(event, reason) => {
        if (reason !== "backdropClick") {
          handleClose;
        }
      }}
    >
      <DialogTitle id="dish-allergens-dialog-title">
        Kies allergenen in gerecht
      </DialogTitle>
      <List
        dense={true}
        className={classes.root}
        {...methods.register("allergens")}
      >
        {listAllergens.map((value) => {
          const labelId = `checkbox-list-label-${value}`;

          return (
            <ListItem
              key={value.id}
              role={undefined}
              dense
              button
              onClick={handleToggle(value)}
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={allergens.some((item) => item.id == value.id)}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={value.name} />
            </ListItem>
          );
        })}
      </List>
      <Button variant="contained" color="primary" onClick={() => handleSave()}>
        Opslaan
      </Button>
    </Dialog>
  );
}
