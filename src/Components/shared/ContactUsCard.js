import React from 'react';
import { ContactUsForm } from './ContactUsForm';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

export const ContactUsCard = () => {
  const isDesktop = window.innerWidth > 1200;

  const useStyles = makeStyles(() => ({
    cardRoot: {
      minWidth: '275px',
      maxWidth: isDesktop && '600px',
      margin: isDesktop ? '30px auto' : '30px 16px 0px 16px',
      textAlign: 'center',
      boxShadow: 'none',
      border: '2px solid #ffbf00',
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
    fadeInUp: {
      animation: `$fadeInUp 1s both`,
      opacity: 0,
    },
  }));

  const classes = useStyles();

  return (
    <Card className={classes.cardRoot}>
      <CardContent>
        <Typography variant={ isDesktop ? "h5" : "h6" } component="h2">
          <p>Want more information about our training modules?</p>
          <p>Want to showcase your career journey on our platform?</p>
          <p>Want to help us achieve our mission?</p>
          <p>Just feel like saying Hi?</p>
        </Typography>
        <ContactUsForm isDesktop={isDesktop}/>
      </CardContent>
    </Card>
  );
}