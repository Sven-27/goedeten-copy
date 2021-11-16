import React, { useEffect } from "react";

import { Button, Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import styles from "styles/admin/CookEdit.module.scss";
import CancelIcon from "@material-ui/icons/Cancel";
import SaveIcon from "@material-ui/icons/Save";
import { observer } from "mobx-react";
import { useStore } from "contexts/admin/store";
import CookEditPicture from "./CookEditPicture";
import CookDetailTabs from "./CookDetailTabs";
import CookName from "./CookName";
import CookAddress from "./CookAddress";
import CookActive from "./CookActive";
import CookPhoneNumber from "./CookPhoneNumber";
import CookEmail from "./CookEmail";
import CookLocation from "./CookLocation";
import { FormProvider, useForm } from "react-hook-form";
import { ICook } from "models/Cook";

export default observer(function CookEditDialog() {
  const { cookStore } = useStore();

  const methods = useForm<ICook>({
    mode: "onBlur",
    defaultValues: { name: "blabla", address: "blaaddress" },
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;

  useEffect(() => {
    reset(cookStore.row);
  }, [reset, cookStore.row]);

  const onSubmitForm = async (data: ICook) => {
    cookStore.handleUpdateRequest(data);
  };
 
  
  return (
    <div>
      <Dialog
        open={cookStore.editOpen}
        maxWidth={"lg"}
        fullWidth={true}   
        onClose={(event, reason) => {
          if (reason !== 'backdropClick') {          
          }
      }}     
       
      >
        <DialogTitle id="dialog-title">
          {cookStore.row.id == 0
            ? " voeg nieuwe  kok toe"
            : " wijzig kok zijn gegevens ...."}
        </DialogTitle>
        <DialogContent>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmitForm)}>
              <div className={styles.container}>               
                  <div className={styles.submitbuttons}>
                    <Button
                      // onClick={cookStore.handleUpdateRequest}
                      startIcon={<SaveIcon />}
                      variant="contained"
                      color="primary"
                      size="small"
                      type="submit"
                    >
                      Opslaan
                    </Button>
                    <Button
                      onClick={cookStore.handleCancel}
                      startIcon={<CancelIcon />}
                      variant="contained"
                      color="secondary"
                      size="small"
                    >
                      Annuleren
                    </Button>
                  </div>
               


                  <div className={styles.pic}>
                    <CookEditPicture />
                  </div> 
                  <div className={styles.name}>
                      <CookName />
                  </div>
                  <div className={styles.location}>
                    <CookLocation />
                  </div>  
                  <div className={styles.active}>
                    <CookActive />
                  </div>  
                  
                  <div className={styles.tab}>
                    <CookDetailTabs />
                  </div>  
                  <div className={styles.address}>
                    <CookAddress />
                  </div>  

                  <div className={styles.email}>
                    <CookEmail />
                  </div>  

                  <div className={styles.tel}>
                    <CookPhoneNumber />
                  </div>
                
              </div>
            </form>
          </FormProvider>
        </DialogContent>
      </Dialog>
    </div>
  );
});
