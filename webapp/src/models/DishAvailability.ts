export interface IDishAvailability {
   id: number;
   date: string;
   currentQuantity: number;
   plannedQuantity: number;
   dishId: number;
}

export  interface IDishPlanning{
  id : number; 
  date?: string;
  currentQuantity: number;  
  plannedQuantity: number;
  dishId: number;
  dishName: string;
  dishCategory:string;
  cookId: number;
  planned: boolean
}


export interface IDailyDish {
   id: number;
   date: string;
   currentQuantity: number;
   plannedQuantity:number;
   soldQuantity:number;
   dishId: number;
   dishName: string;
   dishShortName: string;
   dishDescription: string;
   dishCuisine: string;
   dishPhoto: string;
   cookId: number;
   cookName: string;
   cookPhoto: string;
   locationName: string;
   dishCategoryName:string;
 }

 export class DailyDish implements IDailyDish {
   id = 0;
   date = "";
   currentQuantity = 0;
   plannedQuantity = 0;
   soldQuantity = 0;
   dishId = 0;
   dishName = "";
   dishShortName = "";
   dishDescription = "";
   dishCuisine = "";
   dishPhoto = "";
   cookId = 0;
   cookName = "";
   cookPhoto = "";
   locationName = "";
   dishCategoryName="";
 }
 
