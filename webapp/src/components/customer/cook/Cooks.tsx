import React from "react";
import SimpleCookGridList from "./SimpleCookGridList";
import styles from "styles/customer/cooks/Cooks.module.scss";

const Cooks = () => {
	return (
		<div className={styles.cooks}>
			<div className={styles.slogan}>
				<div className={styles.title}>
					<h1>onze koks koken bewust</h1>
				</div>
			</div>
			<div className={styles.cooks__goed_eten}></div>
			<div className={styles.cookGridList}>
				<SimpleCookGridList />
			</div>
			<div>
				<button className={styles.generalButton} onClick={() => history.back()}>
					TERUG
				</button>
			</div>
		</div>
	);
};

export default Cooks;
