import { makeAutoObservable } from "mobx";
import agent from "adapters/agent";
import { ILocation ,Location} from "models/Location";

export default class LocationStore {
  //data = new Map<number, ILocation>();
  private defaultDataRow:ILocation = new Location()
  private _data: ILocation[] = [];
  private _dataRow: ILocation = this.defaultDataRow;

  filter: string = "";
  loading: boolean = false;
  isComponentDisabled:boolean = false;
  btnCancel:boolean = false;

  constructor() {
    makeAutoObservable(this);
    
  }

  get locationsRegistry() {
    return this._data //Array.from(this._data.values());
  }



  get dataRow(){
    return this._dataRow;
  }

  set dataRow(data:ILocation ) {
    this._dataRow = data;
  }

  loadData = async () => {
    this.setLoadingInitial(true);
    try {
      var res = await agent.locations.list();

      var resSorted = res.sort((a, b) =>
        a.name.toUpperCase() > b.name.toUpperCase()
          ? 1
          : b.name.toLowerCase() > a.name.toUpperCase()
          ? -1
          : 0
      );
      if (this.filter.trim().length > 0) {
        var resFiltered = resSorted;
        resSorted = resFiltered.filter((item) =>
          item.name.toUpperCase().includes(this.filter.toUpperCase())
        );
      }
      this.setDataSorted(resSorted);
      this.setLoadingInitial(false);
    } catch (error) {
      console.log(error);

      this.setLoadingInitial(false);
    }
  };


  
  private setLoadingInitial = (state: boolean) => {
    this.loading = state;
  };

  private setDataSorted = (state: ILocation[]) => {
    this._data = state;
  };
  
  
  private setFilter = (value:string)=>{
    this.filter = value; 
    this.loadData(); 
  }

  private setIsComponentDisabled = (state: boolean) => {
    this.isComponentDisabled = state;
  };
 
  handleDelete = async (value: ILocation) => {
   // console.log(value)
    const conf = confirm("Weet je zeker dat je " + value.name + " wilt verwijderen?");
    if (conf) {
      try {
        if (value.id != null) {
          await agent.locations.delete(value.id);
        }
      } catch (e) {
        console.log(e);
      }
      //await getList()
      this.loadData();
      this.handleRowClick(this.defaultDataRow);
    }
  };

  handleRowClick = (row: ILocation) => {
    this.dataRow = row;
  };

  private setBtnCancel = (somebool:boolean)=>{
        this.btnCancel = somebool;    
  }

  handleUpdate=(row: ILocation) =>{
       this.dataRow = row;
       this.setBtnCancel(true);    
       this.setIsComponentDisabled(true)
  }
  
  handleCancel=()=> {
    this.dataRow = this.defaultDataRow;  
    this.setIsComponentDisabled(false)
    this.setBtnCancel(false)    
  }
  
  handleCreate=()=> {  
    this.dataRow = this.defaultDataRow;  
    this.setBtnCancel(true)
    this.setIsComponentDisabled(true)      
  }
  handleSave= async(value:ILocation)=> {    
    if (value.id == 0){      
      await agent.locations.create(value)
    }else {
      await agent.locations.update(value)
    }
    this.loadData();
    this.handleCancel()
  }

  handleChangeForm = (event: any) => {   
    this.dataRow = {...this.dataRow,[event.target.id]: event.target.value } 
  }
  
  handleChangeNameFilter = (e:any,value:string) => {
    e.preventDefault();
    this.setFilter(value)   
  };

  handleClearAll = () => {    
    this.setFilter ("");
  };


}
