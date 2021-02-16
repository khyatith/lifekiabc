import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";

export const ContactUsButton = (props) => {
  const { isDesktop, paymentLink } = props;
  const history = useHistory();
  const useStyles = makeStyles(() => ({
    contactUsBtn: {
      marginBottom: !isDesktop && '20px !important',
      color: '#ffffff !important',
      backgroundColor: '#990000 !important',
      marginTop: !isDesktop && '-30px !important',
      textTransform: 'none !important',
      paddingLeft: '20px !important',
      paddingRight: '20px !important',
      zIndex: '999 !important',
      lineHeight: '1 !important',
      "&:hover": {
        backgroundColor: "#990000 !important",
        opacity: '0.8 !important'
      }
    },
  }));

  const openNextStepPage = () => {
    if(!paymentLink) {
      history.push('/free-demo-registration');
    } else {
      window.location.assign(paymentLink);
    }
  }

  // const scrollToContactUs = () => {
  //   scroller.scrollTo('/contact-us', {
  //     duration: 3000,
  //     delay: 100,
  //     smooth: 'easeInOut'
  //   })
  // }
  const classes = useStyles();
  return (
    <Button variant="contained" className={classes.contactUsBtn} onClick={() => openNextStepPage()}>
      {!paymentLink && <h2>Request a free consultation</h2>}
      {paymentLink && <h2>Enroll now</h2>}
    </Button>
  )
};