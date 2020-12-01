import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import VisibilitySensor from 'react-visibility-sensor';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Dizikid from '../assets/partners/dizikid-logo.png';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { green, lightBlue, blue } from '@material-ui/core/colors';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Link from '@material-ui/core/Link';
import { useHistory } from "react-router-dom";

export const Partners = (props) => {
  const { isDesktop } = props;
  const [isVisible, setVisibility] = useState(false);
  const history = useHistory();

  const useStyles = makeStyles(() => ({
    container: {
      display: 'flex',
      flexWrap: !isDesktop && 'wrap',
      margin: isDesktop ? '50px 20px' : '50px 20px',
      //backgroundColor: '#fff5eb',
      //border: '1px solid #cccccc',
      height: 'auto'
    },
    fadeInUp: {
      animation: `$fadeInUp 1s both`,
      opacity: 0,
    },
    media: {
      objectFit: 'contain',
      margin: '30px'
    },
    // vl: {
    //   borderLeft: '1px solid #b0b9c4',
    //   margin: '20px 0px 20px 0px'
    // },
    blueColor: {
      color: '#3299CC'
    },
    whatsappDiv: {
      marginLeft: '10px',
      marginTop: '20px',
      display: 'flex'
    },
    connectDiv: {
      marginLeft: '100px',
      flex: "0 0 45%"
    },
    partnerDiv: {
      flex: "0 0 45%"
    },
    // missionDiv1: {
    //   margin: '20px',
    //   padding: !isDesktop ? '0px 0px 0px 10px' : '10px 0px 0px 20px'
    // },
    "@keyframes fadeInUp": {
      "from": {
          transform: "translate3d(0,40px,0)",
      }, 
      "to": {
          transform: "translate3d(0,0,0)",
          opacity: 1
      }
    },
  }));

  const changeVisibilityHandler = (e) => {
    setVisibility(e);
  };

  const handleIGClick = () => {
    window.open('https://www.instagram.com/lifekiabc/', '_blank');
  }

  const handleFBClick = () => {
    window.open('https://www.facebook.com/lifekiabc', '_blank');
  }
  
  const handleTwitterClick = () => {
    window.open('https://twitter.com/LifeKiABC', '_blank');
  }

  const handleLinkedinClick = () => {
    window.open('https://www.linkedin.com/company/lifekiabc/?viewAsMember=true', '_blank');
  }

  const goToDemoForm = () => {
    history.push('/free-demo-registration');
  }

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <VisibilitySensor onChange={changeVisibilityHandler} partialVisibility={true}>
        <>
          <div className={classes.partnerDiv}>
            <Typography variant={"h4"} className={isVisible ? classes.fadeInUp : ''} style={{margin: '0px 0px 30px 0px'}}>
              <span className={classes.blueColor}>Our partners</span>
            </Typography>
            <div style={{maxWidtg: '400px'}}>
            <Card>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <CardMedia component="img" image={Dizikid} className={classes.media} height={isDesktop ? '150px' : '100%'} width={'100px'}/>
                </Grid>
              </Grid>
            </Card>
            </div>
          </div>
          <div className={classes.connectDiv}>
            <Typography variant={"h4"} className={isVisible ? classes.fadeInUp : ''}>
              <span className={classes.blueColor}>Connect with us</span>
            </Typography>
            <br />
            <Card style={{padding:"20px"}}>
              <IconButton onClick={handleIGClick} size="medium" color="secondary">
                <InstagramIcon style={{ fontSize: 40 }} />
              </IconButton>
              <IconButton onClick={handleFBClick} size="medium" color="primary">
                <FacebookIcon style={{ fontSize: 40 }} />
              </IconButton>
              <IconButton onClick={handleTwitterClick} size="medium">
                <TwitterIcon style={{ color: lightBlue[400], fontSize: 40 }}/>
              </IconButton>
              <IconButton onClick={handleLinkedinClick} size="medium" color="primary">
                <LinkedInIcon style={{ color: blue[700], fontSize: 40 }}/>
              </IconButton>
              <div className={classes.whatsappDiv}>
                <WhatsAppIcon style={{ color: green[500], fontSize: 40, marginRight: '20px' }}/>
                <Typography variant={"h6"} className={isVisible ? classes.fadeInUp : ''}>
                  <span>+1(213)-509-7049&nbsp;&nbsp;/&nbsp;&nbsp;+1(646)-824-1790</span>
                </Typography>
              </div>
              <div className={classes.whatsappDiv}>
                <br/>
                <br/>
                <Link component="button" href="#" onClick={goToDemoForm} style={{ color: blue[700], fontSize: 20 }}>Request a free demo</Link>
              </div>
            </Card>
          </div>
        </>
      </VisibilitySensor>
    </div>
  )
}