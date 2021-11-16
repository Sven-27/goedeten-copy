import React, { useEffect } from "react";
import Link from "next/link";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import styles from "styles/customer/home/Cooks.module.scss";
import { ICook } from "models/Cook";
import Carousel from "react-elastic-carousel";
import { useStore } from "contexts/customer/store";
import { observer } from "mobx-react";

const Cooks = () => {
	const { cooksStore, dateStore } = useStore();

	useEffect(() => {
		cooksStore.loadPlannedCooks();
	}, [dateStore.selectedDay]);

	const breakPointsCooks = [
		{
			width: 1,
			itemsToShow: 2,
		},
		{
			width: 415,
			itemsToShow: 3,
		},
		{
			width: 672,
			itemsToShow: 4,
		},
		{
			width: 1024,
			itemsToShow: 7,
		},
	];

	return (
		<div className={styles.cookGridList}>
			<ImageList
				rowHeight="auto"
				className={styles.cookGridList__grid}
				cols={0}
			>
				<Carousel
					isRTL={false}
					breakPoints={breakPointsCooks}
					pagination={true}
					showArrows={false}
				>
					{cooksStore.cooksRegistryByDate.map((tile: ICook) => (
						<ImageListItem key={tile.id} className={styles.cookGridList__tile}>
							<Link href={`/cook/${tile.id}`}>
								<a onClick={() => (cooksStore.selectedCook = tile)}>
									<img src={tile.photo} alt={tile.name} />
								</a>
							</Link>
							<ImageListItemBar
								position="bottom"
								title={tile.name}
								className={styles.tilebarBottom}
							/>
						</ImageListItem>
					))}
				</Carousel>
			</ImageList>
			<section className={styles.buttonCenter}>
				<Link href="/cooks">
					<button className={styles.generalButton}>ALLE KOKS</button>
				</Link>
			</section>
		</div>
	);
};

export default observer(Cooks);
