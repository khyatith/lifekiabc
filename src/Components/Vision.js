import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    margin: '0 auto',
    textAlign: 'center',
  },
  visionContent: {
    margin: '16px'
  },
  title: {
    marginTop: '100px'
  }
}));

export const Vision = (props) => {
  const { isDesktop } = props;
  const classes = useStyles();
  return (
    <Grid item xs={12} md={6} className={classes.root}>
      <Typography variant={isDesktop ? "h3" : "h4"} className={classes.title}>
        <p>Our Vision</p>
      </Typography>
      <Typography variant={"h5"} className={classes.visionContent}>
        <p>Our vision is to be able to provide the students with the knowledge and tools and skill that they’ll be able to understand in languages that they can understand, providing educational equity to marginalized students.</p>
      </Typography>
    </Grid>
  )
}