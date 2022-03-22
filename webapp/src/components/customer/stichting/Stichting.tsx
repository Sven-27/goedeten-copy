import React, { useRef } from "react";
import styles from "styles/customer/Stichting.module.scss";
import Link from "next/link";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useRouter } from "next/router";

const Accordion = withStyles({
	root: {
		borderRadius: "5pt",
		boxShadow: "none",
		width: "15,76125rem",
		marginLeft: "3rem",

		"&:not(:last-child)": {
			borderBottom: 0,
		},
		"&:before": {
			display: "none",
		},
		"&$expanded": {
			marginLeft: "3rem",
			marginTop: 0,
		},
	},
	expanded: {
		color: "rgb(28, 58, 44)",
	},
})(MuiAccordion);

const AccordionSummary = withStyles({
	root: {
		color: "rgb(28, 58, 44)",
		borderBottom: "1px solid rgba(0, 0, 0, .125)",
		height: 96,
		borderRadius: "5pt",
		paddingLeft: "4rem",
		paddingTop: "0.5rem",
		"&$expanded": {
			minHeight: 40,
			borderRadius: "5pt",
		},
	},
	content: {
		"&$expanded": {
			margin: "12px 0",
		},
	},
	expanded: {
		borderRadiusBottom: "50px",
	},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
	root: {
		padding: theme.spacing(2),
	},
}))(MuiAccordionDetails);

