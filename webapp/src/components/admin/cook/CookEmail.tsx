import { FormControl, InputLabel, OutlinedInput } from "@material-ui/core";
import React from "react";
import { useStore } from "contexts/admin/store";
import { observer } from "mobx-react";
import styles from "styles/admin/CookEdit.module.scss";
import { useFormContext } from "react-hook-form";

export default observer(function CookEmail() {
  const { cookStore } = useStore();
  // const [focus, setFocus] = useState(false);
  // const inputRef = useRef<HTMLInputElement>(null);
  const methods = useFormContext();

  //  useEffect(() => {
  //   if (focus && inputRef.current !== null) {
  //     inputRef.current.focus();
  //   }
  // }, );

  // const EmailCheck = (event: any) => {
  //   setFocus(false);
  //   const re =
  //     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  //   if (event.target.value != "" && !re.test(event.target.value)) {
  //     setFocus(true);
  //   } else {
  //     setFocus(false);
  //   }
  // };
  return (
    <FormControl variant="outlined" className={styles.inputs}>
      <InputLabel>E-mail</InputLabel>
      <OutlinedInput
        {...methods.register("email", {
          pattern: {
            value:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "Voer een geldig email adres in...",
          },
        })}
        id="email"
        value={cookStore.row.email}
        labelWidth={105}
        onChange={(e) => cookStore.handleChangeFormInput(e, e.target.value)}
        // onBlur={(e) => EmailCheck(e)}
        placeholder="email address..."
        // inputRef={inputRef}
      />
      {methods.formState.errors.email && (
        <p style={{ color: "red" }}>
          {" "}
          {methods.formState.errors.email.message}{" "}
        </p>
      )}
      {/* {focus && <p style={{ color: "red" }}> voer geldig email in.."</p>}  */}
    </FormControl>
  );
});
