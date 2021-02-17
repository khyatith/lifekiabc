import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export const InfoPanel = (props) => {
  const { isDesktop } = props;

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
  }));
  const classes = useStyles(isDesktop);

  const renderProgramPath = () => {
    return (
      <TableContainer component={Paper} className={classes.programpathcontainer}>
        <Table aria-label="simple table">
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row" style={{width: '30%'}}>
                <Typography component="p" className={classes.heading}>
                  Art of conveying ideas clearly <br/>
                  <span className={classes.blueColor}>6 WEEKS</span>
                </Typography>
              </TableCell>
              <TableCell align="left">
                <Typography className={classes.explanation}>
                  Students will learn how to structure and articulate their thoughts on important topics. They will also learn the art of managing nervousness while talking in front of known and unkown people
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row" style={{width: '30%'}}>
                <Typography component="p" className={classes.heading}>
                  Art of engaging listeners <br/>
                  <span className={classes.blueColor}>6 WEEKS</span>
                </Typography>
              </TableCell>
              <TableCell align="left">
                <Typography className={classes.explanation}>
                  Students will learn how to speak confidently and engagingly in front of an audience. Students will get ample practice to work on their speech delivery and storytelling skills.
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row" style={{width: '30%'}}>
                <Typography component="p" className={classes.heading}>
                  Art of speaking effectively <br/>
                  <span className={classes.blueColor}>6 WEEKS</span>
                </Typography>
              </TableCell>
              <TableCell align="left">
                <Typography className={classes.explanation}>
                  Students will learn different forms of speech and how to structure their thoughts according to the audience.
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

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