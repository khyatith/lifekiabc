import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export const InfoPanel = (props) => {
  const { isDesktop } = props;

  const useStyles = makeStyles(() => ({
    container: {
      display: 'flex',
      flexWrap: !isDesktop && 'wrap',
      margin: isDesktop ? '50px 20px' : '50px 20px',
      //backgroundColor: '#fff5eb',
      //border: '1px solid #cccccc',
      height: 'auto'
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
      fontSize: '15px'
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
    programDiv: {
      flex: isDesktop && "0 0 45%",
      margin: '20px 0px',
      padding: !isDesktop ? '0px 0px 0px 10px' : '10px 20px',
      flexWrap: !isDesktop && 'wrap'
    },
    outcomesDiv: {
      flex: isDesktop && "0 0 45%",
      margin: '20px 10px',
      padding: !isDesktop ? '0px 0px 0px 10px' : '10px 20px',
      flexWrap: !isDesktop && 'wrap'
    }
  }));
  const classes = useStyles(isDesktop);

  const renderProgramPath = () => {
    return (
        <div style={{marginTop: '25px'}}>
          <Typography component="p">
            Our programs are carefully designed to make students think about real-world problems. Student will learn how to ask questions, how to think about strategic solutions to problems and how to come up with their own creative solutions.
          </Typography>
          <Typography component="p">
            We use the P21 framework approach to build creativity, collaboration and critical thinking in students with an emphasis on education.
          </Typography>
        </div>
    );
  };

  const renderOutcomes = () => {
    return (
      <div style={{marginTop: '25px'}}>
        <ul>
          <li style={{marginTop:'10px'}}>Remove shyness</li>
          <li style={{marginTop:'10px'}}>Thinking structurally about problems</li>
          <li style={{marginTop:'10px'}}>Increase in confidence to speak up in front of audience</li>
          <li style={{marginTop:'10px'}}>Learn to ask relevant questions</li>
          <li style={{marginTop:'10px'}}>Enhanced global awareness about real-world topics</li>
        </ul>
      </div>
    );
  };

  return (
    <div className={classes.container}>
      <div className={classes.programDiv}>
        <Typography variant={"h4"}>
          <Box fontWeight="fontWeightBold">
            <span className={classes.blueColor}>Program path</span>
          </Box>
        </Typography>
        {renderProgramPath()}
      </div>
      <div className={classes.outcomesDiv}>
        <Typography variant={"h4"}>
          <Box fontWeight="fontWeightBold">
            <span className={classes.blueColor}>Outcomes</span>
          </Box>
        </Typography>
        {renderOutcomes()}
      </div>
    </div>
  )
}