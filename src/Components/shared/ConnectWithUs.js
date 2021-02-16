import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
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
import VisibilitySensor from 'react-visibility-sensor';
import Box from '@material-ui/core/Box';

export const ConnectWithUs = (props) => {

  const { isDesktop, shouldWrap } = props;
  const [isVisible, setVisibility] = useState(false);
  const history = useHistory();

  const useStyles = makeStyles(() => ({
    fadeInUp: {
      animation: `$fadeInUp 1s both`,
      opacity: 0,
    },
    media: {
      objectFit: 'contain',
      margin: '30px'
    },
    blueColor: {
      color: '#3299CC'
    },
    whatsappDiv: {
      marginLeft: '10px',
      marginTop: '20px',
      display: 'flex',
      justifyContent: !shouldWrap && 'center'
    },
    connectDiv: {
      marginLeft: isDesktop ? '100px' : '20px',
      flex: shouldWrap && isDesktop ? "0 0 45%" : '100%',
      textAlign: !shouldWrap && 'center',
      marginTop : !isDesktop && '20px'
    },
    connectCard: {
      padding:"20px",
      boxShadow: !shouldWrap && 'none',
      margin: !shouldWrap && '0 auto',
      maxWidth: !shouldWrap && '40%'
    },
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

  const handleIGClick = () => {
    window.location.assign('https://www.instagram.com/lifekiabc/');
  }

  const handleFBClick = () => {
    window.location.assign('https://www.facebook.com/lifekiabc');
  }
  
  const handleTwitterClick = () => {
    window.location.assign('https://twitter.com/LifeKiABC');
  }

  const handleLinkedinClick = () => {
    window.location.assign('https://www.linkedin.com/company/lifekiabc/?viewAsMember=true');
  }

  const goToDemoForm = () => {
    history.push('/free-demo-registration');
  }

  const changeVisibilityHandler = (e) => {
    setVisibility(e);
  };

  const classes = useStyles();

  return(
    <div className={classes.connectDiv}>
      <VisibilitySensor onChange={changeVisibilityHandler} partialVisibility={true}>
        <>
          <Typography variant={"h5"} className={isVisible ? classes.fadeInUp : ''}>
            <Box fontWeight="fontWeightBold">
              <span className={classes.blueColor}>Connect with us</span>
            </Box>
          </Typography>
          <br />
          <Card className={classes.connectCard}>
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
              <Typography variant={"subtitle1"} style={{marginTop: '5px'}} className={isVisible ? classes.fadeInUp : ''}>
                { isDesktop && <span>+1(213)-509-7049&nbsp;&nbsp;/&nbsp;&nbsp;+1(646)-824-1790</span>}
                {!isDesktop && <span>+1(213)-509-7049<br/>+1(646)-824-1790</span>}
              </Typography>
            </div>
            <div className={classes.whatsappDiv}>
              <br/>
              <br/>
              <Link component="button" href="#" onClick={goToDemoForm} style={{ color: blue[700], fontSize: 20 }}>Request a free consultation</Link>
            </div>
          </Card>
        </>
      </VisibilitySensor>
    </div>
  )
}