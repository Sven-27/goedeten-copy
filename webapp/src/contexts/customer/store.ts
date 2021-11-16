import { createContext, useContext } from "react";
import { enableStaticRendering } from "mobx-react";
import DishesStore from "./dishesStore";
import CooksStore from "./cooksStore"
import DateStore from "./dateStore"
import CartStore from "./cartStore";
import ZipCodeStore from "./zipcodeStore";
 
enableStaticRendering(typeof window === "undefined");

interface Store {
  dateStore: DateStore
  dishesStore: DishesStore
  cooksStore: CooksStore
  cartStore: CartStore
  zipcodeStore: ZipCodeStore

}

function store(): Store {
  
  const dateStore = new DateStore()
  const dishesStore = new DishesStore(dateStore)
  const cooksStore = new CooksStore(dateStore)
  const cartStore = new CartStore(dishesStore)
  const zipcodeStore = new ZipCodeStore()

  return {
    dateStore,
    dishesStore,
    cooksStore,
    cartStore,
    zipcodeStore,
  }
}

const StoreContext = createContext(store());

export function useStore() {
  return useContext(StoreContext);
}