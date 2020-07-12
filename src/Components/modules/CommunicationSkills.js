import React from 'react';
import { InfoPanel } from '../InfoPanel';
import { ContactUsCard } from '../shared/ContactUsCard';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Carousal } from '../shared/Carousal';
import { Values } from '../shared/Values';
import comingSoon from '../../assets/comingSoon.png';
import { Banner } from '../shared/Banner';

export const CommunicationSkills = (props) => {
  const { isDesktop } = props;
  const tagline = "Alisha tells us her secrets of time management and gives us tips on how to manage our time effectively!";
  const useStyles = makeStyles(() => ({
    TMContainer: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    fadeInUp: {
      animation: `$fadeInUp 1s both`,
      opacity: 0,
    },
    media1: {
      display: 'inline-block',
      width: '200px'
    },
    whatwedotextdiv: {
      flex: isDesktop && '0 0 35%',
      padding: isDesktop ? '100px 50px' : '20px'
    },
    whatwedotext: {
      fontSize: isDesktop ? '24px' : '22px',
      lineHeight: '1.5em'
    },
    blueColor: {
      color: '#3299CC'
    },
    whatwedomodules: {
      flex: 1,
      padding: isDesktop ? '100px' : '20px',
    },
    timeManagement: {
      textAlign: 'center',
      backgroundColor: '#ebf5ff',
      height: '300px',
      width: isDesktop ? '350px' : '100%',
      cursor: 'pointer'
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
  const classes = useStyles();
  return(
    <>
      <Banner isDesktop={isDesktop}>
        <img alt="communication" src={comingSoon} height={ isDesktop ? "500px" : "auto" } width={ isDesktop ? "auto" : "100%"} />
      </Banner>
      {/* <div className={classes.TMContainer}>
          <div className={classes.whatwedotextdiv}>
            <Typography variant={"h4"}>
              <h5 className={classes.blueColor}>Why Time Management</h5>
              <p className={classes.whatwedotext}>To understand why time management is the single most important skill for success today, we turn to data. Several studies conducted on school and high school students co-relating time Management and academic achievement skills show some interesting results. </p>
            </Typography>
          </div>
          <div className={classes.whatwedomodules}>
            <Carousal items={items} textColor={'#990000'} isDesktop={isDesktop} />
          </div>
        </div> */}
      <InfoPanel isDesktop={isDesktop} />
      <Values isDesktop={isDesktop} />
      <ContactUsCard isDesktop={isDesktop} />
    </>
  );
};