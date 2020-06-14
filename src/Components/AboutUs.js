import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Element } from 'react-scroll'

export const AboutUs = (props) => {
  const { isDesktop } = props;
  const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1,
      margin: !isDesktop ? '16px' : '0 auto',
      textAlign: 'center'
    },
  }));

  const classes = useStyles();
  return (
    <Element id='/about-us' name='/about-us'>
      <Grid item xs={12} md={6} className={classes.root}>
        <Typography variant={isDesktop ? "h3" : "h4"}>
          <p style={{ color: '#3299CC' }}>About Us</p>
        </Typography>
        <Typography variant={isDesktop ? "h5" : "h6"}>
            <p>We are a group of Indian women who are passionate about bringing a transformative wave in the life of students in India.</p>
            <p>Our objective is to add value to conventional learning by equipping students with essential life skills.</p>
            <p>We hope that our efforts will empower them to achieve their full potential and facilitate the creation of long lasting positive habits, giving them a competitive edge to succeed in life.</p>
        </Typography>
      </Grid>
    </Element>
  )
}