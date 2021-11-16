export interface ILocation {
  id: number;
  name: string;
  email: string;
}
export class Location implements ILocation {
  id = 0;
  name = "";
  email = "";
};
