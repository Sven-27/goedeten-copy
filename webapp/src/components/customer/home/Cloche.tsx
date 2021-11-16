import React from "react";
import styles from "styles/customer/layout/Cloche.module.scss";
import Image from "next/image";
import { observer } from "mobx-react";

const imageCloche = "/assets/images/logos/cloche.svg";

export default observer(function Cloche() {
	return (
		<section className={styles.cloche}>
			<Image src={imageCloche} alt="Clochedarkgreen" width="50" height="30" />
		</section>
	);
});
