import React, {ReactNode, useReducer} from 'react'
import CooksReducer from "./CooksReducer";
import CooksContext from "./CooksContext";
import axios from "axios";
import API from "constants";
import { GET_COOKS } from "../types";

type Props = {
  children: ReactNode;
}

const CooksState = ({children}: Props) => {
  let initialState = {
    cooks: []
  }

  const [state, dispatch] = useReducer(CooksReducer, initialState)

  const getCooks = async () => {
    try {
    const res = await axios(`${API}api/cook`);
      const { data } = res;
      dispatch({type: GET_COOKS, payload: data})
    } catch (error){
      console.log(error)
    } 
  }

  return (
    <CooksContext.Provider
      value={{
        cooks: state.cooks,
        getCooks,
      }}
    >
      {children}
    </CooksContext.Provider>
  )
}

export default CooksState
