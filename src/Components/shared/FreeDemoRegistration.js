import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import emailjs from 'emailjs-com';
import Alert from '@material-ui/lab/Alert';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { Header } from './Header';


export const FreeDemoRegistration = (props) => {
  const { isDesktop } = props;
  const [parentName, setParentName] = useState('');
  const [childName, setChildName] = useState('');
  const [phone, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [childAge, setChildAge] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const [emailValidated, setEmailValidated] = useState(true);
  const [alertOpen, setAlertOpen] = useState(false);

  const useStyles = makeStyles(() => ({
    contactUsBtn: {
      color: '#ffffff !important',
      backgroundColor: '#990000 !important',
      textTransform: 'none !important',
      fontSize: '20px !important',
      padding: '10px 20px 10px 20px !important',
      "&:hover": {
        backgroundColor: "#990000 !important",
        opacity: '0.8 !important'
      }
    },
    contactUsFormContainer: {
      maxWidth: '500px',
      margin: '0 auto',
      position: 'relative',
      justifyContent: 'center',
      paddingTop: '50px',
      textAlign: 'center',
      '& .MuiTextField-root': {
        width: isDesktop ? '500px' : '90%',
        marginBottom: '50px'
      }
    },
    formControl: {
      width: '500px',
      marginBottom: '50px'
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
    formTitle: {
      marginTop: '50px',
      marginBottom: '50px'
    },
    checkboxPosition:{
      marginLeft: '50px',
    },
    checkboxWrapper: {
      border: '1px solid #cccccc',
      borderRadius: '20px',
      padding: '10px',
      margin: isDesktop ? '0px 0px 50px 0px' : '0px auto 50px auto',
      width: !isDesktop && '90%',
    }
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

  const handleParentNameChange = (event) => {
    setParentName(event.target.value);
  }

  const handleChildNameChange = (event) => {
    setChildName(event.target.value);
  }

  const handlePhoneChange = (event) => {
    setPhoneNumber(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  }

  const handleChildAgeChange = (event) => {
    setChildAge(event.target.value);
  }

  const isValidUserDetails = () => {
    if (!parentName || !childName || !email || !childAge) {
      return false;
    }
    var emailpattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

    if (!emailpattern.test(email)) {
      return false;
    }
    return true;
  }

  const sendMessage = async (event) => {
    event.preventDefault();
    if (!isValidUserDetails()) {
      return setEmailValidated(false);
    }
    
    const templateParams = {
      from_name: parentName,
      from_email: email,
      to_name: "lifekiabc@gmail.com",
      user_message: message,
      parent_name: parentName,
      child_name: childName,
      child_age: childAge,
      phone_number: phone
    };
    const sentEmail = await emailjs.send("lifekiabc", "template_fZpob7Jv_clone", templateParams, 'user_HIdKyA0Sljcn6qVCU4c5T');
    const { status } = sentEmail;
    if (status === 200) {
      setSuccess(true);
    } else {
      setFailure(true);
    }
    setAlertOpen(true);
  }

  const classes = useStyles();

  return (
    <>
      <Header isDesktop={isDesktop}/>
      <div className={classes.contactUsFormContainer}>
        <form noValidate autoComplete="off">
          <Typography variant={"h6"}>
            Please enter your details and we will get back to you!
          </Typography>
          <Typography variant={"h6"}>
            All courses are for 8 - 12 years old
          </Typography>
          <br/>
          <br/>
          <TextField error={!emailValidated} required id="parentName" label="Parent's Name" value={parentName} onChange={handleParentNameChange}/>
          <TextField error={!emailValidated} required id="childName" label="Child's Name" value={childName} onChange={handleChildNameChange}/>
          <TextField error={!emailValidated} required id="childAge" label="Child's Age" value={childAge} onChange={handleChildAgeChange} type="number"/>
          <TextField error={!emailValidated} required id="email" label="Email" value={email} onChange={handleEmailChange}/>
          <TextField id="phone" label="Phone Number" value={phone} onChange={handlePhoneChange}/>
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
        {failure && alertOpen && <CustomAlert severity="error" message="There was a problem sending your message.Please try again later or contact us at lifekiabc.com" />}
        {success && alertOpen && <CustomAlert severity="success" message="Thank you for contacting us.We have got your details.We will get back to you soon to set up a free demo." />}
        <Button variant="contained" className={classes.contactUsBtn} onClick={sendMessage} component="h2">
          Submit
        </Button>
      </div>
    </>
  )
}