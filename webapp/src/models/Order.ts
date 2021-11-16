import { CartItem } from "./Cart";
import { IDish } from "./Dish";
import { IVatCategory } from "./VatCategory";
import { IDelivery } from "./Purchase";

export interface IOrder {
  id: number;
  orderNumber: string;
  orderDate: string;
  lowVatAmount: number;
  highVatAmount: number;
  totalAmount: number;
  deliveries: IDelivery[];
  transactions: ITransaction[];
  status: OrderStatus;
	lastName: string;
	firstName: string;
	street: string;
	houseNumber: number;
	addHouseNumber: string;
	zipcode: string;
	city: string;
	email: string;
	phone: string;
	details: string;
  dietdetails: string;
}

export interface IStatus {
  id: number,
  status: number
}

export enum OrderStatus {
  "Nieuw" = 0,
  "Betaling wordt verwerkt",
  "Betaling mislukt of afgebroken",
  "Betaling gelukt",
  "Verzonden",
  "Afgeleverd"
}

export interface ITransaction {
  id: number;
  orderId: number;
  transactionId: string;
  transactionStatus: string;
  transactionDateTime: string;
}


export class Order implements IOrder {
  id = 0;
  orderNumber = "";
  orderDate = "";
  lowVatAmount = 0;
  highVatAmount = 0;
  totalAmount = 0;
  deliveries = [];
  transactions = [];
  status = 0;
  lastName = "";
  firstName = "";
  street = "";
  houseNumber = 0;
  addHouseNumber = "";
  zipcode = "";
  city = "";
  email = "";
  phone = "";
  details = "";
  dietdetails = "";
}





