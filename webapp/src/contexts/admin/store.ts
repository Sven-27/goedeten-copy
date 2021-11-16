import { createContext, useContext } from "react";
import { enableStaticRendering } from "mobx-react";
import CommonStore from "./commonStore";
import CookStore from "./cookStore";
import LocationStore from "./locationStore";
import PlanningStore from "./planningStore";
import UserStore from "./userStore";
import ZipcodeStore  from "./zipcodeStore";
import CustomerStore from "./customerStore";
import DishCategoryStore from "./dishCategoryStore";
import IngredientStore from "./ingredientStore";
import AllergenStore from "./allergenStore";
import VatCategoryStore from "./vatCategoryStore";
import OrderStore from "./orderStore";

enableStaticRendering(typeof window === "undefined");


interface Store {
  zipcodeStore: ZipcodeStore,
  locationStore:LocationStore,
  cookStore:CookStore,
  commonStore:CommonStore,
  userStore:UserStore,  
  planningStore:PlanningStore,
  customerStore:CustomerStore,
  dishCategoryStore: DishCategoryStore,
  ingredientStore:IngredientStore,
  allergenStore:AllergenStore,
  vatCategoryStore:VatCategoryStore,
  orderStore:OrderStore
}


export const store: Store = {
  zipcodeStore: new ZipcodeStore(),
  locationStore:new LocationStore(),
  cookStore:new CookStore(),
  commonStore:new CommonStore(),
  userStore: new UserStore(),
  planningStore: new PlanningStore(),
  customerStore: new CustomerStore(),
  dishCategoryStore: new DishCategoryStore(),
  ingredientStore: new IngredientStore(),
  allergenStore: new AllergenStore(),
  vatCategoryStore: new VatCategoryStore(),
  orderStore: new OrderStore(),
}

const StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}