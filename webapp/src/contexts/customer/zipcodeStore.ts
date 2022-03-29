import { makeAutoObservable, runInAction } from 'mobx';

export default class ZipCodeStore {
  private _zipCode: string = '';

  constructor() {
    makeAutoObservable(this);
    this.getLocalStorage();
  }

  get zipCode() {
    return this._zipCode;
  }

  set zipCode(data: string) {
    this._zipCode = data;
    this.setLocalStorage(data);
  }

  private setLocalStorage(data: string) {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('zipcode', data);
    }
  }

  private getLocalStorage() {
    if (typeof window !== 'undefined') {
      let result = window.localStorage.getItem('zipcode');

      runInAction(() => {
        if (result) this._zipCode = result;
      });
    }
  }
}
