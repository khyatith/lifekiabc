import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import VisibilitySensor from 'react-visibility-sensor';
import Paper from '@material-ui/core/Paper';
import { useHistory } from "react-router-dom";
import { MINI_COURSES, LONG_TERM_PROGRAMS } from '../data/programs';
import Box from '@material-ui/core/Box';

export const Programs = (props) => {
  const { isDesktop } = props;
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
    coursesGrid: {
      margin: '15px 24px 0px 24px',
      padding: '0 !important'
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
    const { name, link, type } = course;
    history.push({
      pathname: `/course/${link}`,
      state: { name, type }
    });
  }

  const renderCourses = (CoursesArray) => {
    return CoursesArray.map((course, i) => {
      const { name, image } = course;
      return (
        <Grid key={i} value={name} item xs={12} sm={3} onClick={(e) => renderCourseDetail(e, course)} className={!isDesktop && classes.coursesGrid}>
          <h3 className={classes.courseTitle}>{name}</h3>
          <Paper className={classes.modules}>
            <CardMedia className={classes.imgFit} component="img" image={image} height="100%" />
          </Paper>
        </Grid>
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