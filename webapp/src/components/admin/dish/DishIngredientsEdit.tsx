import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import DialogTitle from "@material-ui/core/DialogTitle"
import Dialog from "@material-ui/core/Dialog"
import {
  Button,
  Checkbox,
  createStyles,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Theme,
} from "@material-ui/core"
import { IIngredient } from "models/Ingredient"



interface Props {
  open: boolean;
  dishId: number;
  allIngredients:IIngredient[];
  ingredients: IIngredient[];
  onClose: (value: IIngredient[]) => void;

}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: "auto",
      width: '100%',

     backgroundColor: theme.palette.background.paper,
    },
    paper: {
      width: 200,
      height: "auto",
      overflow: "auto",
    },
    button: {
      margin: theme.spacing(0.5, 0),
    },
  })
)
function not(a: IIngredient[], b:IIngredient[]) {
  return a.filter((value) => b.indexOf(value) === -1)
}

function intersection(a:IIngredient[], b: IIngredient[]) {
  return a.filter((value) => b.indexOf(value) !== -1)
}

export default function DishIngredientsEdit({
  open,
  ingredients,
  dishId,
  onClose,
  allIngredients,

}: Props) {

  const classes = useStyles()
 
  const handleSave = () => {
   
    onClose(left)
  }


  const [checked, setChecked] = useState<IIngredient[]>([])
  const [left, setLeft] = useState<IIngredient[]>(ingredients)
  const [right, setRight] = useState<IIngredient[]>
  (allIngredients.filter((x) => !ingredients.some((y)=>(y.id==x.id))))

  const leftChecked = intersection(checked, left)
  const rightChecked = intersection(checked, right)

  const handleToggle = (value:IIngredient) => () => {
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    setChecked(newChecked)
  }
  


  const handleAllRight = () => {
    setRight(right.concat(left))
    setLeft([])
  }

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked))
    setLeft(not(left, leftChecked))
    setChecked(not(checked, leftChecked))
  }

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked))
    setRight(not(right, rightChecked))
    setChecked(not(checked, rightChecked))
  }

  const handleAllLeft = () => {
    setLeft(left.concat(right))
    setRight([])
  }

  const customList = (ingredients: IIngredient[], title: String) => (
    <Paper className={classes.paper}>
      <p style={{fontSize: "10px", textAlign: "center"}}>{title} </p>
      <List dense component="div" role="list">
        {ingredients.map((item) => {
          const labelId = `transfer-list-item-${item.id}-label`

          return (
            <ListItem
              key={item.id}
              role="listitem"
              button
              onClick={handleToggle(item)}
            >
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(item) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={item.name} />
            </ListItem>
          )
        })}
        <ListItem />
      </List>
    </Paper>
  )
  return (
    <Dialog
    open={open} 
    onClose={(event, reason) => {
      if (reason !== 'backdropClick') {          
      }
  }}    >
      <DialogTitle id="dish-allergens-dialog-title">
        Kies ingrediënten in gerecht
      </DialogTitle>
      <Grid
        container
        spacing={2}
        justify="center"
        alignItems="center"
        className={classes.root}
      >
        <Grid item>{customList(left,"huidige selectie")}</Grid>
        <Grid item>
          <Grid container direction="column" alignItems="center">
            <Button
              variant="outlined"
              size="small"
              className={classes.button}
              onClick={handleAllRight}
              disabled={left.length === 0}
              aria-label="move all right"
            >
              ≫
            </Button>
            <Button
              variant="outlined"
              size="small"
              className={classes.button}
              onClick={handleCheckedRight}
              disabled={leftChecked.length === 0}
              aria-label="move selected right"
            >
              &gt;
            </Button>
            <Button
              variant="outlined"
              size="small"
              className={classes.button}
              onClick={handleCheckedLeft}
              disabled={rightChecked.length === 0}
              aria-label="move selected left"
            >
              &lt;
            </Button>
            <Button
              variant="outlined"
              size="small"
              className={classes.button}
              onClick={handleAllLeft}
              disabled={right.length === 0}
              aria-label="move all left"
            >
              ≪
            </Button>
          </Grid>
        </Grid>
        <Grid item>{customList(right,"nog toe te voegen")}</Grid>
      </Grid>

      <Button variant="contained" color="primary" onClick={handleSave}>
        Opslaan
      </Button>
    </Dialog>
  )
}
