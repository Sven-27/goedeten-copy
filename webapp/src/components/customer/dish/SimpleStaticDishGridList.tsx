import React from "react";
import Link from "next/link";
import Badge from "@material-ui/core/Badge";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import IconButton from "@material-ui/core/IconButton";
import styles from "styles/customer/dish/SimpleStaticDishes.module.scss";
import { observer } from "mobx-react";
import { useStore } from "contexts/customer/store";
import { IDailyDish } from "models/DishAvailability";
import Cloche from "./Cloche";
import { CartItem } from "models/Cart";
import { DateTime } from "luxon";

const SimpleStaticDishGridList = () => {
	const { cartStore, dishesStore } = useStore();

	const handleAddItem = (dish: IDailyDish) => {
		const dishId = dishesStore.selectedDish
			? dishesStore.selectedDish.dishId
			: undefined;

		const dishQuantity = dishesStore.selectedDish
			? dishesStore.selectedDish.currentQuantity
			: 0;

		if (dishId && dishQuantity > 0)
			dishesStore.loadDishDetails(dishId).then((res) => {
				if (dish) {
					const newItem: CartItem = {
						dish,
						price: res!.priceLarge,
						quantity: 1,
					};
					const cartItem = cartStore.cartRegistry.find(
						(item) => item.dish.id === dish.id
					);

					if (cartItem) {
						const oldqty = cartItem.quantity;
						const newqty = cartItem.quantity + 1;
						cartStore.updateItem(newItem, oldqty, newqty);
					} else {
						cartStore.addItem(newItem);
					}
				}
			});
	};

	return (
		<div className={styles.simpleDishGridList}>
			<ImageList className={styles.grid} cols={0}>
				{dishesStore.dishRegistryFiltered.map(
					(tile: IDailyDish, index: number) => (
						<ImageListItem key={`tile_${index}`} className={styles.tile}>
							{tile.currentQuantity == 0 && (
								<Link href={`/dish/${tile.dishId}`}>
									<a
										onClick={() => (dishesStore.selectedDish = tile)}
										className={styles.cart}
									>
										UITVERKOCHT
									</a>
								</Link>
							)}
							{DateTime.now()
								.setZone("Europe/Amsterdam", { keepLocalTime: true })
								.toFormat("yyyy-LL-dd") >= tile.date.substring(0, 10) &&
								cartStore.NLTime >= cartStore.todayAfterEleven && (
									<p>
										Het is 11 uur geweest, bestellen voor vandaag is niet meer
										mogelijk.
									</p>
								)}
							<Link href={`/dish/${tile.dishId}`}>
								<a onClick={() => (dishesStore.selectedDish = tile)}>
									<img src={tile.dishPhoto} alt={tile.dishName} />
								</a>
							</Link>
							<ImageListItemBar
								className={styles.header}
								position="top"
								title={tile.dishShortName}
								subtitle={tile.dishCuisine}
							/>
							<ImageListItemBar
								position="bottom"
								className={styles.footer}
								title={
									<IconButton>
										<Badge
											className={styles.voorraad}
											badgeContent={tile.currentQuantity}
											color="primary"
											showZero
											anchorOrigin={{
												vertical: "top",
												horizontal: "left",
											}}
										>
											<div className={styles.voorraadText}>voorraad</div>
										</Badge>
									</IconButton>
								}
								actionIcon={
									<a>
										<IconButton
											className={styles.icon}
											disabled={
												DateTime.now()
													.setZone("Europe/Amsterdam", { keepLocalTime: true })
													.toFormat("yyyy-LL-dd") >=
													tile.date.substring(0, 10) &&
												cartStore.NLTime >= cartStore.todayAfterEleven
											}
											onClick={() =>
												handleAddItem((dishesStore.selectedDish = tile))
											}
										>
											<Cloche />
										</IconButton>
									</a>
								}
							/>
						</ImageListItem>
					)
				)}
			</ImageList>
		</div>
	);
};

export default observer(SimpleStaticDishGridList);
