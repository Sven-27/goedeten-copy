import styles from "styles/customer/Duurzaamheid.module.scss";
import { Logos } from "data/logos";
import { Typography } from "@material-ui/core";
import { useRouter } from "next/router";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "next/link";
//#region
const {
	duurzaamGroen,
	kopStaartGroen,
	lokaalGroen,
	plantaardigGroen,
	seizoenGroen,
} = Logos;
const titles = [
	{
		name: "Seizoensgebonden",
		source: seizoenGroen,
		url: "seizoen",
	},
	{
		name: "Lokaal",
		source: lokaalGroen,
		url: "lokaal",
	},
	{
		name: "Van Knol Tot Blad",
		source: kopStaartGroen,
		url: "knolTotBlad",
	},
	{
		name: "Plantaardige Eiwitten",
		source: plantaardigGroen,
		url: "eiwitten",
	},
	{
		name: "Duurzaam Voor Je Lijf",
		source: duurzaamGroen,
		url: "duurzaam",
	},
];
//#endregion
const Duurzaamheid = () => {
	const router = useRouter();
	return (
		<div className={styles.container}>
			<div className={styles.photo}></div>
			<div className={styles.bar}></div>
			<div className={styles.text}>
				<div className={styles.breadcrumb}>
					<Breadcrumbs separator="›" aria-label="breadcrumb">
						<Link href="/goedeten">
							<a>GoedEten</a>
						</Link>
						<Typography color="textPrimary">duurzaamheid</Typography>
					</Breadcrumbs>
				</div>
				<div className={styles.kop}>
					<h2>Duurzaamheid</h2>
					<br></br>
					<p>
						Duurzaamheid is een enorm breed begrip en er kunnen vele discussies
						over gevoerd worden. Wanneer we zeggen dat we het meest duurzame
						maaltijdbestelplatform van Nederland zijn, bedoelen we daar heel
						veel mee en ook eigenlijk weer heel weinig. Met het laatste bedoelen
						we meer dat we onze maaltijdaanbieders niet te veel restricties
						willen opleggen. We geloven namelijk niet dat wij alwetend zijn als
						het gaat om duurzaamheid. Verre van! We geloven wel dat we
						gezamenlijk veel verder komen om duurzaamheid de juiste definitie te
						geven.
					</p>
					<br></br>
					<br></br>
					<p>
						Duurzaamheid is een enorm breed begrip en er kunnen vele discussies
						over gevoerd worden. Wanneer we zeggen dat we het meest duurzame
						maaltijdbestelplatform van Nederland zijn, bedoelen we daar heel
						veel mee en ook eigenlijk weer heel weinig. Met het laatste bedoelen
						we meer dat we onze maaltijdaanbieders niet te veel restricties
						willen opleggen. We geloven namelijk niet dat wij alwetend zijn als
						het gaat om duurzaamheid. Verre van! We geloven wel dat we
						gezamenlijk veel verder komen om duurzaamheid de juiste definitie te
						geven.
					</p>
					<br></br>
					<br></br>
					<p>
						Wil je meer lezen over onze vijf pijlers? Klik op de desbetreffende
						pijler meer informatie.
					</p>
					<br></br>
					<br></br>
				</div>
			</div>
			<div className={styles.list}>
				{titles.map((title, index) => (
					<div className={styles.pijlers} key={index}>
						<div className={styles.avatar}>
							<Link href={`/pijler/${title.url}`}>
								{/* <a onClick={() => router.push({
										pathname: `/pijler/[name]`,
										query: { name: title.url },
										})
									}
									> */}
								<img src={title.source} alt={`pijler_${title.name}`} />
								{/* </a> */}
							</Link>
						</div>
						<div className={styles.tekst}>
							<Link href={`/pijler/${title.url}`}>
								<h1>{title.name}</h1>
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
			<div className={styles.bar}></div>
		</div>
	);
};
export default Duurzaamheid;
