import {
  makeAutoObservable,
  runInAction,
  _allowStateChangesInsideComputed,
} from "mobx";
import agent from "adapters/agent";
import { IDishAvailability } from "models/DishAvailability";
import { CartItem } from "models/Cart";
import DishesStore from "./dishesStore";
import { DeliveryForm, IDeliveryForm } from "models/Purchase";
import { DateTime } from "luxon";

export default class CartStore {
  private _dishesStore: DishesStore;
  private _cartRegistry = new Map<number, CartItem>();
  private _deliveryDetails: IDeliveryForm = new DeliveryForm();
  private _NLTime = DateTime.now()
  
  get now(){return this.NLTime};
  get nowDate(){return DateTime.fromISO(this.now.toISODate())};
  get nowTime(){return this.now.hour};
    
  get NLTime(){return this._NLTime};

  private set NLTime(date: DateTime){
    this._NLTime = date;
  }

  get todayAfterEleven(){
    return this.NLTime.set({hour: 11, minute: 0, second: 0, millisecond: 0})
  }

  syncTime() {
    agent.orders.utcTime().then(res => this.NLTime = DateTime.fromISO(res))
    .finally(() => console.log('synced time', this.NLTime.toISO()))
  }

  get deliveryDetails() {
    if (typeof window !== "undefined") {
      let details = window.localStorage.getItem("deliveryDetails");
      if (details) {
        let det = JSON.parse(details);        
        runInAction(() => {
          this._deliveryDetails = det;
        });
      }
    }
    return this._deliveryDetails
  }

  set deliveryDetails(data: IDeliveryForm) {    
    window.localStorage.setItem("deliveryDetails", JSON.stringify(data));
    this._deliveryDetails = data
  }

  constructor(dishesStore: DishesStore) {
    makeAutoObservable(this);
    this._dishesStore = dishesStore;
    this.getLocalStorage();
  }