const Stichting = () => {
	const [expanded, setExpanded] = React.useState<string | false>("");
	const ref = useRef<any>();
	const router = useRouter();

	const handleChange =
		(panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
			setExpanded(newExpanded ? panel : false);
		};
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
						<Typography color="textPrimary">stichting</Typography>
					</Breadcrumbs>
				</div>

				<div className={styles.kop}>
					<h2>Stichting goedeten</h2>
					<br></br>
					<p>
						Stichting GoedEten is de eigenaar van het meest duurzame en sociaal 
            maatschappelijke maaltijdbestelplatform van Nederland. We vonden het, 
            in tijden van de huidige platformeconomie, wel tijd worden voor een platform met een sociale en duurzame insteek. 
            Eén zonder winstoogmerk en met veel aandacht voor mens en natuur. Zo ontstond het GoedEten-platform.
					</p>
					<br></br>
					<br></br>
					<p>
						Hoe duurzaam zijn we? Op het platform werken we met vijf duurzaamheidspijlers. 
            Deze pijlers communiceren we vooraf met onze maaltijdaanbieders. We informeren de koks over de mogelijkheden 
            op het gebied van duurzaam voedsel. De keuze laten we bij hem/haar/hen; zo kan een kok voldoen aan één van 
            de duurzaamheidspijlers of aan alle vijf. Op het bestelplatform vind je de informatie per
            gerecht en kok; zo kun je lezen aan welke duurzaamheidspijler(s) het voldoet en waarom. 
            Op die manier kun jij als klant altijd bewust de keuze maken over wat je eet. 
						<a href="/duurzaamheid">
							Lees hier meer over onze duurzaamheidspijlers.
						</a>
					</p>
					<br></br>
					<br></br>
					<p>
						Een commercieel bedrijf in een stichting, dat klinkt misschien een beetje onlogisch. 
            Wij vinden natuurlijk van niet. Als het gaat om eigenaarschap geloven wij dat een bedrijf 
            duurzamer kan bestaan wanneer het bedrijf in eigendom van zichzelf (lees: haar missie) is en niet in die 
            van aandeelhouders of andere financieel belanghebbenden.
						<br></br>
					</p>
					<br></br>
					<br></br>
					<p>
						Onze missie is om de voedselindustrie positief te veranderen. Geld speelt hierin een belangrijke rol en met 
            name hoe het geld verdeeld wordt. Zo worden de boer, fietser, kok en anderen binnen de keten op een zo 
            eerlijk mogelijke manier beloond. We geloven dat - wanneer er hoge leningen terugbetaald moeten worden of 
            dividend uitbetaald moeten worden - deze drukken op eerlijke lonen voor onze maaltijdbereiders en producenten 
            van onze producten.
					</p>
					<br></br>
					<br></br>
					<p>
						Om de kwaliteit van onze maaltijden te waarborgen en grip te houden op onze duurzaamheidspijlers, 
            werken we voornamelijk met coöperaties van koks in verschillende steden/gebieden. 
            Dit zijn coöperaties van koks die gezamenlijk inkopen bij (lokale) leveranciers, 
            een keuken delen en andere randzaken combineren. Wil je meer weten over onze coöperatie in Den Haag? 
            <a href="/cooperatiedh">Lees dan hier meer</a>
					</p>
					<br></br>
					<br></br>
					<p>
						Ook het ontwikkelen van het GoedEten platform doen we op een sociaal maatschappelijke manier. 
            Het platform had niet kunnen bestaan zonder de samenwerking met Stichting Bee-Ideas. 
            Bee-Ideas investeert in softwareprojecten met impact op mens, maatschappij en milieu. Zij bieden mensen die op dit 
            moment een uitkering krijgen via het UWV de mogelijkheid om een traject te volgen in samenwerking met een opdrachtgever 
            met een softwarevraag. Tijdens dit project leerden zij alles over IT (programmeren, gebruiksvriendelijkheid, 
            digitale vormgeving, etc.). Samen bouwden wij aan het GoedEten-platform en het resultaat mag er zijn!
					</p>
					<br></br>
					<br></br>
					<p>
				   	Het idee van GoedEten kwam niet uit de lucht vallen. Hier hebben twee mensen best wel een beetje over nagedacht. 
             Maak kennis met de initiatiefnemers van GoedEten:
					</p>
					<br></br>
					<br></br>
				</div>
			</div>
			<div className={styles.initiatiefnemers}>
				<h1> Maak kennis met de initiatiefnemers van GoedEten</h1>
				<div className={styles.Claudia}>
					<div className={styles.Claudia_img}>
						<img src="/assets/images/Claudia.png" alt="Claudia Vork" />
					</div>
					<div className={styles.accordion}>
						<Accordion
							expanded={expanded === "panel1"}
							onChange={handleChange("panel1")}
						>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel1d-content"
								id="panel1d-header"
							>
								<Typography variant="h1">Claudia Vork</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography>
									Opgeleid als diëtist en dan toch een maaltijdbestelplatform opbouwen. Dat is toch vreemd? Voor Claudia niet, 
                  want op dit platform komt namelijk alles samen wat zij belangrijk vindt. Hoe bekijkt deze creatieveling het koken en eten?
									<br></br>
									<br></br>
									<Link href="/initiatiefnemers">
										<button className={styles.generalButton}>Lees meer</button>
									</Link>
								</Typography>
							</AccordionDetails>
						</Accordion>
					</div>
				</div>
				<div className={styles.Jitske}>
					<div className={styles.Jitske_img}>
						<img src="/assets/images/Jitske.png" alt="Jitske Bloemsma" />
					</div>
					<div className={styles.accordion}>
						<Accordion
							expanded={expanded === "panel2"}
							onChange={handleChange("panel2")}
						>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel2d-content"
								id="panel2d-header"
							>
								<Typography variant="h1">Jitske Bloemsma</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography>
									Vroeger stond Jitske nog dagelijks te koken vanuit de fysieke zaak in de Reinkenstraat. 
                  Die tijd is inmiddels voorbij, maar de missie & visie van GoetEten wordt zeker doorgezet. 
                  Hoe zit dat met die visie en is Jitske nu een bourgondiër of niet?
									<br></br>
									<br></br>
									<Link href="/initiatiefnemers">
										<button className={styles.generalButton}>Lees meer</button>
									</Link>
								</Typography>
							</AccordionDetails>
						</Accordion>
					</div>
				</div>
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

export default Stichting;
