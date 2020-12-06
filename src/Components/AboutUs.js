import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import VisibilitySensor from 'react-visibility-sensor';
import { Banner } from './shared/Banner';
import Grid from '@material-ui/core/Grid';
import khyati from '../assets/aboutus/khyati.png';
import ShrutiKedia from '../assets/aboutus/ShrutiKedia.jpg';
import CardMedia from '@material-ui/core/CardMedia';
import { Values } from './shared/Values';
import { Partners } from './Partners';

export const AboutUs = (props) => {
  const { isDesktop } = props;
  const [isVisible, setVisibility] = useState(false);
  const useStyles = makeStyles(() => ({
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
    blueColor: {
      color: '#3299CC'
    },
    aboutUsDiv: {
      flex: 1,
      padding: !isDesktop ? '10px 0px 0px 10px' : '20px 20px',
      height: 'auto',
      backgroundColor: '#dce0e5',
      margin: '20px'
    },
    aboutUsText: {
      fontSize: isDesktop ? '24px' : '20px',
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
      height: isDesktop ? '400px' : '100%',
    },
    catchPhrase: {
      margin: '50px',
      fontWeight: 'bold'
    },
    imgDiv: {
      display: 'inline-block',
      margin: '20px'
    },
    missionStmt1: {
      color: '#000000',
      fontWeight: 'bold',
      fontSize: isDesktop ? '1.5em' : '2em',
      lineHeight: '1.5em'
    },
  }));

  const changeVisibilityHandler = (e) => {
    setVisibility(e);
  };

  const classes = useStyles();
  return (
    <VisibilitySensor onChange={changeVisibilityHandler} partialVisibility={true}>
      <>
        <Banner isDesktop={isDesktop}>
          <VisibilitySensor onChange={changeVisibilityHandler} partialVisibility={true}>
            <div className={classes.container}>
              <Grid item xs={12} md={4} className={classes.catchPhraseDiv}>
                <div className={classes.catchPhrase}>
                  <Typography variant={"h5"} className={`${classes.missionStmt1} ${isVisible ? classes.fadeInUp : ''}`}>
                    <span>We hope that our efforts will empower students to achieve their full potential and facilitate the creation of long lasting positive habits, giving them a competitive edge to succeed in life.</span>
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} md={4} className={`${classes.imgDiv} ${isVisible ? classes.fadeInUp : ''}`}>
                <CardMedia component="img" image={khyati} className={classes.media1} height={isDesktop ? '300px' : '100%'} width={'200px'}/>
                <Typography variant="h6" component="p">
                  Masters, Computer Science<br/>
                  University of Southern California
                </Typography>
              </Grid>
              <Grid item xs={12} md={4} className={`${classes.imgDiv} ${isVisible ? classes.fadeInUp : ''}`}>
                <CardMedia component="img" image={ShrutiKedia} className={classes.media1} height={isDesktop ? '300px' : '100%'} width={'200px'}/>
                <Typography variant="h6" component="p">
                  Masters, Biomedical Informatics<br/>
                  Columbia University
                </Typography>
              </Grid>
            </div>
          </VisibilitySensor>
        </Banner>
        <div className={classes.aboutUsDiv}>
          <Typography variant={"h4"} className={isVisible && isDesktop ? classes.fadeInUp : ''}>
            <span className={classes.blueColor}>Our story</span>
            <p className={classes.aboutUsText}>
            Khyati and Shruti grew up in India. When they graduated from schools and stepped into the real world, they noticed that while schools had trained them in academic education, they were still untrained in the real world skills that are required to succeed and be happy in life. 
            It deeply disturbed them that the school education does not provide holistic development of students. They wanted to ensure that young students are empowered to become leaders of tomorrow and should possess the right skillset and guidance to be happy and successful in life. Hence, Life Ki ABC was born!
            </p>
          </Typography>
        </div>
        <Values isDesktop={isDesktop} />
        <Partners isDesktop={isDesktop} />
      </>
    </VisibilitySensor>
  )
}