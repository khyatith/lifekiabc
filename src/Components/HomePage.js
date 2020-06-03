import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Banner } from './shared/Banner';
import Grid from '@material-ui/core/Grid';
import HomePageImage from '../assets/homepage-img3.png';
import { ContactUsForm } from './shared/ContactUsForm';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export const HomePage = () => {

  const isDesktop = window.innerWidth > 500;

  const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1,
      padding: !isDesktop && '10px'
    },
    homepageImg: {
      objectFit: 'contain'
    },
    missionStmt1: {
      color: '#990000',
    },
    grid: {
      display: 'inline-block'
    },
    missionStmt3: {
      color: '#000099',
      fontWeight: '700',
    },
    missionStmt2: {
      color: '#009900',
      fontWeight: '700'
    },
    cardRoot: {
      minWidth: '275px',
      maxWidth: '600px',
      margin: isDesktop ? '30px auto' : '30px 16px 0px 16px',
      textAlign: 'center',
      boxShadow: 'none'
    },
    contactUsBtn: {
      color: '#ffffff',
      backgroundColor: '#990000',
      margin: '0 auto'
    }
  }));

  const classes = useStyles();

  return (
    <>
      <Banner>
        <div className={classes.root}>
          <Grid item xs={12} md={6} className={classes.grid}>
            <Typography variant={ isDesktop ? "h4" : "h6" } className={classes.missionStmt1}>
              Our mission is to promote the holistic development of students by equipping them with the skills and tools they need - empowering them to achieve their full potential in life.
            </Typography>
            <br />
            <br />
            { isDesktop && <br />}
            <Typography variant={ isDesktop ? "h4" : "h6" } className={classes.missionStmt2}>
              Our objective is to add value to conventional learning by equipping students with essential life skills.
            </Typography>
          </Grid>
          { isDesktop &&
            <Grid item md={6} className={classes.grid}>
              <CardMedia component="img" image={HomePageImage} height="450px" className={classes.homepageImg} />
            </Grid>
          }
        </div>
      </Banner>
      <Card className={classes.cardRoot}>
        <CardContent>
          <Typography variant="h5" component="h2">
            <p>Want to get access to our curated curriculum?</p>
            <p>Want to show-case your career journey on our platform?</p>
            <p>Want to help us create curriculum?</p>
          </Typography>
          <ContactUsForm />
        </CardContent>
      </Card>
    </>
  )
}