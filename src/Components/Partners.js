import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import VisibilitySensor from 'react-visibility-sensor';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Dizikid from '../assets/partners/dizikid-logo.png';
import PurplePheonix from '../assets/partners/purple-pheonix-logo.jpg';
import Card from '@material-ui/core/Card';
import { useHistory } from "react-router-dom";
import { ConnectWithUs } from './shared/ConnectWithUs'
;
export const Partners = (props) => {
  const { isDesktop } = props;
  const [isVisible, setVisibility] = useState(false);
  const history = useHistory();

  const useStyles = makeStyles(() => ({
    container: {
      display: 'flex',
      flexWrap: !isDesktop && 'wrap',
      margin: isDesktop ? '50px 20px' : '50px 20px',
      //backgroundColor: '#fff5eb',
      //border: '1px solid #cccccc',
      height: 'auto'
    },
    fadeInUp: {
      animation: `$fadeInUp 1s both`,
      opacity: 0,
    },
    media: {
      objectFit: 'contain',
      margin: '30px'
    },
    // vl: {
    //   borderLeft: '1px solid #b0b9c4',
    //   margin: '20px 0px 20px 0px'
    // },
    blueColor: {
      color: '#3299CC'
    },
    whatsappDiv: {
      marginLeft: '10px',
      marginTop: '20px',
      display: 'flex'
    },
    connectDiv: {
      marginLeft: '100px',
      flex: "0 0 45%"
    },
    partnerDiv: {
      flex: "0 0 45%"
    },
    // missionDiv1: {
    //   margin: '20px',
    //   padding: !isDesktop ? '0px 0px 0px 10px' : '10px 0px 0px 20px'
    // },
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
      <VisibilitySensor onChange={changeVisibilityHandler} partialVisibility={true}>
        <>
          <div className={classes.partnerDiv}>
            <Typography variant={"h4"} className={isVisible ? classes.fadeInUp : ''} style={{margin: '0px 0px 30px 0px'}}>
              <span className={classes.blueColor}>Our partners</span>
            </Typography>
            <div style={{maxWidtg: '400px'}}>
            <Card>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <CardMedia component="img" image={Dizikid} className={classes.media} height={isDesktop ? '150px' : '100%'} width={'100px'}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CardMedia component="img" image={PurplePheonix} className={classes.media} height={isDesktop ? '150px' : '100%'} width={'100px'}/>
                </Grid>
              </Grid>
            </Card>
            </div>
          </div>
          <ConnectWithUs isDesktop={isDesktop} shouldWrap={props.shouldWrap} />
        </>
      </VisibilitySensor>
    </div>
  )
}