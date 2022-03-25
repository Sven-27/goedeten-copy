import React from 'react';
import { useStore } from 'contexts/customer/store';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

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
})(MuiAccordion)

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgb(255, 255, 219)",
    color: "rgb(28, 58, 44)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    minHeight: 40,
    borderRadius: "5pt",
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
})(MuiAccordionSummary)

const AccordionDetails = withStyles((theme) => ({
  root: {
    // padding: theme.spacing(2),
    backgroundColor: "rgba(0, 0, 0, .03)",
    height: "100%",
    width: "100%",
  },
}))(MuiAccordionDetails)

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>('');
  const { cooksStore } = useStore();
  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" expandIcon={<ExpandMoreIcon />}>
          <Typography>Meer over mij</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {cooksStore.selectedCook!.description}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Motivatie</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {cooksStore.selectedCook!.motivation}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Specialiteit</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {cooksStore.selectedCook!.specialization}
          </Typography>
        </AccordionDetails>
      </Accordion>
          { !cooksStore.selectedCook!.address &&
            !cooksStore.selectedCook!.phoneNumber && 
            !cooksStore.selectedCook!.email ? null : 
      <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4d-content" id="panel4d-header">
          <Typography>Contact Informatie</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
             Adres:    {!cooksStore.selectedCook!.address ? "Geen adres beschikbaar" : cooksStore.selectedCook!.address}<br />
             Telefoon: {!cooksStore.selectedCook!.phoneNumber ? "Geen telefoon beschikbaar" : cooksStore.selectedCook!.phoneNumber}<br />
             Email:    {!cooksStore.selectedCook!.email ? "Geen email beschikbaar" : cooksStore.selectedCook!.email}
          </Typography>
        </AccordionDetails>
      </Accordion>
          }
    </div>
  );
}
