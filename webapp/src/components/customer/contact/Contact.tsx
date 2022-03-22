import React from "react";
import styles from "styles/customer/Contact.module.scss";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link,
} from "@material-ui/core"
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { useRouter } from 'next/router';
import { socialMedia } from 'data/socialMedia';

const Contact = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <img className={styles.photo} />

      <div className={styles.bar1}></div>
      <div className={styles.contactcontainer}>
        <div className={styles.breadcrumbstylo}>

          <div className={styles.breadcrumb}>
            <Breadcrumbs separator="›" aria-label="breadcrumb">
              <Link href="/goedeten">
                <a>GoedEten</a>
              </Link>
              <Typography color="textPrimary">Contact</Typography>
            </Breadcrumbs>
          </div>

        </div>
        <h1 className={styles.heading}>Contact</h1>
        <List className={styles.contacts}>
          <ListItem className={styles.contact}>
            <ListItemIcon className={styles.contacttype}>
              <MailOutlineIcon className={styles.contacticon} />
            </ListItemIcon>
            <a href="mailto:info@goedeten.online">
              <ListItemText className={styles.contactinfo}
                primary={"Emailadres"}
                secondary={"info@goedeten.online"}
              />
            </a>
          </ListItem>
          <ListItem className={styles.contact}>
            <ListItemIcon className={styles.contacttype}>
              <InstagramIcon className={styles.contacticon} />
            </ListItemIcon>
            <ListItemText className={styles.contactinfo}
              primary={"Instagram"}
              secondary={<a href={socialMedia.instagram}>@goedetendenhaag</a>}
            />
          </ListItem>
          <ListItem className={styles.contact}>
            <ListItemIcon className={styles.contacttype}>
              <FacebookIcon className={styles.contacticon} />
            </ListItemIcon>
            <ListItemText className={styles.contactinfo}
              primary={"Facebook"}
              secondary={<a href={socialMedia.facebook}>Goed Eten</a>}
            />
          </ListItem>
          {/* <ListItem className={styles.contact}>
            <ListItemIcon className={styles.contacttype}>
              <WhatsAppIcon className={styles.contacticon} />
            </ListItemIcon>
            <ListItemText className={styles.contactinfo}
              primary={"Whatsapp"}
              secondary={"+316 1234 5678"}
            />
          </ListItem> */}
        </List>
      </div>

      <div className={styles.links}>
        <Link href="/">
          <button className={styles.generalButton}>
            POSTCODE CHECK
          </button>
        </Link>
        <Link href="javascript:javascript:history.go(-1)">
          <button className={styles.generalButton}>
            TERUG
          </button>
        </Link>
      </div>

      <div className={styles.bar2}></div>
    </div>
  )
}

export default Contact;
