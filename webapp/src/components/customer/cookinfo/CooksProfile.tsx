import React from "react";
import styles from "styles/customer/cookInfo/CooksProfile.module.scss";
import Dates from "components/customer/home/Dates";
import Accordion from "./Accordion";
import CooksHeadshot from "./CooksHeadshot";
import SimpleDishGridList from "./SimpleDishGridList";
import { observer } from "mobx-react";
import { useStore } from "contexts/customer/store";
import NoDishes from "./NoDishes";

export default observer(function CooksProfile(cookId: { cookId: string }) {
	const { cooksStore, dishesStore } = useStore();
//	cooksStore.selectedCook = cooksStore.getCook(parseInt(cookId.cookId));

	return (
		<div className={styles.cooksProfile}>
			<div className={styles.photowrapper}>
				<section className={styles.headshot}>
					<CooksHeadshot />
				</section>
			</div>
			<section className={styles.accordion}>
				<Accordion />
			</section>
			<section className={styles.dates}>
				<Dates />
			</section>
			<div className={styles.dishes}>
				<section className={styles.grid}>
					{dishesStore.dishRegistryFiltered.filter(
						(item) => item.cookId == cooksStore.selectedCook?.id
					).length > 0 ? (
						<SimpleDishGridList />
					) : (
						<NoDishes />
					)}
				</section>
			</div>
			<div className={styles.links}>
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
});
