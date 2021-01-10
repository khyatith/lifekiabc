import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";

export const ContactUsButton = (props) => {
  const { isDesktop, paymentLink } = props;
  const history = useHistory();
  const useStyles = makeStyles(() => ({
    contactUsBtn: {
      marginBottom: !isDesktop && '20px',
      color: '#ffffff',
      backgroundColor: '#990000',
      marginTop: !isDesktop && '-30px',
      textTransform: 'none',
      paddingLeft: '20px',
      paddingRight: '20px',
      zIndex: '999',
      lineHeight: '1',
      "&:hover": {
        backgroundColor: "#990000",
        opacity: '0.8'
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
      {!paymentLink && <h2>Request a free demo</h2>}
      {paymentLink && <h2>Enroll now</h2>}
    </Button>
  )
};