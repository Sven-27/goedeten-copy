import React from "react";
import { Badge } from "@material-ui/core";
import styles from "styles/customer/layout/Cloche.module.scss";
import Image from "next/image";
import { observer } from "mobx-react";
import { useStore } from "contexts/customer/store";

const imageCloche = "/assets/images/logos/cloche.svg";

export default observer(function Cloche() {
	const { cartStore } = useStore();
	const totalItems = cartStore.cartSize;

	return (
		<section className={styles.cloche}>
			<Image src={imageCloche} alt="Clochedarkgreen" width="50" height="30" />
			<Badge
				className={styles.badge}
				badgeContent={totalItems}
				color="secondary"
				overlap="circular"
			></Badge>
		</section >
	);
});
