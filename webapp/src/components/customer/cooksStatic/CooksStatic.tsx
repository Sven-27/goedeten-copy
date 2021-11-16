import React, { useEffect } from "react";
import styles from "styles/customer/CooksStatic.module.scss";
import { useStore } from "contexts/customer/store";
import { ICook } from "models/Cook";
import Link from "next/link";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import { observer } from "mobx-react";

const CooksStatic = () => {
	const { cooksStore } = useStore();
	useEffect(() => {
		cooksStore.loadCooks();
	}, []);

	return (
		<div className={styles.container}>
			<div className={styles.photo}></div>
			<div className={styles.bar}>.</div>
			<section className={styles.text}>
				<div className={styles.breadcrumb}>
					<Breadcrumbs separator="›" aria-label="breadcrumb">
						<Link href="/goedeten">
							<a>GoedEten</a>
						</Link>
						<Link href="/cooperatiedh">
							<a>coöperatie</a>
						</Link>
						<Typography color="textPrimary">Koks GoedEten</Typography>
					</Breadcrumbs>
				</div>
				<div className={styles.kop}>
					<h2>De koks van GoedEten Den Haag</h2>
					<br></br>
				</div>
			</section>
			<div className={styles.cooksmodule}>
				{cooksStore.cooksRegistry.map((tile: ICook) => (
					<div key={tile.id} className={styles.koks}>
						<Link href={`/cook_static/${tile.id}`}>
							<a onClick={() => (cooksStore.selectedCook = tile)}>
								<img src={tile.photo} alt={tile.name} />
							</a>
						</Link>
						<div key={tile.id} className={styles.textbox}>
							<Link href={`/cook_static/${tile.id}`}>
								<h1>{tile.name}</h1>
							</Link>
						</div>
					</div>
				))}
			</div>
			<div className={styles.links}>
				<Link href="/">
					<button className={styles.generalButton}>POSTCODE CHECK</button>
				</Link>
				<Link href="javascript:javascript:history.go(-1)">
					<button className={styles.generalButton}>TERUG</button>
				</Link>
			</div>
			<div className={styles.bar}>.</div>
		</div>
	);
};

export default observer(CooksStatic);
