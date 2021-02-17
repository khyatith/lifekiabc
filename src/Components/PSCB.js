import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import VisibilitySensor from 'react-visibility-sensor';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import Approach from '../assets/Approach.png';

export const PSCB = (props) => {
  const { isDesktop } = props;
  const [isVisible, setVisibility] = useState(false);

  const useStyles = makeStyles(() => ({
    container: {
      display: 'flex',
      margin: '20px',
    },
    fadeInUp: {
      animation: `$fadeInUp 1s both`,
      opacity: 0,
    },
    blueColor: {
      color: '#3299CC'
    },
    ourprograms: {
      flex: 1,
      cursor: 'pointer',
    },
    courseTitle: {
      height: '20px'
    },
    marginTopLarge: {
      marginTop: '50px'
    },
    imgFit: {
      objectFit: 'contain'
    },
    programCard: {
      width: isDesktop ? 350 : 300,
      margin: '50px 30px 30px 30px'
    },
    media: {
      height: 0,
      paddingTop: '40%',
      backgroundSize: 'contain',
      "& .MuiCardMedia-img": {
        backgroundSize: 'contain'
      }
    },
    modules: {
      textAlign: 'center',
      backgroundColor: '#ffffff',
      height: '150px',
      cursor: 'pointer',
      '&:hover': {
        opacity: '0.5',
        border: "solid 2px #3299CC"
     },
    },
    payNowBtn: {
      marginBottom: '10px',
      marginLeft: '10px',
      marginRight: '20px',
      color: '#ffffff',
      backgroundColor: '#990000',
      textTransform: 'none',
      padding: '10px',
      zIndex: '999',
      lineHeight: '1',
      "&:hover": {
        backgroundColor: "#990000",
        opacity: '0.8'
      }
    },
    viewMoreBtn:{
      textTransform: 'none',
      backgroundColor: 'transparent',
      textDecoration: 'underline',
      color: '#3299CC'
    },
    approachImg: {
      height: isDesktop ? '400px' : '100%',
      width: isDesktop && '500px',
      minWidth: !isDesktop && '100%',
      objectFit: isDesktop ? 'contain' : 'cover'
    },
    programCardHeader:{
      "& .MuiCardHeader-title": {
        fontSize: '1rem'
      }
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
  }));

  const changeVisibilityHandler = (e) => {
    setVisibility(e);
  };

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div>
        <VisibilitySensor onChange={changeVisibilityHandler} partialVisibility={true}>
          <>
            <div style={{width: '100%', textAlign: 'center', marginTop: '30px'}}>
              <Typography variant={"h4"} className={`${isVisible ? classes.fadeInUp : ''}`}>
                <Box fontWeight="fontWeightBold">
                  <span className={classes.blueColor}>Our Approach to Learning</span>
                </Box>
              </Typography>
              <Grid item xs={12} md={12} style={{marginTop: '30px'}}>
                <CardMedia component="img" image={Approach} className={classes.approachImg} />
              </Grid>
            </div>
          </>
        </VisibilitySensor>
      </div>
    </div>
  )
}