import agent from "adapters/agent";
import { makeAutoObservable, runInAction} from "mobx";
import { IUser, IUserFormValues, User } from "models/User";
import router from "next/router";
import { store } from "./store";


export default class UserStore{
    private _user:IUser | null = null;
    private _usersList: IUser[]|null = null;
    filter: string = "";
    editOpen:boolean = false;
    editOpen2:boolean = false;
    private _selectedUser :IUser = new User();

    constructor(){
        makeAutoObservable(this);
    }
    get isLoggedIn(){
        return !!this._user;
    }
     get user(){
        // this.getUser()
         return this._user       
     }

     set user( value:IUser | null){
        this._user = value 
    }

    get selectedUser(){      
       return this._selectedUser       
   }
    set selectedUser( value:IUser){
      this._selectedUser = value 
  }
    get usersList(){
        return this._usersList       
     }

     set usersList( value:IUser[]| null){
        this._usersList = value 
    }
    
    private setEditOpen = (state: boolean) => {
        this.editOpen = state;
      };
      private setEditOpen2 = (state: boolean) => {
        this.editOpen2 = state;
      };
    private setDataSorted = (state: IUser[]) => {
        this._usersList = state;
      };

      handleOpenEditModal = () => {
        this.setEditOpen(true);
      }
      handleCloseEditModal = () => {
        this.loadData();
        this.setEditOpen(false);    
      }
      handleOpenEdit2Modal = () => {
        this.setEditOpen2(true);
      }
      handleCloseEdit2Modal = () => {
        this.loadData();
        this.setEditOpen2(false);    
      }
      handleCancel = () => {
        this.setEditOpen(false);    
      }
      handleCancel2 = () => {
        this.setEditOpen2(false);    
      }
      handleUpdate = (user: IUser) => {
        this.setEditOpen2(true);
        this.loadData();
      }
    
      handleAddNew = ()=>{
        this.setEditOpen(true);
        this.loadData();
      }
      handleDelete = async (value: IUser) => {
        if (this.user?.role !== "SuperAdmin"){
          alert ("U bent niet bevoegd om deze actie uit te voeren!")
          return
        }

        if (this.user?.id === value.id){
          alert ("U kan niet eigen account te verwijderen!")
          return
        }

        const conf = confirm("Do you really want to delete " + value.name + "?");

        if (conf) {
          try {
            if (value.id != null) {
              await agent.users.delete(value.id);
            }
          } catch (e) {
            console.log(e);
          }      
          this.loadData();       
        }
      };

      handlePasswordReset = async (value: IUser)=>{
          try {
            if (value.id != null) {
              await agent.users.requestResetPass(value.id);
              alert (`Wachtword herstel bericht is naar ${value.username}  verstuurd!`)

            }

          } catch (e) {
            console.log(e);
          }      
      }    
      handleChangeForm = (event: any) => {   
        this.selectedUser = {...this.selectedUser,[event.target.id]: event.target.value } 
      }
      handleChangeFormSelect = (event: any) => {   
        this.selectedUser = {...this.selectedUser,[event.target.id]: event.target.value } 
      }
    loadData = async () => {
        try {
          var res = await agent.users.list();
    
          var resSorted = res.sort((a, b) =>
            a.username.toUpperCase() > b.username.toUpperCase()
              ? 1
              : b.username.toLowerCase() > a.username.toUpperCase()
              ? -1
              : 0
          );
          if (this.filter.trim().length > 0) {
            var resFiltered = resSorted;
            resSorted = resFiltered.filter((item) =>
              item.username.toUpperCase().includes(this.filter.toUpperCase())
            );
          }
          this.setDataSorted(resSorted);
        
        } catch (error) {
          console.log(error);          
        }
      };

    login = async (creds: IUserFormValues) => {
        try {
            const userLogin = await agent.users.login(creds); 
            store.commonStore.token = (userLogin.token);
            runInAction(() => this._user = userLogin);
            router.push('/admin/dashboard');
            return null
        } catch (e: any) {
            console.log(e.response.data.message)
            return e.response.data.message
        }
    }
    
    register = async (creds: IUser) => {
        try {
            const userLogin = await agent.users.register(creds);             
            if (userLogin ===null) return false            
            return true
        } catch (e: any) {
            console.log(e.response)
            return false
        }
    }
    update = async (creds: IUser) => {
      try {
          const userLogin = await agent.users.update(creds.id,creds);             
          if (userLogin ===null) return false            
          return true
      } catch (e: any) {
          console.log(e.response)
          return false
      }
  }

    logout = ()=>{       
        runInAction(() => {
            store.commonStore.token=null;
            if (typeof window !== "undefined") {                
                window.localStorage.removeItem('jwt');
            }
            this._user = null;
        })
         router.push('/admin')
    }

    getUser = async()=>{
        try{            
            const currentuser = await agent.users.current();
            if (currentuser){
              runInAction(()=>this._user = currentuser);
              return currentuser
            }else return null           
            
        }
        catch(e){
            console.log(e);
            return null
        }
    }

    resetPassword = async (creds:string)=>{
        try{
            if (this.user){
                this.user.password = creds;
                this.user.needsPasswordReset = false;
                await agent.users.resetPass(this.user.id,this.user);
                }
                runInAction(() => {
                    store.commonStore.token=null;
                    window.localStorage.removeItem('jwt');
                    this._user = null;
                })
            router.push('/admin');
         } catch(e){
             throw (e)
         } 
    }
}
