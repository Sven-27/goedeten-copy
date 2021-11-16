import { makeAutoObservable } from "mobx";
import agent from "adapters/agent";
import { Customer, ICustomer } from "models/Customer";

export default class CustomerStore {
  //data = new Map<number, ILocation>();
  private defaultDataRow:ICustomer = new Customer()
  private _data: ICustomer[] = [];
  private _dataRow: ICustomer = this.defaultDataRow;

  filter: string = "";
  loading: boolean = false;
//   isComponentDisabled:boolean = false;
  btnCancel:boolean = false;

  constructor() {
    makeAutoObservable(this);
    // this.loadData();
  }

  get customerRegistry() {
    // console.log(this._data)
    return this._data //Array.from(this._data.values());
  }



  get dataRow(){
    return this._dataRow;
  }

  set dataRow(data:ICustomer ) {
    this._dataRow = data;
  }

  loadData = async () => {
    this.setLoadingInitial(true);
    try {
      var res = await agent.customers.list();
      //console.log(res)
      var resSorted = res.sort((a, b) =>
        a.email.toUpperCase() > b.email.toUpperCase()
          ? 1
          : b.email.toLowerCase() > a.email.toUpperCase()
          ? -1
          : 0
      );
      if (this.filter.trim().length > 0) {
        var resFiltered = resSorted;
        resSorted = resFiltered.filter((item) =>
          item.email.toUpperCase().includes(this.filter.toUpperCase())
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

  private setDataSorted = (state: ICustomer[]) => {
    this._data = state;
  };
  
  
  private setFilter = (value:string)=>{
    this.filter = value; 
    this.loadData(); 
  }

//   private setIsComponentDisabled = (state: boolean) => {
//     this.isComponentDisabled = state;
//   };
 
  handleDelete = async (row: ICustomer) => {
    const conf = confirm("Weet je zeker dat je " + row.email + " wil verwijderen?");
    if (conf) {
      try {
        if (row.id != null) {
          await agent.customers.delete(row.id);
        }
      } catch (e) {
        console.log(e);
      }
      //await getList()
      this.loadData();
      this.handleRowClick(this.defaultDataRow);
    }
  };

  handleRowClick = (row: ICustomer) => {
    this.dataRow = row;
  };

//   private setBtnCancel = (somebool:boolean)=>{
//         this.btnCancel = somebool;    
//    }
  handleUpdate=(row: ICustomer) =>{
    //    this.setBtnCancel(true);    
    //    this.setIsComponentDisabled(!someBool)
  }
//   handleCancel=()=> {
//     this.handleUpdate(true)
//     this.setBtnCancel(false)    
//   }
  
//   handleCreate=()=> {  
//     this.dataRow = this.defaultDataRow;  
//     this.setBtnCancel(true)
//     this.setIsComponentDisabled(true)      
//   }
//   handleSave= async(value:ICustomer)=> {    
//     if (value.id == 0){      
//       await agent.locations.create(value)
//     }else {
//       await agent.locations.update(value)
//     }
//     this.loadData();
//     this.handleCancel()
//   }

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
