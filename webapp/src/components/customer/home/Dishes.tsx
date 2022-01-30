import Link from "next/link";
import Badge from "@material-ui/core/Badge";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import styles from "styles/customer/home/Dishes.module.scss";
import Carousel from "react-elastic-carousel";
import { IDailyDish } from "models/DishAvailability";
import { useStore } from "contexts/customer/store";
import { observer } from "mobx-react";
import Cloche from "./Cloche";
import { CartItem } from "models/Cart";
import { DateTime } from "luxon";
import dates from "data/datesObject"

const Dishes = () => {
	const { dishesStore, cartStore, dateStore } = useStore();

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
			itemsToShow: 3,
		},
		{
			width: 672,
			itemsToShow: 4,
		},
		{
			width: 1056,
			itemsToShow: 5,
		},
		{
			width: 1312,
			itemsToShow: 7,
		},
		{
			width: 1584,
			itemsToShow: 8,
		},
	];

	return (
		<div className={styles.dishGridList}>
      {
      //  dateStore.dateRegistry.filter(date => (
      //    dateStore.selectedDay.id == date.id
      //  )) && 
      !dishesStore.dishRegistryFiltered.length
         ? (
             <h1>This is a test</h1>
           ) : ( 
			<ImageList
				rowHeight="auto"
				className={styles.grid}
				cols={1}
			>
				<Carousel
					isRTL={false}
					breakPoints={breakPointsDish}
					pagination={true}
					showArrows={false}
				>
					{
          
          dishesStore.dishRegistryFiltered.map(
						(tile: IDailyDish, index: number) => (
							<ImageListItem key={`tile_${index}`} className={styles.tile}>
								<ImageListItemBar
									className={styles.tilebarTop}
									position="top"
									title={tile.dishShortName}
									subtitle={tile.dishCuisine}
									actionIcon={<Avatar src={tile.cookPhoto} />}
								/>

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
									<a
										onClick={() => (dishesStore.selectedDish = tile)}
										className={styles.dishGridLink}
									>
										<img src={tile.dishPhoto} alt={tile.dishName} />
									</a>
								</Link>

								<ImageListItemBar
									position="bottom"
									className={styles.tilebarBottom}
									title={
										<IconButton disabled={true}>
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
												<div>voorraad</div>
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
												onClick={() => {
													handleAddItem((dishesStore.selectedDish = tile));
												}}
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
           )}
			<section className={styles.buttonCenter}>
				<Link href={"/dishes"}>
					<button className={styles.generalButton}>ALLE GERECHTEN</button>
				</Link>
			</section>
		</div>
	);
};

export default observer(Dishes);
