import React from "react";
import styles from "styles/customer/Deliverydetails.module.scss";

const NoZipcode = () => {
	return (
		// <div className={styles.container}>
		<p className={styles.error}>
			Er kan helaas niet worden bezorgd op bovenstaand afleveradres, het valt
			buiten ons bezorggebied.
		</p>
		// </div>
	);
};

export default NoZipcode;
