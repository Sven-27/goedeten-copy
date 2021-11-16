import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Card,
  CardActionArea,
  CardActions,  
  CardMedia,
  TextField,  
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete"
import {ICook} from "models/Cook";
import { useFormContext } from 'react-hook-form';
import styles from "styles/admin/Dish.module.scss"


const noimage = '/assets/images/admin/noimageavailable2.png';

const useStyles = makeStyles((theme) => ({
  inputRoot: {  
    padding : "0px",
  },
  root: {
    width: '100%',
    maxWidth: "15rem",
    height: "auto",
    backgroundColor: theme.palette.background.paper,

  },
  
    
  media: {
    height: 240,
    objectFit: "contain"
  },
}));

interface DishCookProps {
  cook: ICook | undefined;
  cooks: ICook[];
  handleChangeCook: (value: ICook) => void;
}

export default function DishCook(props: DishCookProps) {
  const {cook, cooks, handleChangeCook} = props;
  const classes = useStyles();
  const methods = useFormContext();
  return(
    <Card  className={classes.root} >
      <CardActionArea>
        <CardMedia  
          className={classes.media}
          image={cook?.photo == "" ? noimage : cook!.photo}
          title={cook?.name}
        />
      </CardActionArea>
      <CardActions >
        <Autocomplete
         className={styles.selects}
          {...methods.register("cookId")}
          id="dishcook-combo-box"
          options={cooks}
          getOptionLabel={(option) => (option.name)}
          getOptionSelected={(option, value) => option.name === value.name}
          onChange={(e:any, newValue:ICook) => {handleChangeCook(newValue)}}
          disableClearable={true}           
          renderInput={(params) => <TextField {...params} label="Kok van dit gerecht"
          style= {{padding:"0"}}
           variant="outlined" />}
          value={cook}
        />
      </CardActions>
    </Card>
  );
}