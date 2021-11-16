import { makeAutoObservable } from "mobx";
import agent from "adapters/agent";
import { IVatCategory ,VatCategory} from "models/VatCategory";

export default class VatCategoryStore {
  private defaultDataRow:IVatCategory = new VatCategory()
  private _data: IVatCategory[] = [];
  private _dataRow: IVatCategory = this.defaultDataRow;

  filter: string = "";
  loading: boolean = false;
  isComponentDisabled:boolean = false;
  btnCancel:boolean = false;

  constructor() {
    makeAutoObservable(this);
    }

  get vatcategorysRegistry() {
    return this._data //Array.from(this._data.values());
  }



  get dataRow(){
    return this._dataRow;
  }

  set dataRow(data:IVatCategory ) {
    this._dataRow = data;
  }

  loadData = async () => {
    this.setLoadingInitial(true);
    try {
      var res = await agent.vatCategories.list();

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

  private setDataSorted = (state: IVatCategory[]) => {
    this._data = state;
  };
  
  
  private setFilter = (value:string)=>{
    this.filter = value; 
    this.loadData(); 
  }

  private setIsComponentDisabled = (state: boolean) => {
    this.isComponentDisabled = state;
  };
 
  

  handleRowClick = (row: IVatCategory) => {
    this.dataRow = row;
  };

  private setBtnCancel = (somebool:boolean)=>{
        this.btnCancel = somebool;    
  }

  handleUpdate=(row: IVatCategory) =>{
       this.dataRow = row;
       this.setBtnCancel(true);    
       this.setIsComponentDisabled(true)
  }
  
  
  
  handleCancel=()=> {
    this.dataRow = this.defaultDataRow;  
    this.setIsComponentDisabled(false)
    this.setBtnCancel(false)    
  }
  
 

  handleChangeForm = (event: any) => {   
    this.dataRow = {...this.dataRow,[event.target.id]: event.target.value } 
  }
  
  handleChangeValue = (event: any) => {
    this.dataRow = {...this.dataRow,value: parseFloat(event.target.value) } 
  };

  handleClearAll = () => {    
    this.setFilter ("");
  };

  handleSave= async(value:IVatCategory)=> {    
    await agent.vatCategories.update(value)    
    this.loadData();
    this.handleCancel()
  }

}
