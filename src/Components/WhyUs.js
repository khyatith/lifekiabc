import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import VisibilitySensor from 'react-visibility-sensor';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';

export const WhyUs = (props) => {
  const { isDesktop } = props;
  const [isVisible, setVisibility] = useState(false);

  const useStyles = makeStyles(() => ({
    container: {
      display: 'flex',
      margin: '0 20px',
    },
    fadeInUp: {
      animation: `$fadeInUp 1s both`,
      opacity: 0,
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
    programpathcontainer: {
      width: '100%',
      marginTop: '50px',
      marginBottom: '50px',
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
      color: '#990000',
      fontWeight: 'bold'
    },
    explanation: {
      fontSize: '15px'
    },
  }));

  const changeVisibilityHandler = (e) => {
    setVisibility(e);
  };

  const classes = useStyles();

  const whyUsData = [{
    heading: 'Collaboration over competition',
    text: 'In the modern workplace and to solve the real world problems, collaboration is more important than competition. We teach students to collaborate to come up with creative solutions rather than compete with their batchmates.'
  }, {
    heading: 'No teachers, only mentors',
    text: 'In the real world, there are no teachers. There are only mentors. That is what Life ki ABC is for. We don\'t teach students, we mentor them on problem solving and structured thinking.'
  }, {
    heading: 'Not only Public speaking',
    text: 'In the meetings and interviews, students don\'t only need Public speaking. They require confidence to speak up and the ability to think critically. This is what we are here for!'
  }, {
    heading: 'No boring lectures. Only videos and creative tasks',
    text: 'Let\'s face it. Lectures are boring! Students learn through videos and apply the knowledge that they need to come up with various solutions to real-world problems.'
  }]

  const renderWhyUsDesktop = () => {
    return (
      <TableContainer component={Paper} className={classes.programpathcontainer}>
        <Table aria-label="simple table">
          <TableBody>
            {
              whyUsData.map((data, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row" style={{width: '30%'}}>
                      <Typography component="p" className={classes.heading}>
                        {data.heading} <br/>
                      </Typography>
                    </TableCell>
                    <TableCell align="left">
                      <Typography className={classes.explanation}>
                        {data.text}
                      </Typography>
                    </TableCell>
                  </TableRow>
                )
              })
            }
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  const renderWhyUsMobile = () => {
    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          {
            whyUsData.map((data, index) => {
              return (
                <>
                  <TableHead key={index} className={classes.heading}>
                    <TableRow className={classes.heading}>
                      <TableCell className={classes.heading}>{data.heading}</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableCell>{data.text}</TableCell>
                  </TableBody>
                </>
              );
            })
          }
        </Table>
      </TableContainer>
    );
  };

  return (
    <div className={classes.container}>
      <div style={{width: '100%'}}>
        <VisibilitySensor onChange={changeVisibilityHandler} partialVisibility={true}>
          <>
            <div style={{width: '100%', textAlign: 'center', marginTop: '20px'}}>
              <Typography variant={"h4"} className={`${isVisible ? classes.fadeInUp : ''}`}>
                <Box fontWeight="fontWeightBold">
                  <span className={classes.blueColor}>Why Life ki ABC</span>
                </Box>
              </Typography>
              {isDesktop && 
                <Grid item xs={12} md={12} style={{marginTop: '30px'}}>
                  {renderWhyUsDesktop()}
                </Grid>
              }
              {
                !isDesktop &&
                <Grid item xs={12} md={12} style={{marginTop: '30px'}}>
                  {renderWhyUsMobile()}
                </Grid>
              }
            </div>
          </>
        </VisibilitySensor>
      </div>
    </div>
  )
}