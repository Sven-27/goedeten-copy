import React from "react";
import styles from "styles/customer/CookProfileStatic.module.scss";
import { observer } from "mobx-react";
import { useStore } from "contexts/customer/store";
import Link from "next/link";

export default observer(function CooksProfileStatic(cookId: {
	cookId: string;
}) {
	const { cooksStore } = useStore();
	//cooksStore.selectedCook = cooksStore.getCook(parseInt(cookId.cookId));

	return (
		<div className={styles.container}>
			<div className={styles.goedeten_img}></div>
			<div className={styles.bar1}>
				<div className={styles.title}>
					<h1>IK BEN EEN KOK BIJ GOEDETEN</h1>
				</div>
			</div>

			<div className={styles.cookinfo}>
				<div className={styles.cook_img}>
					<img src={cooksStore.selectedCook?.photo} />
				</div>
				<div className={styles.textblock}>
					<h1>{cooksStore.selectedCook?.name}</h1>
					<div className={styles.subtitles}>
						<h1>Introductie</h1>
						<p>{cooksStore.selectedCook?.description}</p>
						<h1>Motivatie</h1>
						<p>{cooksStore.selectedCook?.motivation}</p>
						<h1>Specialiteit</h1>
						<p>{cooksStore.selectedCook?.specialization}</p>
					</div>
					<div className={styles.buttonCenter}>
						<Link href="/">
							<button className={styles.generalButton}>POSTCODE CHECK</button>
						</Link>
						<button
							className={styles.generalButton}
							onClick={() => history.back()}
						>
							TERUG
						</button>
					</div>
				</div>
			</div>
			<div className={styles.bar2}>.</div>
		</div>
	);
});
