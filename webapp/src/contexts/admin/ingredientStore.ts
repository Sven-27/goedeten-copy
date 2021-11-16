import { makeAutoObservable } from "mobx";
import agent from "adapters/agent";
import { IIngredient ,Ingredient} from "models/Ingredient";

export default class IngredientStore {
  private defaultDataRow:IIngredient = new Ingredient()
  private _data: IIngredient[] = [];
  private _dataRow: IIngredient = this.defaultDataRow;

  filter: string = "";
  loading: boolean = false;
  isComponentDisabled:boolean = false;
  btnCancel:boolean = false;

  constructor() {
    makeAutoObservable(this);
    }

  get ingredientsRegistry() {
    return this._data //Array.from(this._data.values());
  }



  get dataRow(){
    return this._dataRow;
  }

  set dataRow(data:IIngredient ) {
    this._dataRow = data;
  }

  loadData = async () => {
    this.setLoadingInitial(true);
    try {
      var res = await agent.ingredients.list();

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

  private setDataSorted = (state: IIngredient[]) => {
    this._data = state;
  };
  
  
  private setFilter = (value:string)=>{
    this.filter = value; 
    this.loadData(); 
  }

  private setIsComponentDisabled = (state: boolean) => {
    this.isComponentDisabled = state;
  };
 
  handleDelete = async (value: IIngredient) => {
   
    const conf = confirm("Weet je zeker dat je " + value.name + " wilt verwijderen?");
    if (conf) {
      try {
        if (value.id != null) {
          await agent.ingredients.delete(value.id);
        }
      } catch (e) {
        console.log(e);
      }
      //await getList()
      this.loadData();
      this.handleRowClick(this.defaultDataRow);
    }
  };

  handleRowClick = (row: IIngredient) => {
    this.dataRow = row;
  };

  private setBtnCancel = (somebool:boolean)=>{
        this.btnCancel = somebool;    
  }

  handleUpdate=(row: IIngredient) =>{
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
  handleSave= async(value:IIngredient)=> {    
    if (value.id == 0){      
      await agent.ingredients.create(value)
    }else {
      await agent.ingredients.update(value)
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
