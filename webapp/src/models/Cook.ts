export interface ICook {
  id: number;
  name: string;
  description: string;
  motivation: string;
  specialization?: string;
  locationName?:string;
  photo: string;
  address: string;
  phoneNumber: string;
  email: string;
  active: boolean;
}

export class Cook implements ICook {
  id = 0;
  name = "";
  description = "";
  motivation = "";
  specialization = "";
  locationName = "";
  photo = "";
  address = "";
  phoneNumber = "";
  email = "";
  active = true;
}

export interface ICookPlanning{
  id: number;
  date: string;
  cookId:number;  
  available:boolean;
  name: string;
  locationName: string;
}

export interface ICookAvailability{
  id: number;
  date: string;
  cookId: number;
  available: boolean;
}

