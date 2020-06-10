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
      // fontWeight: 'bold',
      // position: 'absolute',
      // top: isDesktop ? '60%' : '90%',
      // left: '50%',
      // transform: 'translate(-50%, -50%)',
      // zIndex: '2',
      // textAlign: 'center',
      // display: 'inline-block',
      "&:hover": {
        backgroundColor: "#990000",
        opacity: '0.8'
      }
    },
  }));

  const scrollToContactUs = () => {
    scroller.scrollTo('/contact-us', {
      duration: 2000,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
  const classes = useStyles();
  return (
    <Button variant="contained" className={classes.contactUsBtn} onClick={() => scrollToContactUs()}>
      <h3>Contact Us!</h3>
    </Button>
  )
};