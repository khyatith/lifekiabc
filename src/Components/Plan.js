import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Element } from 'react-scroll';
import VisibilitySensor from 'react-visibility-sensor';
import Paper from '@material-ui/core/Paper';
import clock from '../assets/clock.png';
import communication from '../assets/communication.png';

export const Plan = (props) => {
  const { isDesktop } = props;
  const [isVisible, setVisibility] = useState(false);

  const useStyles = makeStyles(() => ({
    root: {
      display: 'flex',
      margin: '20px',
      flexWrap: 'wrap',
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
    media1: {
      display: 'inline-block',
      width: '200px'
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
    whatwedotextdiv: {
      flex: isDesktop && '0 0 35%',
    },
    whatwedotext: {
      fontSize: isDesktop ? '28px' : '24px',
      lineHeight: '1.5em'
    },
    blueColor: {
      color: '#3299CC'
    },
    whatwedomodules: {
      flex: 1,
      cursor: 'pointer'
    },
    timeManagement: {
      textAlign: 'center',
      backgroundColor: '#ebf5ff',
      height: '300px',
      width: isDesktop ? '350px' : '100%',
      cursor: 'pointer'
    },
    communication: {
      textAlign: 'center',
      backgroundColor: '#ffffeb',
      height: '300px',
      width: isDesktop ? '350px' : '100%',
      cursor: 'pointer'
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
          <div className={classes.whatwedotextdiv}>
            <Typography variant={isDesktop ? "h3" : "h4"} className={`${isVisible ? classes.fadeInUp : ''}`}>
              <span className={classes.blueColor}>What we do</span>
              <p className={classes.whatwedotext}>We educate students using engaging curriculum that has been specifically designed for igniting young minds </p>
            </Typography>
          </div>
          <div className={classes.whatwedomodules}>
            <Grid container spacing={2}>
              <Grid item xs>
                <h2>Time Management</h2>
                <Paper className={classes.timeManagement}>
                  <CardMedia component="img" image={clock} height="100%" />
                </Paper>
              </Grid>
              <Grid item xs>
                <h2>Communication Skills</h2>
                <Paper className={classes.communication}>
                  <CardMedia component="img" image={communication} className={classes.media1} width="200px" height="100%" />
                </Paper>
              </Grid>
            </Grid>
          </div>
        </div>
      </VisibilitySensor>
    </Element>
  )
}