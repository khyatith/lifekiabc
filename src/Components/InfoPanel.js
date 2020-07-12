import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import VisibilitySensor from 'react-visibility-sensor';
import { AboutUs } from './AboutUs';

export const InfoPanel = (props) => {
  const { isDesktop } = props;
  const useStyles = makeStyles(() => ({
    container: {
      display: 'flex',
      flexWrap: !isDesktop && 'wrap',
      margin: isDesktop ? '50px 20px' : '50px 20px',
      backgroundColor: '#dce0e5',
      height: 'auto'
    },
    missionDiv: {
      flex: isDesktop && '0 0 45%',
      margin: '20px',
      padding: !isDesktop ? '20px 0px 0px 10px' : '70px 20px'
      //padding: isDesktop ? '100px' : '20px 0px 0px 10px'
    },
    missiontext: {
      fontSize: isDesktop ? '24px' : '20px',
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
      <div className={classes.container}>
        <div className={classes.missionDiv}>
        <VisibilitySensor onChange={changeVisibilityHandler} partialVisibility={true}>
          <Typography variant={"h4"} className={isVisible ? classes.fadeInUp : ''}>
            <span className={classes.blueColor}>Our Mission</span>
            <p className={classes.missiontext}>To promote the holistic development of students by equipping them with the skills and tools they need for success - empowering them to achieve their full potential in life.</p>
          </Typography>
        </VisibilitySensor>
        </div>
        { isDesktop && <div className={classes.vl}></div> }
        <AboutUs isDesktop={isDesktop} />
      </div>
  )
}