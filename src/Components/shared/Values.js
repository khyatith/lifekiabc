import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export const Values = (props) => {
  const { isDesktop } = props;

  const useStyles = makeStyles(() => ({
    planContainer: {
      display: 'block',
      margin: '20px',
      //textAlign: 'center',
      padding: '20px'
    },
    fadeInUp: {
      animation: `$fadeInUp 1s both`,
      opacity: 0,
    },
    valuestext: {
      fontSize: isDesktop ? '20px' : '15px',
      lineHeight: '1.5em'
    },
    blueColor: {
      color: '#3299CC'
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.planContainer}>
      <Typography variant={"h5"}>
        <Box fontWeight="fontWeightBold">
          <span className={classes.blueColor}>Values we stand for</span>
        </Box>
        <p className={classes.valuestext}>Our values are deeply interwoven into our vision, purpose and our fresh approach to imagining and implementing life skills solution to the current education system. Our values guide our actions and are shared by our community of partners.</p>
        <div style={{textAlign: 'center', fontSize: '20px', fontWeight: 'bold'}}>
          <p>Integrity</p>
          <p>Innovation</p>
          <p>Collaboration</p>
          <p>Dedicated to our communities</p>
        </div>
      </Typography>
    </div>
  )
}