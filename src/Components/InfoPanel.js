import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import VisibilitySensor from 'react-visibility-sensor';
import { AboutUsCarousal } from './AboutUsCarousal';
import { AboutUs } from './AboutUs';

export const InfoPanel = (props) => {
  const { isDesktop } = props;
  const useStyles = makeStyles(() => ({
    root: {
      display: 'flex',
      flexWrap: !isDesktop && 'wrap',
      margin: isDesktop ? '150px 20px' : '50px 20px',
      backgroundColor: '#dce0e5',
      height: isDesktop ? 'auto' : '300px'
    },
    missionDiv: {
      flex: isDesktop && '0 0 35%',
      padding: isDesktop ? '100px' : '20px 0px 0px 10px'
    },
    missiontext: {
      fontSize: isDesktop ? '28px' : '24px',
      lineHeight: '1.5em'
    },
    vl: {
      borderLeft: '2px solid #b0b9c4',
      marginTop: '60px',
      marginBottom: '60px'
    },
    blueColor: {
      color: '#3299CC'
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
  const classes = useStyles(isDesktop);
  const [isVisible, setVisibility] = useState(false);

  const changeVisibilityHandler = (e) => {
    setVisibility(e);
  };

  return (
    <VisibilitySensor onChange={changeVisibilityHandler} offset={{top:10, bottom: 10}}>
      <>
        <div className={classes.root}>
          <div className={classes.missionDiv}>
            <Typography variant={isDesktop ? "h3" : "h4"} className={`${isVisible ? classes.fadeInUp : ''}`}>
              <span className={classes.blueColor}>Our Mission</span>
              <p className={classes.missiontext}>We educate students using engaging curriculum that has been specifically designed for igniting young minds </p>
            </Typography>
          </div>
          { isDesktop && <div className={classes.vl}></div> }
          { isDesktop && <AboutUsCarousal isDesktop={isDesktop} />}
        </div>
        { !isDesktop && <AboutUs />}
      </>
    </VisibilitySensor>
  )
}