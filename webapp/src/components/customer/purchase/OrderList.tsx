import React, { useState, useEffect } from "react";
import styles from "styles/customer/purchase/OrderList.module.scss";
import { CartItem } from "models/Cart";
import {
	List,
	ListItem,
	ListItemText,
	ListItemSecondaryAction,
	IconButton,
	MenuItem,
	Select,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { useStore } from "contexts/customer/store";
import { observer } from "mobx-react";
import Carousel from "react-elastic-carousel";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import * as momentLocal from "moment";
// import 'moment/locale/nl';
import moment from "moment-timezone";
import { DateTime } from "luxon";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		modal: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
		},
		paper: {
			backgroundColor: theme.palette.background.paper,
			border: "2px solid #000",
			boxShadow: theme.shadows[5],
			padding: theme.spacing(2, 4, 3),
		},
	})
);
interface Props {
	totalSom: number;
}

function TotalText({ totalSom }: Props) {
	return (
		<>
			<div className={styles.deliveryCost}>
				<p>Bezorgkosten:</p>

				<span>€ 2.50</span>
			</div>

			<div className={styles.totalCost}>
				<p>Totaal:</p>
				<span>€ {totalSom.toFixed(2)}</span>
			</div>
		</>
	);
}

const OrderList = () => {
	const { cartStore } = useStore();
	const classes = useStyles();
	const [open, setOpen] = useState<boolean>(false);
	const [selected, setSelected] = useState<CartItem | undefined>(undefined);

	const handleChange = (
		item: CartItem,
		event: React.ChangeEvent<{ value: unknown }>
	) => {
		let oldqty = item.quantity;
		let newqty = event.target.value as number;
		cartStore.updateItem(item, oldqty, newqty);
	};

	const handleOpen = (item: CartItem) => {
		setOpen(true);
		setSelected(item);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const breakPoints = [
		{
			width: 1,
			itemsToShow: 1,
		},
		{
			width: 414,
			itemsToShow: 2,
		},
		{
			width: 1056,
			itemsToShow: 3,
		},
		{
			width: 1312,
			itemsToShow: 4,
		},
	];

	return (
    <section className={styles.listContainer}>
      <Carousel
        isRTL={false}
        breakPoints={breakPoints}
        pagination={true}
        showArrows={false}
      >
        {cartStore.cartGroupedByDate.map(([date, cartItems], index) => (
          <List
            key={date}
            className={
              cartStore.cartGroupedByDate.length == 1
                ? `${styles.list} ${styles.list1}`
                : `${styles.list} ${styles.list2}`
            }
            style={{
              backgroundImage:
                index % 2
                  ? 'url("/assets/images/backgroundimage.png")'
                  : '	url("/assets/images/backgroundimageBeige.png")',
            }}
          >
            <p className={styles.date}>
              {DateTime.fromISO(date).toLocaleString()}
            </p>
            <h4>Gerechten in winkelwagen:</h4>
            <div className={styles.dishesContainer}>
              {cartItems.map(
                (item: CartItem, index: number) =>
                  item.dish.date === date && (
                    <List key={index} className={styles.container}>
                      <ListItem className={styles.leftContainer}>
                        <IconButton
                          className={styles.deleteButton}
                          onClick={() => handleOpen(item)}
                        >
                          <a>
                            <DeleteIcon className={styles.deleteIcon} />
                          </a>
                        </IconButton>

                        <h4>{`${item.dish.dishShortName} `} </h4>
                      </ListItem>
                      <ListItem className={styles.right}>
                        <ListItemSecondaryAction
                          className={styles.rightContainer}
                        >
                          <p className={styles.numberOfDishes}>Aantal:</p>
                          <Select
                            className={styles.select}
                            label="Aantal"
                            value={item.quantity}
                            onChange={(event) => {
                              handleChange(item, event);
                            }}
                          >
                            {Array.from(
                              {
                                length: item.dish.currentQuantity,
                              },
                              (_, i) => i + 1
                            ).map((selectOption) => (
                              <MenuItem
                                className={styles.numberContainer}
                                key={selectOption}
                                value={selectOption}
                              >
                                <label>{selectOption}</label>
                              </MenuItem>
                            ))}
                          </Select>
                          <ListItemText className={styles.itemPrice} />
                          <p>{`€ ${(item.price * item.quantity).toFixed(
                            2
                          )}`}</p>
                        </ListItemSecondaryAction>
                      </ListItem>
                    </List>
                  )
              )}
              <div className={styles.totalContainer}>
                {DateTime.fromISO(date) < cartStore.nowDate ||
                (DateTime.fromISO(date) <= cartStore.nowDate &&
                  cartStore.nowTime >= 11) ? (
                  <p style={{ color: "#c32924", margin: "0.5rem" }}>
                    {" "}
                    Het is 11 uur geweest, bestellen voor vandaag is niet meer
                    mogelijk.
                  </p>
                ) : (
                  <TotalText totalSom={cartStore.dailyTotal(cartItems)} />
                )}
              </div>
            </div>

            {/* datum {DateTime.fromISO(date).toISO()} || nowDate {cartStore.nowDate.toISO()} || nowTime {cartStore.nowTime} */}
          </List>
        ))}
      </Carousel>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">
              Weet u zeker dat u dit gerecht wilt annuleren?
            </h2>
            <button
              className={styles.generalButton}
              onClick={() => {
                cartStore.removeItem(selected!);
                handleClose();
              }}
            >
              Ja
            </button>
            <button className={styles.generalButton} onClick={handleClose}>
              Nee
            </button>
          </div>
        </Fade>
      </Modal>
    </section>
  );
};
export default observer(OrderList);
