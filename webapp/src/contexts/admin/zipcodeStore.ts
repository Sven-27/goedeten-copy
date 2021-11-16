import { makeAutoObservable, runInAction } from "mobx";
import agent  from "adapters/agent";
import { IZipcode } from "models/Zipcode";
import {IPaginatedList, IZipPaginatedRequest} from "models/PaginatedList";

export default class ZipcodeStore {
  zipcodeRegistry = new Map<number, IZipcode>();
  paginationRegistry: IPaginatedList<IZipcode> | undefined = undefined;
  selectedZipcode: IZipcode = {
    id: 0,
    zip: "",
    locationName: "",
    active: false
  };
  editMode = false;
  loading = false;
  loadingInitial = true;

  constructor() {
    makeAutoObservable(this);
  }
  
  currentRequest: IZipPaginatedRequest = {
    pageNumber: 1,
    pageSize: 15,
    sortField: "zip",
    sortOrder: "asc",
    zipFilter: "",
    cityFilter: "",
    streetFilter: "",
    activeFilter: null,
  }
  
  get zipcodesRegistry() {
    return Array.from(this.zipcodeRegistry.values())
  }
  
  get pageRegistry() {
    return this.paginationRegistry;
  }

  loadZipcodes = async (request: IZipPaginatedRequest=this.currentRequest) => {
    this.loadingInitial = true;
    try {
      const zipcodes = await agent.zipCodes.getFilteredList(request);
      this.paginationRegistry = zipcodes;
      zipcodes.items.forEach(zipcode => {
        this.setZipcode(zipcode)
      })
      this.setLoadingInitial(false);
    } catch (error) {
      console.log(error);
      this.setLoadingInitial(false);
    }
  }

  loadZipcode = async (id: number) => {
    let zipcode = this.getZipcode(id);
    if (zipcode) {
      this.selectedZipcode = zipcode;
      return zipcode;
    } else {
      this.loadingInitial = true;
      try {
        zipcode = await agent.zipCodes.details(id);
        this.setZipcode(zipcode);
        runInAction(() => {
          if (zipcode) this.selectedZipcode = zipcode;
        })
        this.setLoadingInitial(false);
        return zipcode;
      } catch (error) {
        console.log(error);
        this.setLoadingInitial(false);
      }
    }
  }

  private setZipcode = (zipcode: IZipcode) => {
    this.zipcodeRegistry.set(zipcode.id, zipcode)
  }

  private getZipcode = (id: number) => {
    return this.zipcodeRegistry.get(id);
  }

  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  }

  createZipCode = async (zipcode: IZipcode) => {
    this.loading = true;
    try {
      await agent.zipCodes.create(zipcode).then(newZipcode => {
        runInAction(() => {
          this.zipcodeRegistry.set(newZipcode.id, newZipcode)
          this.selectedZipcode = zipcode;
          this.editMode = false;
          this.loading = false;
        });
      })
    } catch (error) {
      console.log(error);
      runInAction(() => {
        this.loading = false;
      })
    }
  }

  updateZipCode = async (zipcode: IZipcode) => {
    this.loading = true;
    try {
      await agent.zipCodes.update(zipcode);
      runInAction(() => {
        this.zipcodeRegistry.set(zipcode.id, zipcode);
        this.selectedZipcode = zipcode;
        this.editMode = false;
        this.loading = false;
      })
    } catch (error){
      console.log(error);
      runInAction(() => {
        this.loading = false;
      })
    }
  }

  deleteZipcode = async (id: number) => {
    this.loading = true;
    try {
      await agent.zipCodes.delete(id);
      runInAction(() => {
        this.zipcodeRegistry.delete(id);
        this.loading = false;
      })
    } catch (error){
      console.log(error)
      runInAction(() => {
        this.loading = false;
      })
    }
  }
}