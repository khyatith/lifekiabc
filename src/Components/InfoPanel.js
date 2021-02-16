import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
// import pt3 from '../assets/pt3.jpg';
// import pt5 from '../assets/pt5.png';
// import pt9 from '../assets/pt9.jpg';

// const WHY_US_PART1 = [{
//   title: "Application-oriented",
//   text: "We focus on teaching students the application of learnt knowledge in the real world through pragmatic case discussions and application-based activities. This ‘learning in practice’ allows students to implement life skills in practical ways in their daily lives, resulting in the cultivation of applied thinking.",
//   image: pt9
// },{
//   title: "Student-centered",
//   text: "Our interactive workshops are designed to let students take control of the learning process. We take a student-centered learning approach where students drive the program, and their involvement in the decision making process helps them to take complete accountability for their actions.",
//   image: pt5
// },{
//   title: "Evidence-based",
//   text: "We teach students using evidence-based learning techniques (pomodoro technique, ANTS, THINK and other mindfulness practices) to develop a growth mindset and facilitate the creation of long lasting positive habits, giving them a competitive edge to succeed in life",
//   image: pt3
// }];

export const InfoPanel = (props) => {
  const { isDesktop } = props;
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const useStyles = makeStyles(() => ({
    container: {
      flexWrap: !isDesktop && 'wrap',
      margin: '50px 20px',
      height: 'auto'
    },
    missionDiv: {
      margin: '20px 0px',
      padding: !isDesktop ? '0px 0px 0px 10px' : '10px 20px',
      textAlign: 'center'
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
    explanation: {
      fontSize: '20px'
    },
    whyUsCard: {
      display: 'inline-block',
      margin: isDesktop && "40px 40px 40px 10px",
      marginTop: !isDesktop && '20px',
      maxWidth: 345,
      height: 420,
    },
    programpathcontainer: {
      width: '100%',
      marginTop: '50px',
      "& .MuiAccordionSummary-root": {
        width: '100%',
        "& .MuiAccordionSummary-content": {
          padding: '20px'
        },
        "& .MuiAccordionSummary-expandIcon": {
          margin: '0px !important'
        }
      }
    },
    heading: {
      fontSize: '20px',
      //flexBasis: '33.33%',
      //flexShrink: 0,
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

  const renderProgramPath = () => {
    return (
      <div className={classes.programpathcontainer}>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography component="p" className={classes.heading}>
              Art of conveying ideas clearly <br/>
              <span className={classes.blueColor}>6 weeks</span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={classes.explanation}>
              Students will learn how to structure and articulate their thoughts on important topics. They will also learn the art of managing nervousness while talking in front of known and unkown people
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography className={classes.heading}>
              Art of engaging listeners <br/>
              <span className={classes.blueColor}>6 weeks</span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={classes.explanation}>
              Students will learn how to speak confidently and engagingly in front of an audience. Students will get ample practice to work on their speech delivery.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography className={classes.heading}>
              Art of speaking effectively <br/>
              <span className={classes.blueColor}>6 weeks</span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={classes.explanation}>
              Students will learn different forms of speech and how to structure their thoughts according to the audience.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    );
  }

  // const renderContent = (data) => {
  //   return data.map((content, index) => {
  //     const { image, text, title } = content;
  //     return (
  //       <Slide in={isVisible} direction="left" timeout={{enter: 1000}} mountOnEnter unmountOnExit={false} key={index}>
  //         <Card className={classes.whyUsCard}>
  //           <CardActionArea>
  //             <CardMedia
  //               component="img"
  //               alt="Contemplative Reptile"
  //               height="200"
  //               image={image}
  //               title="Contemplative Reptile"
  //             />
  //             <CardContent>
  //               <Typography gutterBottom variant="h5" component="h2">
  //                 {title}
  //               </Typography>
  //               <Typography variant="body2" component="p">
  //                 {text}
  //               </Typography>
  //             </CardContent>
  //           </CardActionArea>
  //         </Card>
  //       </Slide>
  //     );
  //   });
  // };

  return (
    <div className={classes.container}>
      <div className={classes.missionDiv}>
        <Typography variant={"h4"}>
          <Box fontWeight="fontWeightBold">
            <span className={classes.blueColor}>Program path</span>
          </Box>
        </Typography>
        <div>
          {renderProgramPath()}
        </div>
      </div>
    </div>
  )
}