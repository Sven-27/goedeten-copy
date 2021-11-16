import {GET_COOKS} from "../types"

const CooksReducer = (state: any, action: any) =>{
  const {payload, type} = action;

  switch(type){
    case GET_COOKS:
      return {
        ...state,
        cooks: payload
      };
    default:
      return state;
  }
}

export default CooksReducer;