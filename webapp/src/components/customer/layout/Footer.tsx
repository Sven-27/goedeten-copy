import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Logos } from "data/logos";
import styles from "styles/customer/layout/Footer.module.scss";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import { socialMedia } from "data/socialMedia";

const Footer = () => {
	const { facebook, instagram } = socialMedia;
	const { tomaatTextDonkerGroen } = Logos;
	return (
		<div className={styles.footer}>
			<div className={styles.container}>
				<section className={styles.logo}>
					<Link href="/goedeten">
						<a className={styles.goedetenlink}>
							<Image
								src={tomaatTextDonkerGroen}
								alt="Goedeten-logo"
								width="113"
								height="25"
							/>
						</a>
					</Link>
				</section>
				<section className={styles.links}>
					<Link href="/contact">
						<a className={styles.link}>Contact</a>
					</Link>
					<Link href="/privacy">
						<a className={styles.link}>Privacy Verklaring</a>
					</Link>
					<Link href="/terms">
						<a className={styles.link}>Algemene Voorwaarden</a>
					</Link>
					<Link href="/faq">
						<a className={styles.link}>FAQ</a>
					</Link>
				</section>
				<section className={styles.icons}>
					<Link href={instagram}>
						<InstagramIcon className={styles.socialMediaIcon} />
					</Link>
					<Link href={facebook}>
						<FacebookIcon className={styles.socialMediaIcon} />
					</Link>
				</section>
			</div>
		</div>
	);
};

export default Footer;
