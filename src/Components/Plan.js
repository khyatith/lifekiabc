import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import blur2 from '../assets/blur2.jpg';
import blur3 from '../assets/blur3.jpg';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Element } from 'react-scroll';
import VisibilitySensor from 'react-visibility-sensor'; 

export const Plan = (props) => {
  const { isDesktop } = props;
  const [isVisible, setVisibility] = useState(false);

  const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1,
      margin: '0 auto',
      textAlign: 'center',
    },
    card: {
      width: isDesktop && '500px',
      position: 'relative',
      boxShadow: 'none',
      marginBottom: !isDesktop && '16px',
      padding: !isDesktop && '20px'
    },
    title: {
      color: '#ffffff',
      fontWeight: 'bold',
    },
    fadeInUp: {
      animation: `$fadeInUp 1s both`,
      opacity: 0,
    },
    whatwedo: {
      color: '#3299CC'
    },
    media1: {
      filter: 'blur(2px)',
      display: 'inline-block'
    },
    cardText: {
      backgroundColor: 'rgba(0,0,0, 0.6)', /* Black w/opacity/see-through */
      color: 'white',
      fontWeight: 'bold',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: '2',
      width: '80%',
      padding: '20px',
      textAlign: 'center',
      display: 'inline-block',
    },
    containerGrid: {
      justifyContent: 'center',
      paddingRight: isDesktop ? '100px' : 0,
      margin: isDesktop ? '0px 100px' : 0
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
    <Element id="/what-we-do" name="/what-we-do">
      <VisibilitySensor onChange={changeVisibilityHandler} offset={{top:10, bottom: 10}}>
        <div className={classes.root}>
          <Typography variant={isDesktop ? "h3" : "h4"} className={`${isVisible ? classes.fadeInUp : ''} ${classes.whatwedo}`}>
            <p>What we do</p>
          </Typography>
          <Grid container className={classes.containerGrid}>
            <Grid item xs={12} md={6}>
              <Card className={classes.card}>
                <CardMedia component="img" image={blur2} className={classes.media1} height="100%" />
                  <CardContent className={classes.cardText}>
                    <Typography variant={isDesktop ? "h4" : "h5"} className={`${isVisible ? classes.fadeInUp : ''} ${classes.title}`}>
                      Life skills
                    </Typography>
                    <br/>
                    <Typography variant={"h6"} className={`${isVisible ? classes.fadeInUp : ''} ${classes.title}`}>
                      We educate students using engaging curriculum that has been specifically designed for igniting young minds
                    </Typography>
                  </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card className={classes.card}>
                <CardMedia component="img" image={blur3} className={classes.media1} height="100%" />
                <CardContent className={classes.cardText}>
                  <Typography variant={isDesktop ? "h4" : "h5"} className={`${isVisible ? classes.fadeInUp : ''} ${classes.title}`}>
                    Career Stories
                  </Typography>
                  <br/>
                  <Typography variant={"h6"} className={`${isVisible ? classes.fadeInUp : ''} ${classes.title}`}>
                  Provide insights into the making of a professional and what their daily life entails to help students make an informed career choice
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      </VisibilitySensor>
    </Element>
  )
}