  private setLocalStorage() {
    const cartMap = JSON.stringify([...this._cartRegistry]);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("cart", cartMap);
    }
  }



  getLocalStorage = () => {
    try {
      if (typeof window !== "undefined") {
        let cartItems = window.localStorage.getItem("cart");
        if (cartItems) {
          let cartItemMap = new Map<number, CartItem>(JSON.parse(cartItems));
            runInAction(() => {
              this._cartRegistry = cartItemMap;
              this._cartRegistry.forEach((element) => {
                //console.log(element)
                let cartDate = DateTime.fromISO(element.dish.date);
                //console.log(cartDate <= this.nowDate, cartDate < this.nowDate);
                if (cartDate < this.nowDate) {
                  //console.log("gisteren, dus verwijderd:", element.dish.dishName)
                  this.removeItem(element);
                }
                // TODAY!!!
                else if (cartDate.toISODate() == this.nowDate.toISODate() && this.nowTime >= 11) {
                  //console.log("na elf, verwijderd uit winkelmandje:", element.dish.dishName)
                  this.removeItem(element);
                }
                this.setLocalStorage();
              });
            });
          // });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  cleanCart = () => {
    this._cartRegistry= new Map<number, CartItem>();
    this.setLocalStorage();

   };

  loadingInitial = true;

  get cartRegistry() {
    return Array.from(this._cartRegistry.values()).sort(
      (a, b) => Date.parse(a.dish.date) - Date.parse(b.dish.date)
    );
  }

  get cartSize() {
    let quantity = 0;
    this._cartRegistry.forEach((item) => (quantity += item.quantity));
    return quantity;
  }

  get cartGroupedByDate() {
    // const now = new Date();
    // console.log (now.toLocaleDateString())
    return Object.entries(
      this.cartRegistry.reduce((cart, cartItem) => {
        const date = cartItem.dish.date;
        //const cartDate = new Date(date);
        //console.log(date)
        //if (cartDate.toLocaleDateString() >= now.toLocaleDateString()){
        cart[date] = cart[date] ? [...cart[date], cartItem] : [cartItem];
        //}
        return cart;
      }, {} as { [key: string]: CartItem[] })
    );
  }


  dailyTotal(cart: CartItem[]) {

    let total: number = 0;
    let delivery: number = 0;
    // this.utcTime().then(utcNow => {
      // let now = new Date(moment(utcNow).tz("Europe/Amsterdam").format().slice(0, -6))
      // let nowTime = now.getHours();
      cart.forEach((item) => {
        // let deliveryDate = new Date(item.dish.date);
        delivery = 2.5;
          // (deliveryDate.getDate() > now.getDate())
          //   ? 2.5
          //   : 0;
        // if (deliveryDate.getDate() > now.getDate()) {
          total += item.price * item.quantity;
        // }
        // if (deliveryDate.getDate() == now.getDate())
        //   if (nowTime > 11) { total += 0; }
        //   else { total += item.price * item.quantity; }
      });
      return total + delivery;
    // }).then(res => total);
    
  }

  get cartUniqueDates() {
    let dates: string[] = [];

    for (const item of this._cartRegistry) {
      if (!dates.includes(item[1].dish.date)) {
        dates.push(item[1].dish.date);
      }
    }
    return dates;
  }

  get cartPrice() {
    let total = 0;

    this._cartRegistry.forEach((item) => {
      let itemDate = DateTime.fromISO(item.dish.date);
      if (itemDate > this.nowDate)
        total += item.price * item.quantity;
      if (itemDate.toISODate() == this.nowDate.toISODate()){
        if (this.nowTime >= 11) {
          total += 0;
        }
        else {
          total += item.price * item.quantity;
        }
      }
    });
    // this._cartRegistry.forEach((item) => // (total += item.price * item.quantity));

    return total + this.calcDelivery();
  }

  private calcDelivery = () => {
    let days: string[] = [];
    let delivery = 0;
    this.cartRegistry.forEach((item) => {
      let increment = 0;
      let itemDate = DateTime.fromISO(item.dish.date);
      // console.log(this.now.toISO(), item.dish.date)
      if (!days.includes(item.dish.date)) {
        //console.log(itemDate.toISO(), this.nowDate.toISO())
        if (itemDate > this.nowDate){
          //console.log("jazeker")
          increment = 2.5;
        }
        if (itemDate.toISODate() == this.nowDate.toISODate() && this.nowTime < 11){
          //console.log("voor 11", itemDate.toISODate(),  this.nowDate.toISODate())
          increment = 2.5;
        }
        delivery += increment;
        days.push(item.dish.date);
      }
      // return;
    });
    //console.log('delivery', delivery)
    return delivery;
  };

  addItem(cartItem: CartItem) {
    const dish = this._dishesStore.selectedDish;
    const addedQuantity = cartItem.quantity;

    if (dish) {
      const newQuantity = dish.currentQuantity - addedQuantity;
      const updateDish: IDishAvailability = {
        id: dish.id,
        date: dish.date,
        currentQuantity: newQuantity,
        plannedQuantity: dish.plannedQuantity,
        dishId: dish.dishId,
      };

      try {
        this.setItem(cartItem);
        // this._dishesStore.updateDishQuantity(
        //   cartItem.dish,
        //   updateDish.currentQuantity
        // );
        // agent.dishAvailabilities.update(updateDish);
        this.setLocalStorage();
        // console.log("addedItem", this.cartRegistry);
      } catch (e) {
        console.log(e);
      }
    }
    //console.log("Item added", this.cartRegistry);
    return false;
  }

  updateItem(cartItem: CartItem, oldqty?: number, newqty?: number) {
    const dish = this._dishesStore.dishRegistryComplete.find(
      (item) => item.id == cartItem.dish.id
    );

    if (dish) {
      let itemQuantityDiff = 0;

      if (oldqty != undefined && newqty != undefined) {
        itemQuantityDiff = newqty - oldqty;
        cartItem.quantity = newqty;
      }

      // const updateDish: IDishAvailability = {
      //   id: dish.id,
      //   date: dish.date,
      //   currentQuantity: dish.currentQuantity - itemQuantityDiff,
      //   plannedQuantity: dish.plannedQuantity,
      //   dishId: dish.dishId,
      // };

      try {
        this.setItem(cartItem);
        // this._dishesStore.updateDishQuantity(
        //   cartItem.dish,
        //   updateDish.currentQuantity
        // );
        // agent.dishAvailabilities.update(updateDish);
        this.setLocalStorage();
      } catch (e) {
        console.log(e);
      }
    }
  }

  removeItem(cartItem: CartItem) {
    //console.log(this._dishesStore.dishRegistryComplete);
    // const dish = this._dishesStore.dishRegistryComplete.find(
    //   (item) => item.id == cartItem.dish.id
    // );

    // if (dish) {
      // const updateDish = {
      //   ...dish,
      //   currentQuantity: dish.currentQuantity + cartItem.quantity,
      // };

      try {
        this.deleteItem(cartItem.dish.id);
        // this._dishesStore.updateDishQuantity(
        //   cartItem.dish,
        //   updateDish.currentQuantity
        // );
        // agent.dishAvailabilities.update(updateDish);
        this.setLocalStorage();
      } catch (e) {
        console.log(e);
      }
    // }
  }

  private setItem(cartItem: CartItem) {
    this._cartRegistry.set(cartItem.dish.id, cartItem);
    // this.setLocalStorage();
  }

  private deleteItem(itemId: number) {
    this._cartRegistry.delete(itemId);
    // this.setLocalStorage();
  }

  private setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };
}
