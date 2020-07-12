import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import VisibilitySensor from 'react-visibility-sensor';
import Carousal from './Carousal';

export const Values = (props) => {
  const { isDesktop } = props;
  const useStyles = makeStyles(() => ({
    container: {
      display: 'flex',
      flexWrap: !isDesktop && 'wrap',
      margin: isDesktop ? '50px 20px' : '50px 20px',
      backgroundColor: '#dce0e5',
      height: 'auto'
    },
    // valuesDiv: {
    //   margin: '20px',
    //   padding: !isDesktop ? '20px 0px 0px 10px' : '70px 20px'
    //   //padding: isDesktop ? '100px' : '20px 0px 0px 10px'
    // },
    missiontext: {
      fontSize: isDesktop ? '20px' : '20px',
      lineHeight: '1.5em'
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
        <VisibilitySensor onChange={changeVisibilityHandler}>
          <Typography variant={"h4"} className={isVisible ? classes.fadeInUp : ''}>
            <span className={classes.blueColor}>Our Values</span>
            <p className={classes.missiontext}>To promote the holistic development of students by equipping them with the skills and tools they need for success - empowering them to achieve their full potential in life.</p>
          </Typography>
        </VisibilitySensor>
      </div>
  )
}