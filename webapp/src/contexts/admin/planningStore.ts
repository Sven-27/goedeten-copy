import { makeAutoObservable, runInAction } from "mobx";
import agent from "adapters/agent";
import { ICookPlanning } from "models/Cook";
import dates from "data/datesPlanning";
import { IDailyDish, IDishPlanning } from "models/DishAvailability";

export default class PlanningStore {
  constructor() {
    makeAutoObservable(this);
    
  }

  get thisYear() {
    return parseInt(new Date().toISOString().split("-")[0]);
  }
  get thisMonth() {
    return parseInt(new Date().toISOString().split("-")[1]);
  }
  get thisDay() {
    return parseInt(new Date().toISOString().split("-")[2]);
  }
  get todayISO() {
    return new Date().toISOString().split("T")[0];
  }
  years = [
    (this.thisYear - 1).toString(),
    this.thisYear.toString(),
    (this.thisYear + 1).toString(),
  ];
  private _selectedDay: string | undefined = this.todayISO;
  private _selectedMonth: number = 0;
  private _selectedYear: number = parseInt(this.years[1]);
  private _planningFilter: number = 0;
  private _selectedCook: ICookPlanning | undefined = undefined;
  private _selectedDish: IDishPlanning | undefined = undefined;

  get days() {
    if (this.planningFilter) {
      return dates.planningPerMonth(
        this._selectedMonth + 1,
        this._selectedYear
      );
    } else {
      return dates.planningPerDays(30);
    }
  }

  get selectedYear() {
    return this._selectedYear.toString();
  }
  set selectedYear(year: string) {
    this._selectedYear = parseInt(year);
  }

  get selectedMonth() {
    return dates.Months[this._selectedMonth];
  }
  set selectedMonth(month: string) {
    this._selectedMonth = dates.Months.indexOf(month);
  }

  get selectedDay() {
    return this._selectedDay;
  }
  set selectedDay(day: string | undefined) {
    this._selectedDay = day;
  }

  get planningFilter() {
    return this._planningFilter;
  }
  set planningFilter(filter: number) {
    this._planningFilter = filter;
  }

  get selectedCook() {
    return this._selectedCook;
  }
  set selectedCook(cook: ICookPlanning | undefined) {
    this._selectedCook = cook;
  }

  get selectedDish() {
    return this._selectedDish;
  }

  set selectedDish(item: IDishPlanning | undefined) {
    this._selectedDish = item;
  }


  private _selectedLocation: string | undefined = undefined;
  get selectedLocation() {
    return this._selectedLocation;
  }
  set selectedLocation(location: string | undefined) {
    this._selectedLocation = location;
  }

  private _planningCooks: ICookPlanning[] = [];
  get planningCooks() {
    return this._planningCooks;
  }
  set planningCooks(planning: ICookPlanning[]) {
    this._planningCooks = planning;
  }

  loadCooksList = async () => {
    try {
      this.selectedDay
        ? (this.planningCooks = await agent.cookAvailabilities.getPlanning(
            this.selectedDay
          ))
        : [];        
    } catch (e) {
      console.log(e);
    }
  };


  get cookListFiltered(){
    if (!this.selectedLocation) return undefined;
    else return this.planningCooks.filter(cook => cook.locationName == this.selectedLocation)
  }

   private _planningDishesPerCook: IDishPlanning[] = [];
   get planningDishesPerCook() {
     return this._planningDishesPerCook;
  }
  set planningDishesPerCook(planning: IDishPlanning[]) {
    this._planningDishesPerCook = planning;
  }

  loadDishesListPerCook = async () => {
    try {
      this.selectedCook && this.selectedDay
        ? (this.planningDishesPerCook = await agent.dishAvailabilities.getPlanning(
            this.selectedDay, this.selectedCook.cookId)
          )
        : [];
    } catch (e) {
      console.log(e);
    }
  };

  private _planningDishes: IDailyDish[] = [];
  get planningDishes(){
    return this._planningDishes;
  }
  set planningDishes(planning: IDailyDish[] ){
    this._planningDishes = planning;
  }

  loadDishesPlanning = async () => {
    try {
      this.selectedDay
      ? this.planningDishes = await agent.dishAvailabilities.getDishesList(this.selectedDay, 1)
      : this.planningDishes = [];          
    
    } catch (e) {
      console.log(e)
    }
  }

  enableCook = async (value: ICookPlanning) => {
    try {
      await agent.cookAvailabilities.create(value)
      await this.loadCooksList()
      runInAction(()=>{
        this.selectedCook = value;
      })
    } catch (error) {
      console.log(error)
    }
  }
  
  disableCook = async (value: ICookPlanning) =>{
    try {
     
      await agent.cookAvailabilities.delete(value.id);
      await this.loadCooksList()
      runInAction(()=>{
        this.selectedCook = value;
      })

    } catch (error) {
      console.log(error)
    }
  }
  
  enableDish = async (value: IDishPlanning) => {
    try {
      console.log(value);
      await agent.dishAvailabilities.create(value)
      await this.loadDishesListPerCook()
    } catch (error) {
      console.log(error)
    }
  }

  updateDish = async (value: IDishPlanning) => {
    try {
      await agent.dishAvailabilities.updatePlanning(value)
      await this.loadDishesListPerCook()
    } catch (error) {
      console.log(error)
    }
  }
  
  disableDish = async (id: number) =>{
    try {
      await agent.dishAvailabilities.delete(id);
      await this.loadDishesListPerCook()
    } catch (error) {
      console.log(error)
    }
  }
}
