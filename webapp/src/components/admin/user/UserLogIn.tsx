import React, { useState } from "react";
import { Button, IconButton, InputAdornment, TextField } from "@material-ui/core";
import { useStore } from "contexts/admin/store";
import { observer } from "mobx-react";
import styles from "styles/admin/user/LogIn.module.scss";
import Image from "next/image"
import { useForm } from "react-hook-form";
import {IUserFormValues } from "models/User";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import Link from "next/link"
import { Logos } from 'data/logos'



export default observer( function UserLogIn() {

  const {register, handleSubmit, formState: { errors }} = useForm<IUserFormValues>({
    mode: "onChange"
  });
  const { tomaatLogo } = Logos
  const {userStore} = useStore()
  const [showPassword, setShowPassword] = useState(false);  

  const [badRequest, setBadRequest] = useState(false);  
  const [requestMessage, setRequestMessage] = useState("");  
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const  handleLogIn= async (value:IUserFormValues)=>{        
     const result = await userStore.login(value); 
            
    if (result){
      setRequestMessage(result)
      setBadRequest(true)
    }
  }
  
  return (
   
    <div className = {styles.container}>
      
        <div className={styles.title}>  
          <section className={styles.titleLogo}>
            
            <h1>Goed Eten</h1>
            <Link href="/goedeten">
              <a  >
              <Image 
              src={tomaatLogo}
              alt="Goedeten-logo" 
              width="60"
              height="60"
            />
              </a>
          </Link>

          </section>
        </div>     
        <form   autoComplete="off" className={styles.formcontainer}
          onSubmit = {handleSubmit((data)=>handleLogIn(data))}>

          <TextField required
          onClick = {()=>setBadRequest(false)}
           id="userName"
            label="email" 
            placeholder = "email@test.com"
           {...register("userName",{
            required: "Voer email in",
            pattern: {
              value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Voer een geldig email adres in"
            }
          })} />
           {errors.userName && <p>{errors.userName.message}</p>}
          <TextField 
           {...register("password")}
           onClick = {()=>setBadRequest(false)}
            required
            id="password"
            label="password"  
            placeholder = " password"          
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            
          />
          {badRequest?<p>{requestMessage}</p>:null}
          
          <Button  
            variant="contained"
            color="primary"
            type = "submit"          
          >
            Sign In
          </Button>
          
          </form> 
      
    </div>
  );
})
