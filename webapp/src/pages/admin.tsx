import { useStore } from "contexts/admin/store";
import React, { useEffect } from "react";
import UserLogIn from "components/admin/user/UserLogIn";
import router from "next/router";

const Admin = () => {
  const{commonStore, userStore} = useStore();
  useEffect(()=>{      
    if(commonStore.token){             
      userStore.getUser().finally(()=>{
      commonStore.setAppLoaded()
      router.push('/admin/dashboard'); 
    });      
    } else{       
    commonStore.setAppLoaded();
  }  
 
},[])
 
  return (
     <UserLogIn/>
       
  );
};

export default Admin;
