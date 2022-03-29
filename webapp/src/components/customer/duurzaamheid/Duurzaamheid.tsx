import styles from "styles/customer/Duurzaamheid.module.scss";
import { Logos } from "data/logos";
import { Typography } from "@material-ui/core";
import { useRouter } from "next/router";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "next/link";
import HomeButton from "./../../custom_controls/HomeButton";

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
		name: "Gezonde aarde",
		source: seizoenGroen,
		url: "gezondeaarde",
	},
	{
		name: "Lokaal en seizoensgebonden",
		source: lokaalGroen,
		url: "lokaalenseizoensgebonden",
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
		url: "duurzaamvoorjelijf",
	},
];
//#endregion
const Duurzaamheid = () => {
	const router = useRouter();
	return (
		<div className={styles.container}>
			<HomeButton/>
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
						Duurzaamheid is een enorm breed begrip en er kunnen vele discussies over gevoerd worden. 
            Wanneer we zeggen dat we het meest duurzame maaltijdbestelplatform van Nederland zijn, bedoelen we dat ook. 
            Echter zit er nog wel beweging in het begrip en we willen het graag samen met jou en de koks verder verfijnen.
					</p>
					<br></br>
					<br></br>
					<p>
						We weten namelijk dat wij niet alwetend zijn als het gaat om duurzaamheid. 
            We geloven wel dat we gezamenlijk veel verder komen om duurzaamheid de juiste definitie te geven. 
            Hoe GoedEten tegen duurzaamheid aankijkt, leggen we je graag uit aan de hand van de 5 pijlers binnen het concept. 
            Op deze manier weet jij als klant goed waarom je een gerecht kiest en weet de kok hoe er binnen het 
            concept een super lekkere maaltijd gekookt kan worden.
					</p>
					<br></br>
					<br></br>
					<p>
						Wil je meer lezen over onze vijf duurzaamheidspijlers? Klik dan op de desbetreffende pijler hieronder voor meer informatie.
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
								<img src={title.source} alt={`pijler_${title.name}`} />
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
