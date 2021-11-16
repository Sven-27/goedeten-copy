import { makeAutoObservable } from "mobx";
import agent from "adapters/agent";
import { IDishCategory ,DishCategory} from "models/DishCategory";

export default class DishCategoryStore {
  
  private defaultDataRow:IDishCategory = new DishCategory()
  private _data: IDishCategory[] = [];
  private _dataRow: IDishCategory = this.defaultDataRow;

  filter: string = "";
  loading: boolean = false;
  isComponentDisabled:boolean = false;
  btnCancel:boolean = false;

  constructor() {
    makeAutoObservable(this);
    
  }

  get categoriesRegistry() {
    return this._data //Array.from(this._data.values());
  }



  get dataRow(){
    return this._dataRow;
  }

  set dataRow(data:IDishCategory ) {
    this._dataRow = data;
  }

  loadData = async () => {
    this.setLoadingInitial(true);
    try {
      var res = await agent.dishCategories.list();

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

  private setDataSorted = (state: IDishCategory[]) => {
    this._data = state;
  };
  
  
  private setFilter = (value:string)=>{
    this.filter = value; 
    this.loadData(); 
  }

  private setIsComponentDisabled = (state: boolean) => {
    this.isComponentDisabled = state;
  };
 
  handleDelete = async (value: IDishCategory) => {
   // console.log(value)
    const conf = confirm("Weet je zeker dat je " + value.name + " wilt verwijderen?");
    if (conf) {
      try {
        if (value.id != null) {
          await agent.dishCategories.delete(value.id);
        }
      } catch (e) {
        console.log(e);
      }
      //await getList()
      this.loadData();
      this.handleRowClick(this.defaultDataRow);
    }
  };

  handleRowClick = (row: IDishCategory) => {
    this.dataRow = row;
  };

  private setBtnCancel = (somebool:boolean)=>{
        this.btnCancel = somebool;    
   }
  handleUpdate=(row: IDishCategory) =>{
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
  handleSave= async(value:IDishCategory)=> {    
    if (value.id == 0){      
      await agent.dishCategories.create(value)
    }else {
      await agent.dishCategories.update(value)
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
