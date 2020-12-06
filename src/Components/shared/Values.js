import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import VisibilitySensor from 'react-visibility-sensor';

export const Values = (props) => {
  const { isDesktop } = props;
  const [isVisible, setVisibility] = useState(false);

  const useStyles = makeStyles(() => ({
    planContainer: {
      display: 'block',
      margin: '20px',
      backgroundColor: '#ebf5ff',
      //textAlign: 'center',
      padding: '20px'
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
        <Typography variant={"h4"} className={isVisible ? classes.fadeInUp : ''}>
          <span className={classes.blueColor}>Values we stand for</span>
          <p className={classes.valuestext}>Our values are deeply interwoven into our vision, purpose and our fresh approach to imagining and implementing life skills solution to the current education system. Our values guide our actions and are shared by our community of partners.</p>
          <div style={{textAlign: 'center'}}>
            <p>Integrity</p>
            <p>Innovation</p>
            <p>Collaboration</p>
            <p>Dedicated to our communities</p>
          </div>
        </Typography>
      </VisibilitySensor>
    </div>
  )
}