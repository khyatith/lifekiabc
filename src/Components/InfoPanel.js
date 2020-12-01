import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import VisibilitySensor from 'react-visibility-sensor';
import Slide from '@material-ui/core/Slide';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import pt1 from '../assets/pt1.png';
import pt2 from '../assets/pt2.jpg';
import pt3 from '../assets/pt3.jpg';
import pt4 from '../assets/pt4.png';
import pt6 from '../assets/pt6.png';
import pt7 from '../assets/pt7.jpg';

const WHY_US_PART1 = [{
  text: "100% instructor led sessions facilitating interactive learning",
  image: pt1 
},{
  text: "Engrossing homework to reinforce concepts taught in class",
  image: pt2
}, {
  text: "Engaging curriculum, specially designed for igniting young minds",
  image: pt3
}, {
  text: "Fun activities to improve focus, understanding, and retention",
  image: pt4
}, {
  text: "Virtual sessions to attend from the comfort of your home",
  image: pt7
}, {
  text: "Amazing summary sheets provided for future reference",
  image: pt6
}];

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
    whyUsCard: {
      display: 'inline-block',
      margin: "40px",
      maxWidth: 345,
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
    return data.map((content, index) => {
      const { image, text } = content;
      return (<Slide in={isVisible} direction="left" timeout={{enter: 1000}} mountOnEnter unmountOnExit={false} key={index}>
        <Card className={classes.whyUsCard}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="200"
              image={image}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography variant="body2" component="p">
                {text}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Slide>);
    });
  };

  return (
    <div className={classes.container}>
      <VisibilitySensor onChange={changeVisibilityHandler} partialVisibility={true}>
        <div className={classes.missionDiv}>
          <Typography variant={"h4"} className={isVisible ? classes.fadeInUp : ''}>
            <span className={classes.blueColor}>Why enroll with us?</span>
          </Typography>
          <div>
            {renderContent(WHY_US_PART1)}
          </div>
        </div>
      </VisibilitySensor>
    </div>
  )
}