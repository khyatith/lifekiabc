import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import VisibilitySensor from 'react-visibility-sensor';
import { Element } from 'react-scroll';
import { Carousal } from './shared/Carousal';

var items = [
  {
    description: "We are a group of Indian women who are passionate about bringing a transformative wave in the life of students in India."
  },
  {
    description: "Our objective is to add value to conventional learning by equipping students with essential life skills."
  },
  {
    description: "We hope that our efforts will empower them to achieve their full potential and facilitate the creation of long lasting positive habits, giving them a competitive edge to succeed in life."
  }
];

const useStyles = makeStyles(() => ({
  blueColor: {
    color: '#3299CC'
  },
  aboutUsDiv: {
    flex: 1,
    padding: '100px'
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

export const AboutUsCarousal = (props) => {
  const { isDesktop } = props;
  const classes = useStyles();
  const [isVisible, setVisibility] = useState(false);

  const changeVisibilityHandler = (e) => {
    setVisibility(e);
  };

  return (
    <Element id='/about-us' name='/about-us'>
      <VisibilitySensor onChange={changeVisibilityHandler} offset={{top:10, bottom: 10}}>
          <div className={classes.aboutUsDiv}>
            <Typography variant={isDesktop ? "h3" : "h4"} className={`${isVisible ? classes.fadeInUp : ''}`}>
              <span className={classes.blueColor}>About Us</span>
              <Carousal items={items} backgroundColor="#dce0e5" />
            </Typography>
          </div>
      </VisibilitySensor>
    </Element>
  )
}