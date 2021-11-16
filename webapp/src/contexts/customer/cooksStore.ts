import { makeAutoObservable, runInAction } from "mobx";
import agent from "adapters/agent";
import { ICook, ICookPlanning } from "models/Cook";
import DateStore from "./dateStore";

export default class CooksStore {

  private dateStore: DateStore;
  constructor(dateStore: DateStore){
    makeAutoObservable(this);
    this.dateStore = dateStore;
    this.loadPlannedCooks()
  }

  private _cooksRegistry = new Map<number, ICook>();
  private _cooksRegistryByDate = new Map<number, ICook>();
  private _selectedCook: ICook | undefined = undefined;
  
  loadingInitial = true;
  private setLocalStorage() {
		let cook = JSON.stringify(this._selectedCook);
		if (typeof window !== "undefined") {
			window.localStorage.setItem("selectedCook", cook);			
		}
	}
  private getLocalStorage = () => {
		try {
			if (typeof window !== "undefined") {
				let cook = window.localStorage.getItem("selectedCook");
				if (cook) {
					let selCook = JSON.parse(cook);
					runInAction(() => {
						this.selectedCook = selCook;
					});
				}
			}
		} catch (error) {
			console.log(error);
		}
	};

  get cooksRegistry() {
    return Array.from(this._cooksRegistry.values())
  }
  get cooksRegistryByDate() {
    return Array.from(this._cooksRegistryByDate.values())
  }

  getCook(id: number) {
    return this._cooksRegistry.get(id)
  }
  
  get selectedCook(){
    this.getLocalStorage();
    return this._selectedCook;
  }

  set selectedCook(cook: ICook | undefined){    
    this._selectedCook = cook;
    this.setLocalStorage();
  }

  loadCooks = async () => {
    this.setLoadingInitial(true);
    try {
      const cooks = await agent.cooks.list();
      cooks.forEach(cook => this.setCook(cook))                  
      this.setLoadingInitial(false);
    } catch (error) {
      console.log(error);
      this.setLoadingInitial(false);
    }
  }

  loadPlannedCooks = async () => {    
    this.setLoadingInitial(true);
    try {
      this.loadCooks()
      this._cooksRegistryByDate = new Map<number, ICook>();
      const cooksByDate = await agent.cookAvailabilities.getPlanning(this.dateStore.selectedDay.date2);
      cooksByDate.forEach(cook => this.setCookByDate(cook))                  
      this.setLoadingInitial(false);
    } catch (error) {
      console.log(error);
      this.setLoadingInitial(false);
    }
  }

  private setCook(cook: ICook){
    this._cooksRegistry.set(cook.id, cook)
  }
  private setCookByDate(cook: ICookPlanning){
    if( cook.available == true){
      let obj = this.cooksRegistry.find(o => o.id === cook.cookId);
      if (obj) this._cooksRegistryByDate.set(cook.id, obj)
    }
    
  }


  private setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  }

  
}