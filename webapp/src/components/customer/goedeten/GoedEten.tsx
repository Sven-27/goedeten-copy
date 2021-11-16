import React, { useRef } from "react";
import styles from "styles/customer/Goedeten.module.scss";
import Link from "next/link";
import Image from "next/image";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Logos } from "data/logos";

const Accordion = withStyles({
	root: {
		borderRadius: "5pt",
		//   border: "1px solid rgb(28, 58, 44)",
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
		//   backgroundColor: "rgb(255, 255, 219)",
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

const GoedEten = () => {
	const [expanded, setExpanded] = React.useState<string | false>("");
	const ref = useRef<any>();
	const { duurzaamGroen, tomaatTextTaglineDonkerGroen } = Logos;

	const handleChange =
		(panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
			setExpanded(newExpanded ? panel : false);
		};

	return (
		<div className={styles.goedeten}>
			<div className={styles.gelogo}>
				<Image
					className={styles.gelogo}
					src={tomaatTextTaglineDonkerGroen}
					alt="Goedeten-logo"
					width="250"
					height="80"
				/>
			</div>

			<div className={styles.gecontainer}>
				<div className={styles.geimage}>
					<img
						src="/assets/images/goedetenstichting.jpg"
						alt="Jitske &#38; Claudia"
					/>
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
							<h1>Stichting GoedEten</h1>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Stichting GoedEten is de eigenaar van het meest duurzame en
								sociaal maatschappelijke maaltijdbestelplatform van Nederland.
								We vonden het, in tijden van de huidige platformeconomie, wel
								tijd worden voor een platform met een sociale insteek. Jij toch
								ook?
								<br></br>
								<Link href="/stichting">
									<button className={styles.generalButton}>Lees meer</button>
								</Link>
							</Typography>
						</AccordionDetails>
					</Accordion>
				</div>
			</div>

			<div className={styles.gecontainer}>
				<div className={styles.geimage}>
					<img src="/assets/images/goedetenduurzaamheid.jpg" alt="Duurzaam" />
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
							<h1>Duurzaamheid</h1>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Duurzaamheid is een enorm breed begrip en er kunnen vele
								discussies over gevoerd worden. Wanneer we zeggen dat we het
								meest duurzame maaltijdbestelplatform van Nederland zijn,
								bedoelen we daar heel veel mee en ook eigenlijk weer heel
								weinig.Duurzaamheid is een enorm breed begrip en er kunnen vele
								discussies over gevoerd worden. Wanneer we zeggen dat we het
								meest duurzame maaltijdbestelplatform van Nederland zijn,
								bedoelen we daar heel veel mee en ook eigenlijk weer heel
								weinig.
								<br></br>
								<Link href="/duurzaamheid">
									<button className={styles.generalButton}>Lees meer</button>
								</Link>
							</Typography>
						</AccordionDetails>
					</Accordion>
				</div>
			</div>

			<div className={styles.gecontainer}>
				<div className={styles.geimage}>
					<img
						src="/assets/images/goedetencooperatie.jpg"
						alt="Cooperatie Den Haag"
					/>
				</div>
				<div className={styles.accordion}>
					<Accordion
						expanded={expanded === "panel3"}
						onChange={handleChange("panel3")}
					>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel3d-content"
							id="panel3d-header"
						>
							<h1 className={styles.accCooperatiedh}>Cooperatie Den Haag</h1>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Coöperatie GoedEten in Den Haag is de eerste maaltijdaanbieder.
								Deze coöperatie bestaat uit een groep koks die dingen delen en
								samen regelen en zo dus vol aandacht op het koken kunnen
								storten. Wat jij dan weer terugproeft.
								<br></br>
								<Link href="/cooperatiedh">
									<button className={styles.generalButton}>Lees meer</button>
								</Link>
							</Typography>
						</AccordionDetails>
					</Accordion>
				</div>
			</div>

			<div className={styles.gecontainer}>
				<div className={styles.geimage}>
					<img
						src="/assets/images/goedetencontact.jpg"
						alt="Jitske &#38; Claudia"
					/>
				</div>
				<div className={styles.accordion}>
					<Accordion
						expanded={expanded === "panel4"}
						onChange={handleChange("panel4")}
					>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel4d-content"
							id="panel4d-header"
						>
							<h1>Contact</h1>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Heb je vragen over de stichting of coöperatie, of wil je graag
								via social media op de hoogte blijven van alle nieuwtjes, check
								dan hier de contactinformatie.
								<br></br>
								<Link href="/contact">
									<button className={styles.generalButton}>
										Contactinformatie
									</button>
								</Link>
							</Typography>
						</AccordionDetails>
					</Accordion>
				</div>
			</div>
			<div className={styles.buttonCenter}>
				<Link href="/">
					<button className={styles.generalButton}>POSTCODE CHECK</button>
				</Link>
				<button className={styles.generalButton} onClick={() => history.back()}>
					TERUG
				</button>
			</div>
		</div>
	);
};

export default GoedEten;
