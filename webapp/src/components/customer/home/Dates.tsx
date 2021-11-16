import React from "react";
import styles from "styles/customer/home/Dates.module.scss";
import Carousel from "react-elastic-carousel";
import { useStore } from "contexts/customer/store";
import { observer } from "mobx-react";

const Dates = () => {
	const { dateStore } = useStore();

	const breakPoints = [
		{
			width: 1,
			itemsToShow: 2,
		},
		{
			width: 415,
			itemsToShow: 3,
		},
		{
			width: 768,
			itemsToShow: 5,
		},
		{
			width: 1024,
			itemsToShow: 7,
		},
	];

	const days = dateStore.dateRegistry.map((day) => (
		<button
			onClick={() => (dateStore.selectedDay = day)}
			key={day.id}
			className={
				day.id == dateStore.selectedDay.id
					? styles.calendarButton_selected
					: styles.calendarButton
			}
		>
			{day.id <= 3 ? day.name : day.date}
		</button>
	));

	return (
		<div className={styles.dates}>
			<Carousel
				isRTL={false}
				breakPoints={breakPoints}
				showArrows={true}
				pagination={false}
			>
				{days}
			</Carousel>
		</div>
	);
};

export default observer(Dates);
