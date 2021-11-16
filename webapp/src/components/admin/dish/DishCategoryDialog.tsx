import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { blue } from '@material-ui/core/colors';
import {DishCategoryTile} from "./DishCategoryTileData";
import LocalDiningIcon from "@material-ui/icons/LocalDining";

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  
});
export interface DishCategoryDialogProps {
  open: boolean;
  onClose: (value: DishCategoryTile) => void;
  selectedCategory: DishCategoryTile;
  categories: DishCategoryTile[];
}
export default function DishCategoryDialog(props: DishCategoryDialogProps) {
  const classes = useStyles();
  const { open, onClose, selectedCategory, categories } = props;
  const handleClose = () => {
    onClose(selectedCategory);
  };
  const handleListItemClick = (value: DishCategoryTile) => {
    onClose(value);
  };
  return (
    <Dialog 
      //onClose={handleClose} 
            aria-labelledby="dishcategory-dialog-title" 
            open={open}
            onClose={(event, reason) => {
              if (reason !== 'backdropClick') {
                handleClose
              }
          }}
            >
      <DialogTitle id="dishcategory-dialog-title">Kies gerechten filter:</DialogTitle>
      <List  >
        {categories.map((tile) => (
          <ListItem  key={tile.id} button onClick={() => handleListItemClick(tile)}  >
            <ListItemAvatar >
              <Avatar className={classes.avatar}>
                <LocalDiningIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={tile.title} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}