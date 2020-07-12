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
import { useHistory } from "react-router-dom";

export const Plan = (props) => {
  const { isDesktop } = props;
  const [isVisible, setVisibility] = useState(false);
  const history = useHistory();

  const useStyles = makeStyles(() => ({
    planContainer: {
      display: 'flex',
      margin: '20px',
      flexWrap: 'wrap',
    },
    fadeInUp: {
      animation: `$fadeInUp 1s both`,
      opacity: 0,
    },
    media1: {
      display: 'inline-block',
      width: '200px'
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

  const goToTimeManagement = () => {
    history.push('/time-management');
  }

  const classes = useStyles();

  return (
    <Element id="/what-we-do" name="/what-we-do">
        <div className={classes.planContainer}>
          <div className={classes.whatwedotextdiv}>
            <VisibilitySensor onChange={changeVisibilityHandler} intervalDelay={300} scrollDelay={400}>
              <Typography variant={isDesktop ? "h3" : "h4"} className={`${isVisible ? classes.fadeInUp : ''}`}>
                <span className={classes.blueColor}>What we do</span>
                <p className={classes.whatwedotext}>We educate students using engaging curriculum that has been specifically designed for igniting young minds </p>
              </Typography>
            </VisibilitySensor>
          </div>
          <div className={classes.whatwedomodules}>
            <Grid container spacing={2}>
              <Grid item xs onClick={goToTimeManagement}>
                <h2>Time Management</h2>
                <Paper className={classes.timeManagement}>
                  <CardMedia component="img" image={clock} height="100%" />
                </Paper>
              </Grid>
              <Grid item xs>
                <h2>Communication Skills <span className={classes.blueColor}>(Coming Soon...)</span></h2>
                <Paper className={classes.communication}>
                  <CardMedia component="img" image={communication} className={classes.media1} width="200px" height="100%" />
                </Paper>
              </Grid>
            </Grid>
          </div>
        </div>
    </Element>
  )
}