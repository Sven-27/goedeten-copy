import { makeAutoObservable } from "mobx";
import agent from "adapters/agent";
import { IAllergen ,Allergen} from "models/Allergen";

export default class AllergenStore {
  private defaultDataRow:IAllergen = new Allergen()
  private _data: IAllergen[] = [];
  private _dataRow: IAllergen = this.defaultDataRow;

  filter: string = "";
  loading: boolean = false;
  isComponentDisabled:boolean = false;
  btnCancel:boolean = false;

  constructor() {
    makeAutoObservable(this);
    }

  get allergensRegistry() {
    return this._data //Array.from(this._data.values());
  }



  get dataRow(){
    return this._dataRow;
  }

  set dataRow(data:IAllergen ) {
    this._dataRow = data;
  }

  loadData = async () => {
    this.setLoadingInitial(true);
    try {
      var res = await agent.allergens.list();

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

  private setDataSorted = (state: IAllergen[]) => {
    this._data = state;
  };
  
  
  private setFilter = (value:string)=>{
    this.filter = value; 
    this.loadData(); 
  }

  private setIsComponentDisabled = (state: boolean) => {
    this.isComponentDisabled = state;
  };
 
  handleDelete = async (value: IAllergen) => {
   
    const conf = confirm("Weet je zeker dat je " + value.name + " wilt verwijderen?");
    if (conf) {
      try {
        if (value.id != null) {
          await agent.allergens.delete(value.id);
        }
      } catch (e) {
        console.log(e);
      }
      //await getList()
      this.loadData();
      this.handleRowClick(this.defaultDataRow);
    }
  };

  handleRowClick = (row: IAllergen) => {
    this.dataRow = row;
  };

  private setBtnCancel = (somebool:boolean)=>{
        this.btnCancel = somebool;    
  }

  handleUpdate=(row: IAllergen) =>{
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
  handleSave= async(value:IAllergen)=> {    
    if (value.id == 0){      
      await agent.allergens.create(value)
    }else {
      await agent.allergens.update(value)
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
