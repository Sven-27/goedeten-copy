import { CartItem } from "./Cart";
import { IDish } from "./Dish";
import { IVatCategory } from "./VatCategory";

export interface IDeliveryForm {
	lastName: string;
	firstName: string;
	street: string;
	houseNumber?: number;
	addHouseNumber: string;
	zipcode: string;
	city: string;
	email: string;
	phone: string;
	details: string;
  dietDetails: string;
}
export class DeliveryForm implements IDeliveryForm {
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
  dietDetails = "";
}
export interface IOrderEasy extends IDeliveryForm {
  id: number;
  orderDate: string;
  totalAmount: number;
  orderStatus: string;
  cart: CartItem[];
}



export class OrderEasy implements IOrderEasy {
  id = 0;
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
  dietDetails = "";
  orderDate = "";
  totalAmount = 0;
  orderStatus = "";
  cart: CartItem[] = [];
}
export interface ICartDishes {
	id: number;
	dishName: string;
	cookName: string;
	quantity: number;
	price: number;
	deliveryId: number;
	vatCategory: IVatCategory;
  }
  
  export interface IDelivery {
	id: number;
	name: string;
	deliveryDate: string;
	deliveryPrice: number;
	totalPrice: number;
	orderId: number;
	dishOrders: ICartDishes[];
  }
  export interface IOrder extends IDeliveryForm {
	id: number;
	orderNumber: string;
	orderDate: string;
	totalAmount: number;
	lowVatAmount:number;
	HightVatAmount:number;
	orderStatus: string;
	deliveries: IDelivery[];
  }
export interface IRedirectResult {
    permanent: boolean;
    preserveMethod: boolean;
    url: string;
    urlHelper?: any;
}


