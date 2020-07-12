import React, { useState } from 'react';
import { Banner } from './Banner';
import VisibilitySensor from 'react-visibility-sensor';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { ContactUsButton } from './ContactUsButton';
import { makeStyles } from '@material-ui/core/styles';
import ReactPlayer from "react-player";

export const ModulesWrapper = (props) => {
  const { isDesktop, videoTagline, moduleLink } = props;
  const [isVisible, setVisibility] = useState(false);
  const useStyles = makeStyles(() => ({
    missionStmt1: {
      color: '#000000',
      fontWeight: 'bold',
      fontSize: isDesktop ? '3em' : '2em',
      lineHeight: '1.5em'
    },
    catchPhraseDiv: {
      width: '500px',
      backgroundColor: '#fff5eb',
      flex: isDesktop && '0 0 65%',
      height: !isDesktop &&'auto',
    },
    catchPhrase: {
      margin: isDesktop ? '80px' : '50px',
    },
    rightDiv: {
      width: '100%',
      marginLeft: isDesktop ? '50px' : '10px',
      marginTop: '30px',
      flex: 1,
      position: 'relative'
    },
    leftDiv: {
      display: 'flex',
      flexWrap: 'wrap',
      height: isDesktop && '350px',
    },
    tagline: {
      fontWeight: 'normal'
    },
    reactPlayer: {
      position: 'absolute',
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
  const changeVisibilityHandler = (e) => {
    setVisibility(e);
  };
  return (
    <Banner isDesktop={isDesktop}>
      <div className={classes.leftDiv}>
        <VisibilitySensor onChange={changeVisibilityHandler} partialVisibility={true}>
          <Grid item xs={12} md={4} className={classes.catchPhraseDiv}>
            <div className={classes.catchPhrase}>
              <Typography variant={ isDesktop ? "h4" : "subtitle1" } className={`${classes.missionStmt1} ${isVisible ? classes.fadeInUp : ''}`}>
                Time Management
              </Typography>
              <h4 className={classes.tagline}>{videoTagline}</h4>
            </div>
            <div style={{marginBottom: '30px'}}>
              <ContactUsButton />
            </div>
          </Grid>
        </VisibilitySensor>
        <Grid item xs={12} md={8} className={classes.rightDiv}>
          <ReactPlayer url={moduleLink} className={classes.reactPlayer} width="100%" height="100%" />
        </Grid>
      </div>
    </Banner>
  )
}