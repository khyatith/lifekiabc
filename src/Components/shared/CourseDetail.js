import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Header } from './Header';
import { Banner } from './Banner';
import CardMedia from '@material-ui/core/CardMedia';
import VisibilitySensor from 'react-visibility-sensor';
import Typography from '@material-ui/core/Typography';
import { ContactUsButton } from './ContactUsButton';
import { INDIVIDUAL_COURSES } from '../../data/programs';

export const CourseDetail = (props) => {
  const { isDesktop } = props;
  const [selectedCourseName, setSelectedCourseName] = useState('');
  const [selectedCourseDetail, setSelectedCourseDetail] = useState({});
  const location = useLocation();

  useEffect(() => {
    const name = location.state.name;
    setSelectedCourseName(name);
    const courseDetail = INDIVIDUAL_COURSES.filter(course => course.name === name)[0];
    setSelectedCourseDetail(courseDetail);
 }, [location]);
  
  const useStyles = makeStyles(() => ({
    bannerContainer: {
      flexGrow: 1,
      paddingRight: '20px',
      paddingLeft: '20px',
      marginBottom: isDesktop && '70px'
    },
    paper: {
      textAlign: 'center',
      color: '#000000',
      boxShadow: 'none',
      position:'relative'
    },
    missionStmt1: {
      color: '#000000',
      lineHeight: '1.5em'
    },
    catchPhraseDiv: {
      //width: '500px',
      backgroundColor: '#fff5eb',
      display: 'inline-block',
      // '-webkit-box-flex': isDesktop && '0 0 45%',
      // '-ms-flex': isDesktop && '0 0 45%',
      // flex: isDesktop && '0 0 45%',
      //height: !isDesktop && 'auto',
      float: 'left',
      height: isDesktop ? '300px' : '100%',
    },
    catchPhrase: {
      margin: '50px',
    },
    container: {
      display: 'block',
    },
    media1: {
      objectFit: 'contain'
    },
    imgDiv: {
      width: '100%',
      position: 'static',
      display: 'inline-block',
      //height: isDesktop ? '500px' : 'auto',
    },
  }));
  const classes = useStyles();
  return (
    <>
      <Banner isDesktop={isDesktop}>
        <VisibilitySensor>
          <div className={classes.container}>
            <Grid item xs={12} md={8} className={classes.imgDiv}>
              <CardMedia component="img" image={selectedCourseDetail.image} className={classes.media1} height={isDesktop ? '300px' : '100%'} width={'200px'}/>
            </Grid>
            <Grid item xs={12} md={4} className={classes.catchPhraseDiv}>
              <div className={classes.catchPhrase}>
                <Typography variant={"h5"} className={`${classes.missionStmt1}`}>
                  {selectedCourseDetail.description}
                </Typography>
              </div>
              <ContactUsButton />
            </Grid>
          </div>
        </VisibilitySensor>
      </Banner>
    </>
  );
}