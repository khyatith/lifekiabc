import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Element } from 'react-scroll';
import VisibilitySensor from 'react-visibility-sensor';

export const AboutUs = (props) => {
  const { isDesktop } = props;
  const [isVisible, setVisibility] = useState(false);
  const useStyles = makeStyles(() => ({
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
    blueColor: {
      color: '#3299CC'
    },
    aboutUsDiv: {
      flex: 1,
      padding: !isDesktop ? '20px 0px 0px 10px' : '70px 20px',
      height: 'auto',
      backgroundColor: '#dce0e5',
      margin: '20px'
    },
    aboutUsText: {
      fontSize: isDesktop ? '24px' : '20px',
      lineHeight: '1.5em'
    }
  }));

  const changeVisibilityHandler = (e) => {
    setVisibility(e);
  };

  const classes = useStyles();
  return (
    <Element id='/about-us' name='/about-us'>
      <VisibilitySensor onChange={changeVisibilityHandler} partialVisibility={true}>
        <div className={classes.aboutUsDiv}>
          <Typography variant={"h4"} className={isVisible && isDesktop ? classes.fadeInUp : ''}>
            <span className={classes.blueColor}>About Us</span>
            <p className={classes.aboutUsText}>We are a group of Indian women who are passionate about bringing a transformative wave in the life of students in India.</p>
            <p className={classes.aboutUsText}>Our objective is to add value to conventional learning by equipping students with essential life skills.</p>
            <p className={classes.aboutUsText}>We hope that our efforts will empower them to achieve their full potential and facilitate the creation of long lasting positive habits, giving them a competitive edge to succeed in life.</p>
          </Typography>
        </div>
      </VisibilitySensor>
    </Element>
  )
}