import { Visibility, VisibilityOff } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "styles/admin/user/LogIn.module.scss";
import { useForm } from "react-hook-form";
import { useStore } from "contexts/admin/store";
import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@material-ui/core";
import { useRouter } from "next/router";
import Link from "next/link";
import { Logos } from 'data/logos'
interface IResetPass {    
    password: string;
    repeatPassword:string;
}

export default function UserActivationForm() {
  const router = useRouter();
  const { token } = router.query;
  const { userStore, commonStore } = useStore();

  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [badRequest, setBadRequest] = useState(true);
  const { tomaatLogo } = Logos

  useEffect(() => {
     if (token) {
      commonStore.token = token.toString();
      userStore.getUser().then(() => {
        userStore.user ? setBadRequest(false) : setBadRequest(true);
       });
    }    
  },[token]);

  useEffect(() => {
    if (userStore.user?.needsPasswordReset == false) {    
     window.localStorage.removeItem("jwt");
     setTimeout(() => window.location.href = "/admin", 3000)
     } 
  },[userStore.user])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IResetPass>({
    mode: "onChange",
  });

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const handleClickShowRepeatPassword = () => setShowRepeatPassword(!showRepeatPassword);
  const handleMouseDownRepeatPassword = () => setShowRepeatPassword(!showRepeatPassword);

  const handleReset = async (value: IResetPass) => {
      if (value.password !== value.repeatPassword) setBadRequest(true)
      else {
        userStore.resetPassword(value.password).then(()=>router.push('/admin'));         
      }

    
  };

  return (
    <div className={styles.container}>
    
      <div className={styles.title}>
        <section className={styles.titleLogo}>
          <h1>Goed Eten</h1>
          <Link href="/goedeten">
            <a>
              <Image
                src={tomaatLogo}
                alt="Goedeten-logo"
                width="60"
                height="60"
              />
            </a>
          </Link>
        </section>
        <Typography>password reset</Typography>
        <Typography>{userStore.user?.username}</Typography>
      </div>
      {( userStore.user?.username && userStore.user?.needsPasswordReset)?
      <form
        className={styles.formcontainer}
        onSubmit={handleSubmit((data) => handleReset(data))}
      >
       
       <TextField
          {...register("password")}
          onClick={() => setBadRequest(false)}
          required
          id="password"
          label="password"
          placeholder=" password"
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
       
        <TextField
          {...register("repeatPassword")}
          onClick={() => setBadRequest(false)}
          required
          id="repeatPassword"
          label="confirm your password"
          placeholder=" confirm your password"
          type={showRepeatPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowRepeatPassword}
                  onMouseDown={handleMouseDownRepeatPassword}
                >
                  {showRepeatPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
         {badRequest?<p>{"passwords zijn niet gelijk"}</p>:null}

        <Button variant="contained" color="primary" type="submit">
         Reset password
        </Button>
      </form>: 
      <Typography>
          {!userStore.user?.needsPasswordReset?'User heeft geen rechten om password te herstellen ':'unknown user...' }
      </Typography>
}

    </div>
  );
}
