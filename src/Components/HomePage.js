import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Banner } from './shared/Banner';
import Grid from '@material-ui/core/Grid';
import { ContactUsButton } from './shared/ContactUsButton';
import { Plan } from './Plan';
import { InfoPanel } from './InfoPanel';
import { ContactUsCard } from './shared/ContactUsCard';
import school from '../assets/school.jpg';
import CardMedia from '@material-ui/core/CardMedia';
import VisibilitySensor from 'react-visibility-sensor';
import Typography from '@material-ui/core/Typography';
import { Values } from './shared/Values';

export const HomePage = (props) => {
  const { isDesktop } = props;
  const [isVisible, setVisibility] = useState(false);

  const useStyles = makeStyles(() => ({
    missionStmt1: {
      color: '#000000',
      fontWeight: 'bold',
      fontSize: isDesktop ? '3em' : '2em',
      lineHeight: '1.5em'
    },
    catchPhraseDiv: {
      //width: '500px',
      backgroundColor: '#fff5eb',
      display: 'inline-block',
      // '-webkit-box-flex': isDesktop && '0 0 45%',
      // '-ms-flex': isDesktop && '0 0 45%',
      // flex: isDesktop && '0 0 45%',
      //height: !isDesktop && 'auto',
      float: 'left',
      height: isDesktop ? '500px' : '100%',
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
      //flexWrap: 'wrap',
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
                  Empowering students with essential life skills 
                </Typography>
              </div>
              <ContactUsButton />
            </Grid>
            <Grid item xs={12} md={8} className={`${classes.logoDiv} ${isVisible ? classes.fadeInUp : ''}`}>
              <CardMedia component="img" image={school} className={classes.media1} height={isDesktop ? '500px' : '100%'} />
            </Grid>
          </div>
        </VisibilitySensor>
      </Banner>
      <Plan isDesktop={isDesktop} />
      <InfoPanel isDesktop={isDesktop} />
      <Values isDesktop={isDesktop} />
      <ContactUsCard isDesktop={isDesktop} />
    </>
  )
}