import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import VisibilitySensor from 'react-visibility-sensor';
import pt1 from '../assets/pt1.png';
import pt2 from '../assets/pt2.jpg';
import pt3 from '../assets/pt3.jpg';
import pt4 from '../assets/pt4.png';
import pt5 from '../assets/pt5.png';
import pt6 from '../assets/pt6.png';
import pt7 from '../assets/pt7.jpg';
import pt8 from '../assets/pt8.jpg';

const WHY_US_PART1 = [{
  text: "100% instructor led sessions facilitating interactive learning",
  image: pt1 
},{
  text: "Small class sizes guarantees individual attention",
  image: pt2
}, {
  text: "Engaging curriculum, specially designed for igniting young minds",
  image: pt3
}, {
  text: "Fun activities to improve focus, understanding, and retention",
  image: pt4
}];

const WHY_US_PART2 = [{
  text: "Engrossing homework to reinforce concepts taught in class",
  image: pt5
}, {
  text: "Amazing summary sheets provided for future reference",
  image: pt6
}, {
  text: "Virtual sessions to attend from the comfort of your home",
  image: pt7
}, {
  text: "Dedicated instructors who are available on whatsapp in between sessions for questions",
  image: pt8
}]

export const InfoPanel = (props) => {
  const { isDesktop } = props;
  const useStyles = makeStyles(() => ({
    container: {
      display: 'flex',
      flexWrap: !isDesktop && 'wrap',
      margin: isDesktop ? '50px 20px' : '50px 20px',
      backgroundColor: '#dce0e5',
      height: 'auto'
    },
    missionDiv: {
      flex: isDesktop && '0 0 45%',
      margin: '20px',
      padding: !isDesktop ? '0px 0px 0px 10px' : '10px 20px',
      //padding: isDesktop ? '100px' : '20px 0px 0px 10px'
    },
    missionDiv1: {
      margin: '20px',
      padding: !isDesktop ? '0px 0px 0px 10px' : '40px 0px 0px 20px'
    },
    list: {
      listStyleType: "none",
    },
    graphics: {
      borderRadius: "50%",
      verticalAlign: "middle",
      marginRight: '10px'
    },
    vl: {
      borderLeft: '2px solid #b0b9c4',
      marginTop: '60px',
      marginBottom: '60px'
    },
    blueColor: {
      color: '#3299CC'
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
  const classes = useStyles(isDesktop);
  const [isVisible, setVisibility] = useState(false);

  const changeVisibilityHandler = (e) => {
    setVisibility(e);
  };

  const renderContent = (data) => {
    return data.map((content) => {
      const { text, image } = content;
      return ( 
        <li>
          <div style={{display: 'flex'}}>
            <img alt="1" className={classes.graphics} src={image} height="80px" width="80px" />
            <span style={{marginTop: '20px'}}>{text}</span>
          </div>
          <br/>
        </li>
      );
    });
  };

  return (
    <div className={classes.container}>
      <div className={classes.missionDiv}>
      <VisibilitySensor onChange={changeVisibilityHandler} partialVisibility={true}>
          <Typography variant={"h4"} className={isVisible ? classes.fadeInUp : ''}>
            <span className={classes.blueColor}>Why enroll with us?</span>
          </Typography>
        </VisibilitySensor>
        <ul className={classes.list}>
          {renderContent(WHY_US_PART1)}
        </ul>
      </div>
        {isDesktop && <div className={classes.vl}></div> }
        <div className={classes.missionDiv1}>
          <ul className={classes.list}>
            {renderContent(WHY_US_PART2)}
          </ul>
        </div>
    </div>
  )
}