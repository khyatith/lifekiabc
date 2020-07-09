import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import emailjs from 'emailjs-com';
import Alert from '@material-ui/lab/Alert';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { Element } from 'react-scroll';

export const ContactUsForm = (props) => {
  const { isDesktop } = props;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const [emailValidated, setEmailValidated] = useState(true);
  const [alertOpen, setAlertOpen] = useState(false);

  const useStyles = makeStyles(() => ({
    contactUsBtn: {
      color: '#ffffff',
      backgroundColor: '#990000',
      margin: '0 auto',
      textTransform: 'none',
      fontSize: '20px',
      padding: '10px 20px 10px 20px',
      "&:hover": {
        backgroundColor: "#990000",
        opacity: '0.8'
      }
    },
    contactUsFormContainer: {
      marginBottom: '20px',
      marginTop: '20px',
      '& .MuiTextField-root': {
        width: isDesktop ? '500px' : '100%',
        marginBottom: '50px'
      }
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

  const CustomAlert = (alertProps) => {
    return (
      <Alert
        severity={alertProps.severity}
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              setAlertOpen(false);
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
      >
        {alertProps.message}
    </Alert>
    )
  }

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  }

  // const resetState = () => {
  //   setName('');
  //   setEmail('');
  //   setMessage('');
  // }

  const isValidEmailParams = () => {
    if (!name || !email) return false;
    return true;
  }

  const sendMessage = async (event) => {
    event.preventDefault();
    if (!isValidEmailParams()) {
      setEmailValidated(false);
    }
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "lifekiabc@gmail.com",
      user_message: message
    };
    const sentEmail = await emailjs.send("lifekiabc", "template_fZpob7Jv_clone", templateParams, 'user_HIdKyA0Sljcn6qVCU4c5T');
    const { status } = sentEmail;
    if (status === 200) {
      setSuccess(true);
    } else {
      setFailure(true);
    }
    setAlertOpen(true);
    //resetState();
  }
  const classes = useStyles();

  return (
      <Element id='/contact-us' name='/contact-us'>
        {failure && alertOpen && <CustomAlert severity="error" message="There was a problem sending your message.Please try again later or contact us at lifekiabc.com" />}
        {success && alertOpen && <CustomAlert severity="success" message="Thank you for contacting us.We will get back to you soon" />}
          <form className={classes.contactUsFormContainer} noValidate autoComplete="off">
            <TextField error={!emailValidated} required id="name" label="Name" value={name} onChange={handleNameChange}/>
            <TextField error={!emailValidated} required id="email" label="Email" value={email} onChange={handleEmailChange}/>
            <TextField
              id="query"
              label="Message"
              multiline
              rows="4"
              variant="outlined"
              value={message}
              onChange={handleMessageChange}
            />
          </form>
        <Button variant="contained" className={classes.contactUsBtn} onClick={sendMessage} component="h2">
          Send
        </Button>
      </Element>
  )
}