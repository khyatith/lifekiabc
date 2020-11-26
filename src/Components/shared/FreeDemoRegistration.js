import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import emailjs from 'emailjs-com';
import Alert from '@material-ui/lab/Alert';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import { Header } from './Header';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import { FormControlLabel } from '@material-ui/core';
import FormGroup from '@material-ui/core/FormGroup';

const ALL_COURSES = [{
  value: "1",
  name: 'Super Leaders Program (10 - 14 years)',
}, {
  value: "2",
  name: 'Super Leaders Program (15 - 19 years)',
}, {
  value: "3",
  name: 'Super Achievers Bootcamp (15 - 17 years)',
}, {
  value: "4",
  name: 'Time Management',
}, {
  value: "5",
  name: 'Public Speaking & Confidence Building',
}];

export const FreeDemoRegistration = (props) => {
  const { isDesktop } = props;
  const [parentName, setParentName] = useState('');
  const [childName, setChildName] = useState('');
  const [phone, setPhoneNumber] = useState('');
  const [checkedCourses, setCheckedCourses] = useState([]);
  const [email, setEmail] = useState('');
  const [childAge, setChildAge] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const [emailValidated, setEmailValidated] = useState(true);
  const [alertOpen, setAlertOpen] = useState(false);

  const useStyles = makeStyles(() => ({
    contactUsBtn: {
      color: '#ffffff',
      backgroundColor: '#990000',
      textTransform: 'none',
      fontSize: '20px',
      padding: '10px 20px 10px 20px',
      "&:hover": {
        backgroundColor: "#990000",
        opacity: '0.8'
      }
    },
    contactUsFormContainer: {
      width: '500px',
      margin: '0 auto',
      position: 'relative',
      justifyContent: 'center',
      textAlign: 'center',
      '& .MuiTextField-root': {
        width: isDesktop ? '400px' : '100%',
        marginBottom: '50px'
      }
    },
    formControl: {
      width: '80%',
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
      marginBottom:'50px'
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

  const getSelectedCourseNames = () => {
    const result = [];
    for(let i=0; i < ALL_COURSES.length; i++) {
      for (let j=0; j < checkedCourses.length; j++) {
        if (checkedCourses[i] === ALL_COURSES[j].value) {
          result.push(ALL_COURSES[j].name);
        }
      }
    }
    return result;
  }

  const sendMessage = async (event) => {
    event.preventDefault();
    if (!isValidUserDetails()) {
      setEmailValidated(false);
    }

    const selectedCourseNames = getSelectedCourseNames();
    
    const templateParams = {
      from_name: parentName,
      from_email: email,
      to_name: "lifekiabc@gmail.com",
      user_message: message,
      parent_name: parentName,
      selected_courses: selectedCourseNames,
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
  const handleCourseChange = (event) => {
    const { value } = event.target;
    setCheckedCourses(checkedCourses.includes(value) ? checkedCourses.filter(c => c !== value) : [...checkedCourses, value]);
  }

  const classes = useStyles();

  const renderAvailableCourses = () => {
    return (
      ALL_COURSES.map((course) => {
          const { value,name } = course;
          return <FormGroup>
            <FormControlLabel
            control={<Checkbox
              checked ={checkedCourses.includes(value)}
              onChange={handleCourseChange}
              name={name}
              value={value}
              color="secondary"
            />}
            label={name}
          />
        </FormGroup>
      })
    )
  };

  return (
    <>
      <Header isDesktop={isDesktop}/>
      {failure && alertOpen && <CustomAlert severity="error" message="There was a problem sending your message.Please try again later or contact us at lifekiabc.com" />}
      {success && alertOpen && <CustomAlert severity="success" message="Thank you for contacting us.We will get back to you soon" />}
      <div className={classes.contactUsFormContainer}>
        <form noValidate autoComplete="off">
          <Typography variant={"h6"}>
            Please enter your details and we will get back to you right away!
          </Typography>
          <TextField error={!emailValidated} required id="parentName" label="Parent's Name" value={parentName} onChange={handleParentNameChange}/>
          <TextField error={!emailValidated} required id="childName" label="Child's Name" value={childName} onChange={handleChildNameChange}/>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-native-simple">Child's Age</InputLabel>
              <Select
                native
                value={childAge}
                onChange={handleChildAgeChange}
                inputProps={{
                  name: 'age',
                  id: 'age-native-simple',
                }}
              >
                <option aria-label="None" value="" />
                <option value={10-14}>10 - 14</option>
                <option value={15-18}> 15 - 19</option>
              </Select>
          </FormControl>
          <TextField error={!emailValidated} required id="email" label="Email" value={email} onChange={handleEmailChange}/>
          <TextField error={!emailValidated} id="phone" label="Phone Number" value={phone} onChange={handlePhoneChange}/>
          <div className={classes.checkboxWrapper}>
              {renderAvailableCourses()}
          </div>
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
          Submit
        </Button>
      </div>
    </>
  )
}