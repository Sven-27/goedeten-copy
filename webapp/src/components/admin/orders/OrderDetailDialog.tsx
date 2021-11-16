import React, { useEffect } from "react";
import { Button, Dialog, DialogContent, DialogTitle, Typography } from "@material-ui/core";
import styles from "styles/admin/order/OrderDetailDialog.module.scss";
import CancelIcon from "@material-ui/icons/Cancel";
import SaveIcon from "@material-ui/icons/Save";
import { observer } from "mobx-react";
import { useStore } from "contexts/admin/store";
import { FormProvider, useForm } from "react-hook-form";
import { IOrder } from "models/Order";
import OrderDetails from "./OrderDetails";
import OrderTransactions from "./OrderTransactions";
import OrderDeliveries from "./OrderDeliveries";

export default observer(function OrderDetailDialog() {
  const { orderStore, userStore } = useStore();

  const methods = useForm<IOrder>({
    mode: "onBlur"
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;

  useEffect(() => {
    reset(orderStore.dataRow);
  }, [reset, orderStore.dataRow]);

  const onSubmitForm = async (data: IOrder) => {
    //console.log(data)
    orderStore.handleSave(data);
  };


  return (
    <div>
      <Dialog
        open={orderStore.editOpen}
        maxWidth={"lg"}
        fullWidth={true}
        onClose={(event, reason) => {
          if (reason !== 'backdropClick') {          
          }
      }}    
      >
        <DialogTitle id="dialog-title">
          Orderdetails
        </DialogTitle>
        <DialogContent>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmitForm)}>
              <div className={styles.container}>
                <div className={styles.submitbuttons}>
                  <Button
                    // onClick={orderStore.handleUpdateRequest}
                    startIcon={<SaveIcon />}
                    variant="contained"
                    color="primary"
                    size="small"
                    type="submit"
                    disabled={userStore.user?.role !== "SuperAdmin" }
                  >
                    Opslaan
                  </Button>
                  <Button
                    onClick={orderStore.handleCancel}
                    startIcon={<CancelIcon />}
                    variant="contained"
                    color="secondary"
                    size="small"
                  >
                    Sluiten
                  </Button>
                </div>
                <div className={styles.details}>
                  <Typography variant="h6">Algemeen:</Typography>
                  <OrderDetails/>
                </div>
                <div className={styles.transactions}>
                  <Typography variant="h6">Transactieoverzicht:</Typography>
                  <OrderTransactions/>
                </div>
                <div className={styles.deliveries}>
                  <Typography variant="h6">Leveringen:</Typography>
                  <OrderDeliveries/>
                </div>
              </div>
            </form>
          </FormProvider>
        </DialogContent>
      </Dialog>
    </div>
  );
});
