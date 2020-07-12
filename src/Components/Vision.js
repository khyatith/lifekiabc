import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import VisibilitySensor from 'react-visibility-sensor'; 

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    margin: '0 auto',
    textAlign: 'center',
  },
  visionContent: {
    margin: '16px'
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

export const Vision = (props) => {
  const { isDesktop } = props;
  const classes = useStyles();
  const [isVisible, setVisibility] = useState(false);

  const changeVisibilityHandler = (e) => {
    setVisibility(e);
  };

  return (
    <VisibilitySensor onChange={changeVisibilityHandler} partialVisibility={true}>
      <Grid item xs={12} md={10} className={classes.root}>
        <Typography variant={isDesktop ? "h3" : "h4"} className={isVisible ? classes.fadeInUp : '' }>
          <p style={{ color: '#3299CC' }}>Our Vision</p>
        </Typography>
        <Typography variant={isDesktop ? "h5" : "h6"} className={`${isVisible ? classes.fadeInUp : ''} ${classes.visionContent}`}>
          <p>To provide students with the knowledge and expertise around non-traditional concepts that will enrich their overall growth and create a foundation for their success. We aim to impart these life skills in regional languages to promote educational equity. Ultimately, we will consider our efforts a success when these ideas are incorporated as an integral part of the education system.</p>
        </Typography>
      </Grid>
    </VisibilitySensor>
  )
}