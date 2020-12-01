import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Element } from 'react-scroll';
import VisibilitySensor from 'react-visibility-sensor';
import Paper from '@material-ui/core/Paper';
import { useHistory } from "react-router-dom";
import { INDIVIDUAL_COURSES } from '../data/programs';

export const Programs = (props) => {
  const { isDesktop } = props;
  const [isVisible, setVisibility] = useState(false);
  const history = useHistory();

  const useStyles = makeStyles(() => ({
    planContainer: {
      display: 'flex',
      margin: '20px',
    },
    fadeInUp: {
      animation: `$fadeInUp 1s both`,
      opacity: 0,
    },
    whatwedotext: {
      fontSize: isDesktop ? '24px' : '20px',
      lineHeight: '1.5em'
    },
    blueColor: {
      color: '#3299CC'
    },
    whatwedomodules: {
      flex: 1,
      cursor: 'pointer',
    },
    courseTitle: {
      height: '40px'
    },
    modules: {
      textAlign: 'center',
      backgroundColor: '#ebf5ff',
      height: '200px',
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
    const { name, image, link } = course;
    history.push({
      pathname: `/course/${link}`,
      state: { name }
  });
  }

  const renderIndividualCourses = () => {
    return INDIVIDUAL_COURSES.map((course, i) => {
      const { name, image, link } = course;
      return (
        <Grid key={i} value={name} item xs={12} sm={3} onClick={(e) => renderCourseDetail(e, course)}>
          <h3 className={classes.courseTitle}>{name}</h3>
          <Paper className={classes.modules}>
            <CardMedia component="img" image={image} height="100%" />
          </Paper>
        </Grid>
      )
    })
  }

  const classes = useStyles();

  return (
    <Element id="/what-we-do" name="/what-we-do">
        <div className={classes.planContainer}>
          <div>
            <VisibilitySensor onChange={changeVisibilityHandler} partialVisibility={true}>
              <>
                <Typography variant={"h4"} className={`${isVisible ? classes.fadeInUp : ''}`}>
                  <span className={classes.blueColor}>Our Courses</span>
                </Typography>
                <div className={classes.whatwedomodules}>
                  <Grid container spacing={6}>
                    {renderIndividualCourses()}
                  </Grid>
                </div>
              </>
            </VisibilitySensor>
          </div>
        </div>
    </Element>
  )
}