import {GET_DISHES, GET_FILTERED} from "../types";

const DishesReducer = (state: any, action: any) => {
  const {payload, type} = action;

  switch(type){
    case GET_DISHES:
      return {
        ...state,
        dishes: payload,
      };
    case GET_FILTERED:
      return {
        ...state,
        filter: state.dishes.filter((item: any) => (
         item.date.substring(0, 10) === action.payload
        )),
      };

    default:
      return state;    
  }
} 

export default DishesReducer;