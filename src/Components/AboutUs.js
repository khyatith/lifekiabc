import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Element } from 'react-scroll';
import VisibilitySensor from 'react-visibility-sensor'; 

export const AboutUs = (props) => {
  const { isDesktop } = props;
  const [isVisible, setVisibility] = useState(false);
  const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1,
      margin: !isDesktop ? '16px' : '0 auto',
      textAlign: 'center',
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
    // "@-webkit-keyframes fadeInUp": {
    //   "from": {
    //       transform: "translate3d(0,40px,0)",
    //   },
    //   "to": {
    //       transform: "translate3d(0,0,0)",
    //       opacity: 1
    //   }
    // },
    aboutusText: {
      animation: `$fadeInUp 1s both`,
      opacity: 0,
    }
  }));

  const changeVisibilityHandler = (e) => {
    setVisibility(e);
  };

  const classes = useStyles();
  return (
    <Element id='/about-us' name='/about-us'>
        <Grid item xs={12} md={6} className={classes.root}>
          <VisibilitySensor onChange={changeVisibilityHandler} offset={{top:10, bottom: 10}}>
            <>
              <Typography variant={isDesktop ? "h3" : "h4"} className={isVisible ? classes.aboutusText : ''}>
                <p style={{ color: '#3299CC' }}>About Us</p>
              </Typography>
              <Typography variant={isDesktop ? "h5" : "h6"} className={isVisible ? classes.aboutusText : ''}>
                  <p>We are a group of Indian women who are passionate about bringing a transformative wave in the life of students in India.</p>
                  <p>Our objective is to add value to conventional learning by equipping students with essential life skills.</p>
                  <p>We hope that our efforts will empower them to achieve their full potential and facilitate the creation of long lasting positive habits, giving them a competitive edge to succeed in life.</p>
              </Typography>
            </>
          </VisibilitySensor>
        </Grid>
    </Element>
  )
}