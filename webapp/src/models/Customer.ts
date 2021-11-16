export interface ICustomer {
  id: number;
  email: string;
  zipcode: string;
  isDeliveryRange: boolean;
  date: string;
}
export class Customer implements ICustomer {
  id = 0;
  email = "";
  zipcode = "";
  isDeliveryRange = false;
  date = "";
};