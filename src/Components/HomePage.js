import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Banner } from './shared/Banner';
import Grid from '@material-ui/core/Grid';
import { ContactUsForm } from './shared/ContactUsForm';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { ContactUsButton } from './shared/ContactUsButton';
import { Vision } from './Vision';
import { AboutUs } from './AboutUs';
import { Plan } from './Plan';
import HomePageImg from '../assets/homepage1.jpg';
import CardMedia from '@material-ui/core/CardMedia';

export const HomePage = () => {

  const isDesktop = window.innerWidth > 500;

  const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1,
      padding: !isDesktop && '10px'
    },
    homepageImg: {
      height: isDesktop ? '450px' : '380px',
      display: 'inline-block',
      width: '100%',
      objectPosition: '50% 20%',
      //filter: 'blur(2px)'
    },
    missionStmt1: {
      color: '#990000',
      fontWeight: !isDesktop && 'bold',
    },
    grid: {
      display: 'inline-block',
      width: '100%'
    },
    missionStmt3: {
      color: '#000099',
      fontWeight: '700',
    },
    missionStmt2: {
      color: '#585b60',
      fontWeight: '700',
      marginBottom: '50px',
      marginTop: '-150px'
    },
    missionContainer: {
      position: 'absolute',
      zIndex: '1000',
      height: !isDesktop ? '150px' : '100px',
      textAlign: 'center',
      top: isDesktop ? '350px' : '30%',
      width: isDesktop ? '90%' : '80%',
      backgroundColor: !isDesktop && '#ffffff',
      opacity: !isDesktop && '0.8',
      margin: 'auto',
      left: '0',
      right: '0'
    },
    cardRoot: {
      minWidth: '275px',
      maxWidth: '600px',
      margin: isDesktop ? '30px auto' : '30px 16px 0px 16px',
      textAlign: 'center',
      boxShadow: 'none',
      border: '2px solid #ffbf00',
    },
  }));

  const classes = useStyles();

  return (
    <>
      <Banner>
        <div className={classes.root}>
          <Grid item xs={12} className={classes.grid}>
            <div className={classes.missionContainer}>
              <Typography variant={ isDesktop ? "h4" : "subtitle1" } className={classes.missionStmt1}>
              Our mission is to promote the holistic development of students by equipping them with the skills and tools they need - empowering them to achieve their full potential in life.
              </Typography>
            </div>
            <CardMedia component="img" image={HomePageImg} className={classes.homepageImg} height="100%" />
            <ContactUsButton isDesktop={isDesktop} />
            <br />
            <br />
            { isDesktop && <br />}
          </Grid>
        </div>
      </Banner>
      <Plan isDesktop={isDesktop} />
      <Vision isDesktop={isDesktop} />
      <AboutUs isDesktop={isDesktop} />
      <Card className={classes.cardRoot}>
        <CardContent>
          <Typography variant="h5" component="h2">
            <p>Want more information about our training modules?</p>
            <p>Want to showcase your career journey on our platform?</p>
            <p>Want to help us achieve our mission?</p>
            <p>Just feel like saying Hi?</p>
          </Typography>
          <ContactUsForm isDesktop={isDesktop}/>
        </CardContent>
      </Card>
    </>
  )
}