import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import blur2 from '../assets/blur2.jpg';
import blur3 from '../assets/blur3.jpg';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export const Plan = (props) => {
  const { isDesktop } = props;

  const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1,
      margin: '0 auto',
      textAlign: 'center'
    },
    card: {
      width: isDesktop ? '500px' : '300px',
      position: 'relative',
      boxShadow: 'none',
      marginBottom: !isDesktop && '16px',
      padding: !isDesktop && '20px'
    },
    title: {
      color: '#ffffff',
      fontWeight: 'bold'
    },
    media1: {
      filter: 'blur(2px)',
      display: 'inline-block'
    },
    cardText: {
      backgroundColor: 'rgba(0,0,0, 0.6)', /* Black w/opacity/see-through */
      color: 'white',
      fontWeight: 'bold',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: '2',
      width: '80%',
      padding: '20px',
      textAlign: 'center',
      display: 'inline-block'
    },
    containerGrid: {
      justifyContent: 'center',
      margin: isDesktop ? '80px' : '16px'
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant={isDesktop ? "h3" : "h4"}>
        <p>What we are focused on</p>
      </Typography>
      <Grid container className={classes.containerGrid}>
        <Grid item xs={12} md={6}>
          <Card className={classes.card}>
            <CardMedia component="img" image={blur2} className={classes.media1} height="100%" />
            <CardContent className={classes.cardText}>
              <Typography variant={isDesktop ? "h4" : "h5"} className={classes.title}>
                Life skill curriculum
              </Typography>
              <br/>
              <Typography variant={"h6"} className={classes.title}>
                We create structured modules on various life skill topics for students in the form  of videos, activities and webinars
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card className={classes.card}>
            <CardMedia component="img" image={blur3} className={classes.media1} height="100%" />
            <CardContent className={classes.cardText}>
              <Typography variant={isDesktop ? "h4" : "h5"} className={classes.title}>
                Career Stories
              </Typography>
              <br/>
              <Typography variant={"h6"} className={classes.title}>
                We create career story videos with professionals about their career journey to expose students to unconventional career paths
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}