import React, { useState, useEffect, useRef } from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { IDish } from "models/Dish";
import styles from "styles/customer/dishInfo/DishInfo.module.scss";
import Link from "next/link";

const Accordion = withStyles({
	root: {
		borderRadius: "5pt",
		border: "1px solid rgb(28, 58, 44)",
		boxShadow: "none",
		"&:not(:last-child)": {
			borderBottom: 0,
		},
		"&:before": {
			display: "none",
		},
		"&$expanded": {
			margin: "auto",
		},
	},
	expanded: {
		color: "rgb(28, 58, 44)",
	},
})(MuiAccordion);

const AccordionSummary = withStyles({
	root: {
		backgroundColor: "rgb(255, 255, 219)",
		color: "rgb(28, 58, 44)",
		borderBottom: "1px solid rgba(0, 0, 0, .125)",
		minHeight: 40,
		borderRadius: "5pt",
		/* 		"&:hover": {
			color: "#c32924",
		}, */
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
		backgroundColor: "rgba(0, 0, 0, .03)",
		display: "flex",
		flexDirection: "column",
	},
}))(MuiAccordionDetails);

interface Props {
	info: IDish;
}

export default function CustomizedAccordions({ info }: Props) {
	const [expanded, setExpanded] = useState<string | false>("");
	const ref = useRef<any>();
  
	useEffect(() => {
		const onBodyClick = (event: any) => {
			if (ref.current.contains(event.target)) {
				return;
			}
			setExpanded(false);
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

	const handleChange =
		(panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
			setExpanded(newExpanded ? panel : false);
		};

	return (
		<div ref={ref}>
			<Accordion
				expanded={expanded === "panel1"}
				onChange={handleChange("panel1")}
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1d-content"
					id="panel1d-header"
				>
					<Typography>Omschrijving</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography className={styles.dishName}>{info.name}</Typography>
					<Typography className={styles.titles}>
						<br></br> Keuken:
					</Typography>
					<Typography>
						{info.cuisineName}, {info.dishCategoryName}
					</Typography>
				 </AccordionDetails>
				<AccordionDetails> 
					<Typography className={styles.titles}>Omschrijving:</Typography>
					<Typography>{info.description}</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === "panel2"}
				onChange={handleChange("panel2")}
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel2d-content"
					id="panel2d-header"
				>
					<Typography>Ingrediënten</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography className={styles.titles}>
            Ingrediënten:
						<br></br>
						<br></br>
            </Typography>
					<Typography>
            {info.allIngredientsField}
						{/* {info.ingredients.map((item) => item.name).join(", ")} */}
					</Typography>
					{/* <Typography className={styles.letop}>
						<b>* Let op:</b> De ingrediënten kunnen altijd afwijken ivm het
						gebruik van seizoensproducten. Wanneer je een allergie /
						intolerantie hebt, geef dit dan aan het einde door bij het
						afrekenen.
					</Typography> */}
			 </AccordionDetails>
				<AccordionDetails>
					<Typography className={styles.titles}>Allergenen:</Typography>
					<Typography className={styles.geen}>
						{info.allergens.length !== 0 ? (
							info.allergens.map((item) => item.name).join(", ")
						) : (
							'geen allergenen'
						)}
					</Typography>
					<Typography className={styles.letop}>
					<br></br>
						<b>* Let op:</b> De gerechten worden bereid in een keuken waarin
						verschillende (soorten) gerechten bereid worden, hierdoor kunnen er
						altijd sporen van allergenen voorkomen in de gerechten.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === "panel3"}
				onChange={handleChange("panel3")}
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel3d-content"
					id="panel3d-header"
				>
					<Typography>Opwarmen</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>{info.heating}</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion
				expanded={expanded === "panel4"}
				onChange={handleChange("panel4")}
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel4d-content"
					id="panel4d-header"
				>
					<Typography>Duurzaamheidpijlers</Typography>
				</AccordionSummary>
				{info.p1 ? (
        <AccordionDetails>
						<Typography className={styles.titles}>Lokaal en seizoensgebonden</Typography>
						<Typography>{info.p1}</Typography>
					 </AccordionDetails> 
				) : (
					""
				)}
				{info.p2 ? (
					<AccordionDetails>
						<Typography className={styles.titles}>Gezonde aarde</Typography>
						<Typography>{info.p2}</Typography>
					 </AccordionDetails>
				) : (
					""
				)}
				{info.p3 ? (
					<AccordionDetails>
						<Typography className={styles.titles}>
							Duurzaam voor je lijf:
						</Typography>
						<Typography>{info.p3}</Typography>
					</AccordionDetails>
				) : (
					""
				)}
				{info.p4 ? (
					<AccordionDetails>
						<Typography className={styles.titles}>
							Van knol tot blad:
						</Typography>
						<Typography>{info.p4}</Typography>
					</AccordionDetails>
				) : (
					""
				)}
				{info.p5 ? (
					<AccordionDetails>
						<Typography className={styles.titles}>
							Plantaardige eiwitten:
						</Typography>
						<Typography>{info.p5}</Typography>
						{/*<br></br>*/}
					
					</AccordionDetails>
				) : (
					""
				)}
				<AccordionDetails>
					<Typography className={styles.link}>
						<Link href="/duurzaamheid">
							<button className={styles.generalButton}>
						  	    LEES MEER
							</button>
              </Link>
					</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}
