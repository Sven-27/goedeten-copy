import React from "react";
import styles from "styles/customer/cookInfo/NoDishes.module.scss";

const NoDishes = () => {
	return (
		<div className={styles.container}>
			<div className={styles.cook_absent}>
				<p>
					Ik kook op deze dag niet. Kijk in de kalender wanneer je wel iets
					lekkers van mij kunt bestellen!
				</p>
			</div>
		</div>
	);
};

export default NoDishes;
