import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import VisibilitySensor from 'react-visibility-sensor';
import Feedback1 from '../assets/testimonials/1.png';
import Feedback2 from '../assets/testimonials/2.png';
import Feedback3 from '../assets/testimonials/3.png';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';

export const Testimonials = (props) => {
  const { isDesktop } = props;
  const [isVisible, setVisibility] = useState(false);

  const useStyles = makeStyles(() => ({
    planContainer: {
      display: 'block',
      margin: '20px',
      backgroundColor: '#ebf5ff',
      //textAlign: 'center',
      padding: !isDesktop ? '20px' : '20px'
    },
    media: {
      objectFit: 'contain',
      margin: '30px'
    },
    fadeInUp: {
      animation: `$fadeInUp 1s both`,
      opacity: 0,
    },
    valuestext: {
      fontSize: isDesktop ? '24px' : '20px',
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
  }));

  const changeVisibilityHandler = (e) => {
    setVisibility(e);
  };

  const classes = useStyles();

  return (
    <div className={classes.planContainer}>
      <VisibilitySensor onChange={changeVisibilityHandler} partialVisibility={true}>
        <>
          <Typography variant={"h5"} className={isVisible ? classes.fadeInUp : ''}>
            <span className={classes.blueColor}>Testimonials</span>
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <CardMedia component="img" image={Feedback1} className={classes.media} height={isDesktop ? '300px' : '100%'} width={'200px'}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <CardMedia component="img" image={Feedback2} className={classes.media} height={isDesktop ? '300px' : '100%'} width={'200px'}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <CardMedia component="img" image={Feedback3} className={classes.media} height={isDesktop ? '300px' : '100%'} width={'200px'}/>
            </Grid>
          </Grid>
        </>
      </VisibilitySensor>
    </div>
  )
}