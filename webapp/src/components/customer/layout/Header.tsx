import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Logos } from "data/logos";
import { useRouter } from "next/router";
import styles from "styles/customer/layout/Header.module.scss";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import routes from "data/routes";
import dynamic from "next/dynamic";
import { NextLink } from "./NextLink";
import Link from "next/link";
import { useStore } from "contexts/customer/store";

const Cloche = dynamic(() => import("./Cloche"), { ssr: false });

const Header = () => {
	const [buttonState, setButtonState] = useState<boolean>(true);
	const { cartStore } = useStore();
	const { tomaatLogo } = Logos;
	const ref = useRef<any>();

	const MINUTE_MS = 60000; // minute in milliseconds

	useEffect(() => {
		if (typeof window !== "undefined") {
			const interval = setInterval(() => {
				cartStore.syncTime();
			}, MINUTE_MS); // every 1 minute, sync with server-time
			return () => clearInterval(interval); // This is the unmount function, to clear your interval to prevent memory leaks.
		}
	}, []);

	useEffect(() => {
		const onBodyClick = (event: any) => {
			if (ref.current.contains(event.target)) {
				return;
			}
			setButtonState(true);
		};
		if (typeof window !== "undefined") {
			document.body.addEventListener("click", onBodyClick, { capture: true });
		}
		return () => {
			if (typeof window !== "undefined") {
				document.body.removeEventListener("click", onBodyClick, {
					capture: true,
				});
			}
		};
	}, []);

	const router = useRouter();

	const path = routes;

	return (
		<div ref={ref} className={styles.header}>
			<div className={styles.logo}>
				<Link href="/home">
					<a>
						<Image
							src={tomaatLogo}
							alt="Goedeten-logo"
							width="49"
							height="49"
						/>
					</a>
				</Link>
        <Link href="/hoehetwerkt"><a className={styles.greenButton}>Zo werkt het</a></Link>
			</div>

			<section className={styles.links}>
				<NextLink href="/home">Home</NextLink>
				<NextLink href="/dishes">Gerechten</NextLink>
				<NextLink href="/cooks">Koks</NextLink>
			</section>

			<div className={styles.header__container}>
				<div className={styles.cloche}>
					<NextLink href="/purchase">
						<Cloche />
					</NextLink>
				</div>
				<section className={buttonState ? styles.hidden : styles.header__links}>
					<ul className={styles.header__list}>
						{path.map(({ name, link }, index: number) => (
							<li key={`link_${index}`}>
								<NextLink href={link}>
									<div className={styles.header__link}>
										<h3>{name}</h3>
									</div>
								</NextLink>
							</li>
						))}
					</ul>
				</section>
			</div>
			<section
				className={styles.menu}
				onClick={() => setButtonState(!buttonState)}
			>
				{buttonState ? (
					<MenuRoundedIcon className={styles.menuIcon} />
				) : (
					<CloseRoundedIcon className={styles.roundedIcon} />
				)}
			</section>
		</div>
	);
};

export default Header;
