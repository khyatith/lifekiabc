import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import { Banner } from './Banner';
import CardMedia from '@material-ui/core/CardMedia';
import VisibilitySensor from 'react-visibility-sensor';
import Typography from '@material-ui/core/Typography';
import { ContactUsButton } from './ContactUsButton';
import { MINI_COURSES, LONG_TERM_PROGRAMS } from '../../data/programs';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import { ConnectWithUs } from './ConnectWithUs';
import Box from '@material-ui/core/Box';

export const CourseDetail = (props) => {
  const { isDesktop } = props;
  const [isVisible, setVisibility] = useState(false);
  const [selectedCourseDetail, setSelectedCourseDetail] = useState({});
  const location = useLocation();

  useEffect(() => {
    const name = location.state.name;
    const type = location.state.type;
    const dataSource = type === "course" ? MINI_COURSES : LONG_TERM_PROGRAMS
    const courseDetail = dataSource.filter(course => course.name === name)[0];
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
      lineHeight: '1.5em',
      fontWeight: 'bold',
      fontSize: isDesktop ? '1.5em' : '2em',
    },
    catchPhraseDiv: {
      backgroundColor: '#fefee1',
      display: 'inline-block',
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
    courseDescription: {
      display: 'flex',
      margin: '20px',
    },
    courseCurriculum: {
      display: 'flex',
      margin: '20px'
    },
    courseBenefits: {
      display: 'flex',
      flexWrap: !isDesktop && 'wrap',
      margin: isDesktop ? '50px 20px' : '50px 20px',
      padding: '20px',
      backgroundColor: '#fefee1',
      height: 'auto'
    },
    imgDiv: {
      width: '100%',
      position: 'static',
      display: 'inline-block',
      //height: isDesktop ? '500px' : 'auto',
    },
    blueColor: {
      color: '#3299CC'
    },
    fontSizeMd: {
      fontSize: '20px',
      lineHeight: '1.4'
    },
    bold: {
      fontWeight: 'bold'
    },
    curriculumCard: {
      display: 'inline-block',
      margin: "20px",
      width: 345,
      height: '300px',
      padding: '10px',
      border: '2px solid #fbcd4c'
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
  const classes = useStyles();
  const changeVisibilityHandler = (e) => {
    setVisibility(e);
  };

  const renderBenefits = () => {
    return (
      <ul>
      {selectedCourseDetail.benefits && selectedCourseDetail.benefits.map((benefit) => {
          return (
            <li>
              <p className={`${classes.fontSizeMd} ${isVisible ? classes.fadeInUp : ''}`}>{benefit}</p>
            </li>
          )
        })
      }
      </ul>
    )
  }

  const renderProgramCurriculum = (programCurriculum) => {
    return programCurriculum.map((curr , index) => {
      const { title, list } = curr;
      return (
      <Card className={classes.curriculumCard} key={index}>
        <CardActionArea>
          <Typography variant={"h6"} className={`${isVisible ? classes.fadeInUp : ''}`}>
            <p className={classes.bold}>{title}</p>
          </Typography>
          <CardContent style={{ padding: 0 }}>
            <ul>
              {list.map(li => {
                return (<li>
                  <p style={{ fontSize: '15px'}} className={`${isVisible ? classes.fadeInUp : ''}`}>{li}</p>
                </li>)
              })}
            </ul>
          </CardContent>
        </CardActionArea>
      </Card>
      )
    })
  }

  const renderCurriculum = () => {
    const curriculum = selectedCourseDetail.curriculum && selectedCourseDetail.curriculum;
    const type = selectedCourseDetail.type && selectedCourseDetail.type;
    if (!curriculum) return;
    if (type === "course") {
        return curriculum.map((benefit, index) => {
          return (
          <ul>
            <li>
              <p style={{ fontSize: '20px'}} className={`${isVisible ? classes.fadeInUp : ''}`}>{benefit}</p>
            </li>
          </ul>
        )
      })
    } else {
      return renderProgramCurriculum(curriculum);
    }
  }

  return (
    <>
      <Banner isDesktop={isDesktop}>
        <VisibilitySensor onChange={changeVisibilityHandler} partialVisibility={true}>
          <div className={classes.container}>
            <Grid item xs={12} md={8} className={classes.imgDiv}>
              <CardMedia component="img" image={selectedCourseDetail.image} className={classes.media1} height={isDesktop ? '300px' : '100%'} width={'200px'}/>
            </Grid>
            <Grid item xs={12} md={4} className={classes.catchPhraseDiv}>
              <div className={classes.catchPhrase}>
                <Typography variant={"h6"} className={`${classes.missionStmt1} ${isVisible ? classes.fadeInUp : ''}` }>
                  {selectedCourseDetail.catchPhrase}
                  <br/>
                  {`(${selectedCourseDetail.ageGroup})`}
                </Typography>
              </div>
              <ContactUsButton />
            </Grid>
          </div>
        </VisibilitySensor>
      </Banner>
      <div className={classes.courseDescription}>
        <div>
          <VisibilitySensor onChange={changeVisibilityHandler} partialVisibility={true}>
            <>
              <Typography variant={"h6"} className={`${isVisible ? classes.fadeInUp : ''}`}>
                <Box fontWeight="fontWeightBold">
                  <span className={classes.blueColor}>What is {selectedCourseDetail.name} {selectedCourseDetail.type}</span>
                </Box>
              </Typography>
              <p className={`${classes.fontSizeMd} ${isVisible ? classes.fadeInUp : ''}`}>{selectedCourseDetail.description}</p>
            </>
          </VisibilitySensor>
        </div>
      </div>
      <div className={classes.courseBenefits}>
        <div>
          <Typography variant={"h6"} className={`${isVisible ? classes.fadeInUp : ''}`}>
            <Box fontWeight="fontWeightBold">
              <span className={classes.blueColor}>Outcomes of {selectedCourseDetail.name} {selectedCourseDetail.type}</span>
            </Box>
          </Typography>
          {renderBenefits()}
        </div>
      </div>
      <div className={classes.courseCurriculum}>
        <div>
          <Typography variant={"h6"} className={`${isVisible ? classes.fadeInUp : ''}`}>
            <Box fontWeight="fontWeightBold">
              <span className={classes.blueColor}>Curriculum</span>
            </Box>
          </Typography>
          {renderCurriculum()}
        </div>
      </div>
      <ConnectWithUs isDesktop={isDesktop} shouldWrap={false} />
    </>
  );
}