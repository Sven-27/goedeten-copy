import React, { useState } from "react";
import Link from "next/link";
import styles from "styles/customer/dishInfo/DishInfo.module.scss";
import { IDish, Dish } from "models/Dish";
import { Logos } from "data/logos";
import { ImageListItem, ImageListItemBar } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import EuroIcon from "@material-ui/icons/Euro";
import Accordion from "./Accordion";
import Tooltip from "@material-ui/core/Tooltip";
import { useStore } from "contexts/customer/store";
import { observer } from "mobx-react";
import Portions from "./Portions";
import Image from "next/image";
import { CartItem } from "models/Cart";
import { IDailyDish, DailyDish } from "models/DishAvailability";
import { DateTime } from "luxon";

const image = "/assets/images/logos/clochealt.svg";

export default observer(function DishInfo(id: { id: string }) {
	const {
		duurzaamGroen,
		kopStaartGroen,
		lokaalGroen,
		plantaardigGroen,
		seizoenGroen,
	} = Logos;
	const { dishesStore, cartStore, dateStore } = useStore();
	const dishId = dishesStore.selectedDish
		? dishesStore.selectedDish.dishId
		: undefined;
	const defaultInfo: IDish = new Dish();
	const [info, setInfo] = useState<IDish>(defaultInfo);

	if (dishId)
		dishesStore.loadDishDetails(dishId).then((res) => {
			setInfo(res!);
		});

	const cookImg = dishesStore.selectedDish
		? dishesStore.selectedDish.cookPhoto
		: undefined;

	const ip1 = info.p1;
	const ip2 = info.p2;
	const ip3 = info.p3;
	const ip4 = info.p4;
	const ip5 = info.p5;

	const [portionsValue, setPortionsValue] = useState(1);
	const [buttonMinusAccess, setButtonMinusAccess] = useState(false);
	const [buttonPlusAccess, setButtonPlusAccess] = useState(false);

	function handleMinus() {
		if (portionsValue > 1) {
			setPortionsValue(portionsValue - 1);
			setButtonPlusAccess(false);
		} else {
			setButtonMinusAccess(true);
		}
	}

	function handlePlus() {
		if (portionsValue < dishesStore.selectedDish!.currentQuantity) {
			setPortionsValue(portionsValue + 1);
			setButtonMinusAccess(false);
		} else {
			setButtonPlusAccess(true);
		}
	}

	function handleOrder() {
		const dish = dishesStore.selectedDish;

		const dishQuantity = dishesStore.selectedDish
			? dishesStore.selectedDish.currentQuantity
			: 0;

		if (dishId && dishQuantity > 0)
			dishesStore.loadDishDetails(dishId).then((res) => {
				if (dish) {
					const newItem: CartItem = {
						dish,
						price: info.priceLarge,
						quantity: portionsValue,
					};

					const cartItem = cartStore.cartRegistry.find(
						(item) => item.dish.id === dish.id
					);
					if (cartItem) {
						const oldqty = cartItem.quantity;
						const newqty = cartItem.quantity + portionsValue;
						cartStore.updateItem(newItem, oldqty, newqty);
					} else {
						cartStore.addItem(newItem);
					}
					setPortionsValue(1);
				}
			});
	}

	return (
		<div className={styles.dishInfo}>
			<ImageListItem key={info.id} className={styles.main}>
				{dishesStore.selectedDish?.currentQuantity == 0 && (
					<p className={styles.uitverkocht}>UITVERKOCHT</p>
				)}
				<img src={info.photo} alt={info.name} className={styles.dishImage} />
				{DateTime.now()
					.setZone("Europe/Amsterdam", { keepLocalTime: true })
					.toFormat("yyyy-LL-dd") >= dateStore.selectedDay.date2 &&
					cartStore.NLTime >= cartStore.todayAfterEleven && (
						<p className={styles.afterEleven}>
							Het is 11 uur geweest, bestellen voor vandaag is niet meer
							mogelijk.
						</p>
					)}
			<ImageListItemBar
					position="top"
					actionIcon={
						<IconButton>
							<Tooltip title="Lokaal">
								<img
									className={styles.iconImage}
									src={lokaalGroen}
									style={{ display: ip1 ? "inline" : "none" }}
								/>
							</Tooltip>
							<Tooltip title="Seizoensgebonden">
								<img
									className={styles.iconImage}
									src={seizoenGroen}
									style={{ display: ip2 ? "inline" : "none" }}
								/>
							</Tooltip>
							<Tooltip title="Duurzaam voor je lijf">
								<img
									className={styles.iconImage}
									src={duurzaamGroen}
									style={{ display: ip3 ? "inline" : "none" }}
								/>
							</Tooltip>
							<Tooltip title="Van knol tot blad">
								<img
									className={styles.iconImage}
									src={kopStaartGroen}
									style={{ display: ip4 ? "inline" : "none" }}
								/>
							</Tooltip>
							<Tooltip title="Plantaardige eiwitten">
								<img
									className={styles.iconImage}
									src={plantaardigGroen}
									style={{ display: ip5 ? "inline" : "none" }}
								/>
							</Tooltip>
						</IconButton>
					}
					title={
						<IconButton>
							<Link href="/cooks">
								<a>
									<Avatar src={cookImg} alt="" />
								</a>
							</Link>
						</IconButton>
					}
				/>
				<ImageListItemBar
					position="bottom"
					title={info.shortName}
					actionIcon={
						<IconButton size="small">
							<EuroIcon fontSize="small" />
							{info.priceLarge.toFixed(2)}
						</IconButton>
					}
				/>
			</ImageListItem>
			<section className={styles.dishInfo__accordion}>
				<Accordion info={info} />
			</section>
			<section className={styles.portions}>
				<Portions
					handleMinus={handleMinus}
					handlePlus={handlePlus}
					portionsValue={portionsValue}
					maxPortions={dishesStore.selectedDish!.currentQuantity}
					buttonMinusAccess={buttonMinusAccess}
					buttonPlusAccess={buttonPlusAccess}
				/>
			</section>
			<section className={styles.cartButton}>
				<button
					disabled={
						DateTime.now()
							.setZone("Europe/Amsterdam", { keepLocalTime: true })
							.toFormat("yyyy-LL-dd") >= dateStore.selectedDay.date2 &&
						cartStore.NLTime >= cartStore.todayAfterEleven
					}
					onClick={handleOrder}
					className={styles.button}
				>
					<Image src={image} alt="cloche" width="50" height="30" />
				</button>
			</section>
			<div className={styles.backButton}>
				<button className={styles.generalButton} onClick={() => history.back()}>
					TERUG
				</button>
			</div>
		</div>
	);
});
