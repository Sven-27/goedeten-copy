import { makeAutoObservable, runInAction } from "mobx";
import agent from "adapters/agent";
import { Dish, IDish } from "models/Dish";
import { DailyDish, IDailyDish } from "models/DishAvailability";
import DateStore from "./dateStore";
import { makePersistable } from "mobx-persist-store";

export default class DishesStore {
	private dateStore: DateStore;

	constructor(dateStore: DateStore) {
		makeAutoObservable(this);
		this.dateStore = dateStore;
		this.loadDishes();
		// makePersistable(
		//   this,
		//   {
		//     name: 'DishStore',
		//     properties:['selectedDish',],
		//     storage: window.localStorage,
		//   }
		// )
	}

	private _dishesRegistry = new Map<number, IDailyDish>();
	private _dishesDetailsRegistry = new Map<number, IDish>();
	private _selectedDishDetails: IDish = new Dish();
	private _selectedDish: IDailyDish | undefined = undefined;

	loadingInitial = true;

	private setLocalStorage() {
		let dish = JSON.stringify(this._selectedDish);
		if (typeof window !== "undefined") {
			window.localStorage.setItem("selectedDish", dish);
			//console.log("setLocalStorageDish");
		}
	}

	private getLocalStorage = () => {
		try {
			if (typeof window !== "undefined") {
				let dish = window.localStorage.getItem("selectedDish");
				if (dish) {
					let selDish = JSON.parse(dish);
					runInAction(() => {
						this.selectedDish = selDish;
					});
				}
			}
		} catch (error) {
			console.log(error);
		}
	};

	get dishRegistryFiltered() {
		const dishes = Array.from(this._dishesRegistry.values());
		return dishes.filter(
			(dish) => dish.date.split("T")[0] == this.dateStore.selectedDay.date2
		);
	}

	get dishRegistryComplete() {
		return Array.from(this._dishesRegistry.values());
	}

	loadDishes = async () => {
		// console.log("loading...")
		this.setLoadingInitial(true);
		try {
			const dishes = await agent.dishAvailabilities.getDishesList(
				this.dateStore.selectedDay.date2,
				14
			);
			dishes.forEach((dish) => this.setDish(dish));

			this.setLoadingInitial(false);
		} catch (error) {
			console.log(error);
			this.setLoadingInitial(false);
		}
	};

	loadDishDetails = async (id: number) => {
		let dish = this.getDishDetails(id);
		if (dish) {
			this._selectedDishDetails = dish;
			return dish;
		} else {
			this.loadingInitial = true;
			try {
				dish = await agent.dishes.details(id);
				this.setDishDetails(dish);
				runInAction(() => {
					if (dish) this._selectedDishDetails = dish;
				});
				this.setLoadingInitial(false);
				return dish;
			} catch (error) {
				console.log(error);
				this.setLoadingInitial(false);
			}
		}
	};

	updateDishQuantity(dailyDish: IDailyDish, quantity: number) {
		dailyDish.currentQuantity = quantity;
		this._dishesRegistry.set(dailyDish.id, dailyDish);
	}

	getTheDish(id: number) {
		this.loadDishDetails(id);
		return this._dishesDetailsRegistry.get(id);
	}

	get selectedDish() {
		this.getLocalStorage();
		return this._selectedDish;
	}

	set selectedDish(dish: IDailyDish | undefined) {
		//console.log("selectedDish", dish);
		this._selectedDish = dish;
		this.setLocalStorage();
	}

	private setDish = (dish: IDailyDish) => {
		this._dishesRegistry.set(dish.id, dish);
	};

	private getDish = (id: number) => {
		return this._dishesRegistry.get(id);
	};

	private setDishDetails = (dish: IDish) => {
		this._dishesDetailsRegistry.set(dish.id, dish);
	};

	private getDishDetails = (id: number) => {
		return this._dishesDetailsRegistry.get(id);
	};

	private setLoadingInitial = (state: boolean) => {
		this.loadingInitial = state;
	};
}
