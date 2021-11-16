import { IDailyDish } from "./DishAvailability";

export interface CartItem {
  dish: IDailyDish
  price: number
  quantity: number
}