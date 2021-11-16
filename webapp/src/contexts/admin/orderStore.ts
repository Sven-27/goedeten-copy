import { makeAutoObservable, runInAction } from "mobx";
import agent from "adapters/agent";
import { IOrder, Order } from "models/Order";

export default class OrderStore {
  private defaultDataRow:IOrder = new Order()
  private _data: IOrder[] = [];
  private _dataRow: IOrder = this.defaultDataRow;
  private _editOpen:boolean = false;

  filter: string = "";
  loading: boolean = false;

  constructor() {
    makeAutoObservable(this);
    }

  get editOpen(){return this._editOpen};
  set editOpen(val: boolean){this._editOpen=val};

  get ordersRegistry() {
    return this._data //Array.from(this._data.values());
  }

  get dataRow(){
    return this._dataRow;
  }

  set dataRow(data:IOrder ) {
    this._dataRow = data;
  }

  loadData = async () => {
    this.setLoadingInitial(true);
    try {
      var res = await agent.orders.list();

      // var resEnum = res.map(o => o.status)

      // var resSorted = res.sort((a, b) =>
      //   a.name.toUpperCase() > b.name.toUpperCase()
      //     ? 1
      //     : b.name.toLowerCase() > a.name.toUpperCase()
      //     ? -1
      //     : 0
      // );
      // if (this.filter.trim().length > 0) {
      //   var resFiltered = resSorted;
      //   resSorted = resFiltered.filter((item) =>
      //     item.name.toUpperCase().includes(this.filter.toUpperCase())
      //   );
      // }
      this.setDataSorted(res);
      this.setLoadingInitial(false);
    } catch (error) {
      console.log(error);

      this.setLoadingInitial(false);
    }
  };

  loadDetails = async (id: number) => {
    this.setLoadingInitial(true);
    try {
      var res = await agent.orders.details(id);
      this.dataRow = res;
      this.setLoadingInitial(false);
      console.log(res)
    } catch (error) {
      console.log(error);

      this.setLoadingInitial(false);
    }
  };

  private setLoadingInitial = (state: boolean) => {
    this.loading = state;
  };

  private setDataSorted = (state: IOrder[]) => {
    this._data = state;
  };
  
  
  private setFilter = (value:string)=>{
    this.filter = value; 
    this.loadData(); 
  }

  handleRowClick = (row: IOrder) => {
    this.dataRow = row;
    this.loadDetails(row.id)
  };
 
  handleCancel=()=> {
    this.dataRow = this.defaultDataRow;  
    this.editOpen = false;
  }
  
  handleSave= async(value:IOrder)=> {    
    await agent.orders.update(value)
    this.loadData();
    this.handleCancel()
  }

  handleChangeForm = (event: any) => {   
    this.dataRow = {...this.dataRow,[event.target.id]: event.target.value } 
  }

  // handleChangeFormInput = (event: any, value: string) => {
  //   this.row = { ...this.row, [event.target.id]: value };
  // };
  
  handleChangeNameFilter = (e:any,value:string) => {
    e.preventDefault();
    this.setFilter(value)   
  };

  handleClearAll = () => {    
    this.setFilter ("");
  };
}
