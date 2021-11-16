import { makeAutoObservable } from "mobx";
import {IDate, dates} from "data/datesObject"


export default class DateStore {

  constructor(){
    makeAutoObservable(this);
  }
 
  get dateRegistry(){
    return dates
  }
  
  private _selectedDay: IDate = dates[0]
  
  loadingInitial = true;
  
  set selectedDay (day: IDate) {
    this._selectedDay = day;
  }
  
  get selectedDay() {
    return this._selectedDay;
  }

  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  }
}