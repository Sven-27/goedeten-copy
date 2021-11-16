import React from "react";
import SimpleStaticDishGridList from "./SimpleStaticDishGridList";
import { observer } from "mobx-react";
import styles from "styles/customer/dish/Dish.module.scss";
import Dates from "components/customer/home/Dates";

const Dish = () => {
	return (
		<div className={styles.container}>
			<div className={styles.dish}>
				<div className={styles.slogan}>
					<div className={styles.title}>
						<h1>ZIN IN GOEDETEN</h1>
					</div>
				</div>
				<div className={styles.dishes_calendar}>
					<div>
						<Dates />
					</div>
				</div>
				<div className={styles.staticDishGridList}>
					<div>
						<SimpleStaticDishGridList />
					</div>
				</div>
				<div>
					<button
						className={styles.generalButton}
						onClick={() => history.back()}
					>
						TERUG
					</button>
				</div>
			</div>
		</div>
	);
};

export default observer(Dish);
