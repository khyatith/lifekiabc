import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Element } from 'react-scroll';

export const AboutUs = (props) => {
  const { isDesktop } = props;
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
      padding: '20px 0px 0px 10px',
      height: 'auto',
      backgroundColor: '#fff5eb',
      margin: '20px'
    },
    aboutUsText: {
      fontSize: '22px',
      lineHeight: '1.5em'
    }
  }));

  const classes = useStyles();
  return (
    <Element id='/about-us' name='/about-us'>
      <div className={classes.aboutUsDiv}>
        <Typography variant={isDesktop ? "h3" : "h4"}>
          <span className={classes.blueColor}>About Us</span>
          <p className={classes.aboutUsText}>We are a group of Indian women who are passionate about bringing a transformative wave in the life of students in India.</p>
          <p className={classes.aboutUsText}>Our objective is to add value to conventional learning by equipping students with essential life skills.</p>
          <p className={classes.aboutUsText}>We hope that our efforts will empower them to achieve their full potential and facilitate the creation of long lasting positive habits, giving them a competitive edge to succeed in life.</p>
        </Typography>
      </div>
    </Element>
  )
}