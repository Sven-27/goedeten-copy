import React, { ReactNode, useReducer } from "react";
import axios from "axios";
import API from "constants"
import DishesReducer from "./DishesReducer";
import DishesContext from "./DishesContext";
import { GET_DISHES, GET_FILTERED } from "../types";
import moment from "moment-timezone"
import { IDailyDish } from "models/DishAvailability"


type Props = {
  children: ReactNode;
};

 const DishesState = ({children}: Props) => {
    let initialState = {
      dishes: [],
      filter: [],
    };
    
    const [state, dispatch] = useReducer(DishesReducer, initialState);

    console.log(state.dishes.date)

    const getDailyDishes = async () => {
      try{
        // Test Frank
      const today = moment().tz("Europe/Amsterdam").format("YYYY-MM-DD").toString()
      // let datesString = "2021-05-05"
      console.log(today);
      let res = await axios.get(`${API}api/DishAvailability/period/${today}/14`);
      let { data } = res; 
      console.log()
      dispatch({type: GET_DISHES, payload: data});
    } catch(error) {
      console.log(error);
    }
  };

  const getFilteredDishes = (date: IDailyDish) => {
     dispatch({type: GET_FILTERED, payload: date})
  }


    return (
      <DishesContext.Provider
        value={{
          dishes: state.dishes,
          filter: state.filter,
          getDailyDishes,
          getFilteredDishes,
        }}
      >
        {children}
      </DishesContext.Provider>
    );
  };  
 export default DishesState;
