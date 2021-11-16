import React from "react";
import Link from "next/link";
import Badge from "@material-ui/core/Badge";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import IconButton from "@material-ui/core/IconButton";
import styles from "styles/customer/cookInfo/SimpleDishes.module.scss";
import Carousel from "react-elastic-carousel";
import { observer } from "mobx-react";
import { useStore } from "contexts/customer/store";
import { IDailyDish } from "models/DishAvailability";
import Cloche from "components/customer/home/Cloche";
import { CartItem } from "models/Cart";
import { DateTime } from "luxon";

const SimpleDishGridList = () => {
	const { cooksStore, cartStore, dishesStore } = useStore();

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

	const breakPointsDish = [
		{
			width: 1,
			itemsToShow: 2,
		},
		{
			width: 414,
			itemsToShow: 2,
		},
		{
			width: 900,
			itemsToShow: 3,
		},
		{
			width: 1500,
			itemsToShow: 4,
		},
	];

	return (
		<div className={styles.simpleDishGridList__container}>
			<div className={styles.simpleDishGridList}>
				<ImageList rowHeight="auto" className={styles.grid} cols={0}>
					<Carousel
						isRTL={false}
						breakPoints={breakPointsDish}
						pagination={true}
						showArrows={false}
					>
						{dishesStore.dishRegistryFiltered.map(
							(tile: IDailyDish, index: number) =>
								tile.cookId == cooksStore.selectedCook?.id && (
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
													Het is elf uur geweest, bestellen voor vandaag is
													helaas niet meer mogelijk.
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
												<IconButton
													disabled={true}
													className={styles.iconButton}
												>
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
														voorraad
													</Badge>
												</IconButton>
											}
											actionIcon={
												<a>
													<IconButton
														className={styles.icon}
														disabled={
															DateTime.now()
																.setZone("Europe/Amsterdam", {
																	keepLocalTime: true,
																})
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
					</Carousel>
				</ImageList>
			</div>
		</div>
	);
};

export default observer(SimpleDishGridList);
