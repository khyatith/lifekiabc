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
}));

export const Vision = (props) => {
  const { isDesktop } = props;
  const classes = useStyles();
  return (
    <Grid item xs={12} md={10} className={classes.root}>
      <Typography variant={isDesktop ? "h3" : "h4"} className={classes.title}>
        <p style={{ color: '#3299CC' }}>Our Vision</p>
      </Typography>
      <Typography variant={isDesktop ? "h5" : "h6"} className={classes.visionContent}>
        <p>To provide students with the knowledge and expertise around non-traditional concepts that will enrich their overall growth and create a foundation for their success. We aim to impart these life skills in regional languages to promote educational equity. Ultimately, we will consider our efforts a success when these ideas are incorporated as an integral part of the education system.</p>
      </Typography>
    </Grid>
  )
}