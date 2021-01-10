import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import VisibilitySensor from 'react-visibility-sensor';
import { useHistory, Link } from "react-router-dom";
import { MINI_COURSES, LONG_TERM_PROGRAMS } from '../data/programs';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { Button } from '@material-ui/core';

export const Programs = (props) => {
  const [isVisible, setVisibility] = useState(false);
  const history = useHistory();

  const useStyles = makeStyles(() => ({
    container: {
      display: 'flex',
      margin: '20px',
    },
    fadeInUp: {
      animation: `$fadeInUp 1s both`,
      opacity: 0,
    },
    blueColor: {
      color: '#3299CC'
    },
    ourprograms: {
      flex: 1,
      cursor: 'pointer',
    },
    courseTitle: {
      height: '20px'
    },
    marginTopLarge: {
      marginTop: '50px'
    },
    imgFit: {
      objectFit: 'contain'
    },
    // coursesGrid: {
    //   margin: '30px 24px 0px 24px',
    //   padding: '0 !important'
    // },
    programCard: {
      maxWidth: 345,
      margin: '50px 30px 30px 30px'
    },
    media: {
      height: 0,
      paddingTop: '40%',
      backgroundSize: 'contain',
      "& .MuiCardMedia-img": {
        backgroundSize: 'contain'
      }
    },
    modules: {
      textAlign: 'center',
      backgroundColor: '#ffffff',
      height: '150px',
      cursor: 'pointer',
      '&:hover': {
        opacity: '0.5',
        border: "solid 2px #3299CC"
     },
    },
    payNowBtn: {
      marginBottom: '10px',
      marginLeft: '10px',
      marginRight: '20px',
      color: '#ffffff',
      backgroundColor: '#990000',
      textTransform: 'none',
      padding: '10px',
      zIndex: '999',
      lineHeight: '1',
      "&:hover": {
        backgroundColor: "#990000",
        opacity: '0.8'
      }
    },
    viewMoreBtn:{
      textTransform: 'none',
      backgroundColor: 'transparent',
      textDecoration: 'underline',
      color: '#3299CC'
    },
    programCardHeader:{
      "& .MuiCardHeader-title": {
        fontSize: '1rem'
      }
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
  }));

  const changeVisibilityHandler = (e) => {
    setVisibility(e);
  };

  const renderCourseDetail = (e, course) => {
    console.log('inside course details',course);
    const { name, link, type } = course;
    history.push({
      pathname: `/course/${link}`,
      state: { name, type }
    });
  }

  const renderPaymentPage = (e, paymentLink) => {
    window.location.assign(paymentLink)
  }

  const renderCourses = (CoursesArray) => {
    return CoursesArray.map((course, i) => {
      const { name, image, price, startDate, minidescription, endDate, timing, paymentLink } = course;
      return (
          <Card className={classes.programCard}>
            <CardHeader
              title={name}
              subheader={`Rs. ${price}`}
              className={classes.programCardHeader}
            />
            <CardMedia
              className={classes.media}
              image={image}
              title={name}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {minidescription}
              </Typography>
              <br/>
              { (startDate && endDate && timing) ? (
                <Typography variant="body2" component="p">
                  Upcoming batch : <br/> {startDate} - {endDate} <br/>
                  Class Timing : {timing}
                </Typography>
              ) : 
              <Typography variant="body2" component="p">
                New batches are going to be announced soon.<br/>
                Please submit a <Link to={"/free-demo-registration"}>request for a free demo</Link> so we can contact you when the new batches start.
              </Typography>
            }
            </CardContent>
            <CardActions>
            { paymentLink ? 
              <Button variant="contained" className={classes.payNowBtn} onClick={(e) => renderPaymentPage(e, paymentLink)} component="h2">
                Enroll now
              </Button>
              :
              <Button variant="contained" className={classes.payNowBtn} component="h2" disabled>
                Enroll now
              </Button>
            }
            <Button onClick={(e) => renderCourseDetail(e, course)} className={classes.viewMoreBtn}>
              View details
            </Button>
            {/* <Button variant="contained" className={classes.viewDetailsBtn} onClick={(e) => renderCourseDetail(e, course)} component="h2">
              View Details
            </Button> */}
            </CardActions>
          </Card>
      )
    })
  }

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div>
        <VisibilitySensor onChange={changeVisibilityHandler} partialVisibility={true}>
          <>
            <div>
              <Typography variant={"h5"} className={`${isVisible ? classes.fadeInUp : ''}`}>
                <Box fontWeight="fontWeightBold">
                  <span className={classes.blueColor}>Mini-courses</span>
                </Box>
              </Typography>
              <div className={classes.ourprograms}>
                <Grid container spacing={6}>
                  {renderCourses(MINI_COURSES)}
                </Grid>
              </div>
            </div>
            <div className={classes.marginTopLarge}>
              <Typography variant={"h5"} className={`${isVisible ? classes.fadeInUp : ''}`}>
                <Box fontWeight="fontWeightBold">
                  <span className={classes.blueColor}>Comprehensive courses</span>
                </Box>
              </Typography>
              <div className={classes.ourprograms}>
                <Grid container spacing={6}>
                  {renderCourses(LONG_TERM_PROGRAMS)}
                </Grid>
              </div>
            </div>
          </>
        </VisibilitySensor>
      </div>
    </div>
  )
}