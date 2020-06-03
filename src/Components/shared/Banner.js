import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Header } from './Header';

export const Banner = (props) => {
  const isDesktop = window.innerWidth > 500;
  const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1,
      paddingRight: '20px',
      paddingLeft: '20px',
    },
    paper: {
      textAlign: 'center',
      color: '#000000',
      height: isDesktop ? '550px' : '450px',
    },
  }));
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Header />
          {props.children}
        </Paper>
      </Grid>
    </div>
  );
}