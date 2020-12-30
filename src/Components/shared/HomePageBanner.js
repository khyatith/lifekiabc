import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { ContactUsButton } from './ContactUsButton';
import school from '../../assets/school.jpg';
import CardMedia from '@material-ui/core/CardMedia';
import VisibilitySensor from 'react-visibility-sensor';
import Typography from '@material-ui/core/Typography';
import TrackVisibility from 'react-on-screen';

export const HomePageBanner = (props) => {
  const { isDesktop, isVisible } = props;
  //const [isVisible, setVisibility] = useState(false);

  const useStyles = makeStyles(() => ({
    missionStmt1: {
      color: '#000000',
      fontWeight: 'bold',
      fontSize: isDesktop ? '3em' : '2em',
      lineHeight: '1.5em'
    },
    catchPhraseDiv: {
      width: '500px',
      backgroundColor: '#fefee1',
      flex: isDesktop && '0 0 65%',
      height: !isDesktop && 'auto'
    },
    catchPhrase: {
      margin: isDesktop ? '80px' : '50px',
    },
    logoDiv: {
      width: '100%',
      height: '100%',
      position: 'static'
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
  }));

  const classes = useStyles();
  // const changeVisibilityHandler = (e) => {
  //   setVisibility(e);
  // };
  return (
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
      <Grid item xs={12} md={4} className={classes.catchPhraseDiv}>
        <div className={classes.catchPhrase}>
          <Typography variant={"h4"} className={`${classes.missionStmt1} ${isVisible ? classes.fadeInUp : ''}`}>
            Application-centric life-skills development
          </Typography>
        </div>
        <ContactUsButton />
      </Grid>
      <Grid item xs={12} md={8} className={`${classes.logoDiv} ${isVisible ? classes.fadeInUp : ''}`}>
        <CardMedia component="img" image={school} className={classes.media1} height="100%" />
      </Grid>
    </div>
  )
}