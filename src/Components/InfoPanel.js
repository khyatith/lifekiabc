import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import VisibilitySensor from 'react-visibility-sensor';
import Slide from '@material-ui/core/Slide';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import pt3 from '../assets/pt3.jpg';
import pt5 from '../assets/pt5.png';
import pt9 from '../assets/pt9.jpg';

const WHY_US_PART1 = [{
  title: "Student centered approach",
  text: "Our interactive workshops are designed to let students take control of the learning process. We take a student-centered learning approach where students drive the program, and their involvement in the decision making process helps them to take complete accountability for their actions.",
  image: pt5
},{
  title: "Evidence based learning",
  text: "We teach students using evidence-based learning techniques (pomodoro technique, ANTS, THINK and other mindfulness practices) to develop a growth mindset and facilitate the creation of long lasting positive habits, giving them a competitive edge to succeed in life",
  image: pt3
}, {
  title: "Expert mentors. Not teachers",
  text: "Schools focus on what to learn rather than teaching students how to learn. We don't have teachers. We have mentors. Our mentors lead students towards self-awareness of skills and give them regular and relevant feedback on their goal progression.",
  image: pt9
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
      margin: isDesktop && "40px",
      marginTop: !isDesktop && '20px',
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
      const { image, text, title } = content;
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
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
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
          <Typography variant={"h5"} className={isVisible ? classes.fadeInUp : ''}>
            <span className={classes.blueColor}>Our teaching philosophy</span>
          </Typography>
          <div>
            {renderContent(WHY_US_PART1)}
          </div>
        </div>
      </VisibilitySensor>
    </div>
  )
}