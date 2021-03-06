import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Banner } from './shared/Banner';
import Grid from '@material-ui/core/Grid';
import { ContactUsButton } from './shared/ContactUsButton';
import { PSCB } from './PSCB';
import { WhyUs } from './WhyUs';
import { InfoPanel } from './InfoPanel';
import homepageimg from '../assets/hp.png';
import CardMedia from '@material-ui/core/CardMedia';
import VisibilitySensor from 'react-visibility-sensor';
import Typography from '@material-ui/core/Typography';
import { Testimonials } from './Testimonials';
import { Partners } from './Partners';
import { useLocation } from "react-router-dom";

export const HomePage = (props) => {
  const location = useLocation();
  const { isDesktop } = props;
  const [isVisible, setVisibility] = useState(false);

  useEffect(()=> {
    if (location.hash) {
        let elem = document.getElementById(location.hash.slice(1))
        if (elem) {
          elem.scrollIntoView({behavior: "smooth"})
        }
    }
  }, [location,])

  const useStyles = makeStyles(() => ({
    missionStmt1: {
      color: '#000000',
      fontWeight: 'bold',
      fontSize: isDesktop ? '2em' : '1.5em',
      lineHeight: '1.5em'
    },
    catchPhraseDiv: {
      //width: '500px',
      backgroundColor: '#fefee1',
      display: 'inline-block',
      // '-webkit-box-flex': isDesktop && '0 0 45%',
      // '-ms-flex': isDesktop && '0 0 45%',
      // flex: isDesktop && '0 0 45%',
      //height: !isDesktop && 'auto',
      float: 'left',
      height: isDesktop ? '300px' : '100%',
    },
    catchPhrase: {
      margin: '50px',
    },
    logoDiv: {
      width: '100%',
      position: 'static',
      display: 'inline-block',
      //height: isDesktop ? '500px' : 'auto',
    },
    kpidiv: {
      margin: '30px auto',
      padding: '20px',
      display: 'block',
      //backgroundColor: '#fefee1',
      textAlign: 'center',
      color: '#990000',
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
    fadeInUp: {
      animation: `$fadeInUp 1s both`,
      opacity: 0,
    },
    container: {
      display: 'block',
    },
    media1: {
      objectFit: 'contain'
    }
  }));

  const classes = useStyles();
  const changeVisibilityHandler = (e) => {
    setVisibility(e);
  };
  return (
    <>
      <Banner isDesktop={isDesktop}>
        <VisibilitySensor onChange={changeVisibilityHandler} partialVisibility={true}>
          <div className={classes.container}>
            <Grid item xs={12} md={4} className={classes.catchPhraseDiv}>
              <div className={classes.catchPhrase}>
                <Typography variant={"h4"} className={`${classes.missionStmt1} ${isVisible ? classes.fadeInUp : ''}`}>
                  Leadership & Communication skills for<br/>8 - 12 years old
                </Typography>
              </div>
              <ContactUsButton />
            </Grid>
            <Grid item xs={12} md={8} className={`${classes.logoDiv} ${isVisible ? classes.fadeInUp : ''}`}>
              <CardMedia component="img" image={homepageimg} className={classes.media1} height={isDesktop ? '300px' : '100%'} width={'200px'}/>
            </Grid>
          </div>
        </VisibilitySensor>
      </Banner>
      {/* <Grid item xs={12} md={5} className={classes.kpidiv}>
        <Typography variant={isDesktop ? "h4" : "h5"} className={`${isVisible ? classes.fadeInUp : ''}`}> 
          <Box fontWeight="fontWeightBold">
            100+ students mentored across 5+ countries
          </Box>
        </Typography>
      </Grid> */}
      <WhyUs isDesktop={isDesktop} />
      <PSCB isDesktop={isDesktop} />
      <div id="ourcourses">
        <InfoPanel isDesktop={isDesktop} />
      </div>
      <Testimonials isDesktop={isDesktop} />
      <Partners isDesktop={isDesktop} shouldWrap={true} />
    </>
  )
}