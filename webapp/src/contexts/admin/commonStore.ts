import { makeAutoObservable, reaction, runInAction } from "mobx";

export default class CommonStore {
  _token: string | null = null;
  appLoaded = false;

  constructor() {
    makeAutoObservable(this);
    this.getLocalStorage();
    reaction(
      () => this._token,
      (token) => {
        if (token) {
          window.localStorage.setItem("jwt", token);
        } else {
          window.localStorage.removeItem("jwt");
        }
      }
    );
  }

 private setLocalStorage() {
    if (this._token) {
      if (typeof window !== "undefined")
        window.localStorage.setItem("jwt", this._token);
    }
 }

  private getLocalStorage = () => {
    try {
      if (typeof window !== "undefined") {
        let value = window.localStorage.getItem('jwt');
        if (value) {
          runInAction(() => {
            this._token = value;
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  get token() {
    this.getLocalStorage();
    return this._token;
  }

  set token(token: string | null) {
    this._token = token;
    this.setLocalStorage();
  }

  setAppLoaded = () => {
    this.appLoaded = true;
  };
}
