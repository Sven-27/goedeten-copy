import { IAllergen } from "./Allergen";
import { IIngredient } from "./Ingredient";

export interface IDish {
  id: number
  name: string
  shortName: string
  photo: string
  description: string
  heating: string
  p1: string
  p2: string
  p3: string
  p4: string
  p5: string
  priceLarge: number
  cookId: number
  cookName: string
  cuisineId: number
  cuisineName:string
  dishCategoryId: number
  dishCategoryName: string
  vatCategoryId: number
  maxQuantity: number
  allergens: IAllergen[]
  ingredients:IIngredient[]
}

export class Dish implements IDish {
  id = 0
  name = ""
  shortName = ""
  photo = ""
  description = ""
  heating = ""
  p1 = ""
  p2 = ""
  p3 = ""
  p4 = ""
  p5 =""
  priceLarge = 0
  cookId = 0
  cookName = ""
  cuisineId = 0
  cuisineName = ""
  dishCategoryId = 0
  dishCategoryName = ""
  vatCategoryId = 2
  maxQuantity = 0
  allergens = []
  ingredients = []
}