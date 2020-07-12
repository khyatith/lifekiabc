import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { scroller } from 'react-scroll';

export const ContactUsButton = (props) => {
  const { isDesktop } = props;
  const useStyles = makeStyles(() => ({
    contactUsBtn: {
      color: '#ffffff',
      backgroundColor: '#990000',
      marginTop: !isDesktop && '-30px',
      textTransform: 'none',
      paddingLeft: '20px',
      paddingRight: '20px',
      zIndex: '999',
      "&:hover": {
        backgroundColor: "#990000",
        opacity: '0.8'
      }
    },
  }));

  const scrollToContactUs = () => {
    scroller.scrollTo('/contact-us', {
      duration: 3000,
      delay: 100,
      smooth: 'easeInOut'
    })
  }
  const classes = useStyles();
  return (
    <Button variant="contained" className={classes.contactUsBtn} onClick={() => scrollToContactUs()}>
      <h2>Contact us</h2>
    </Button>
  )
};