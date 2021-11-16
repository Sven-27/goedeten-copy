export interface IIngredient {
  id: number;
  name: string;
}
export class Ingredient implements IIngredient {
  id = 0;
  name = "";
};
