export interface IAllergen {
    id?: number;
    name: string;
}

export class Allergen implements IAllergen {
    id = 0;
    name = "";
  };