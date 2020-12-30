import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import VisibilitySensor from 'react-visibility-sensor';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { Carousal } from './shared/Carousal';
import FormatQuoteSharpIcon from '@material-ui/icons/FormatQuoteSharp';

const TestimonialItems = [{
  description: "I enjoyed the session. I made new friends. I understood the concepts of Time Management...like I have to prioritize between need and want. Thank you so much.",
  subText: "- Ashvik, India"
},{
  description: "Thanks for arranging this lifelong helpful and useful session for kids. Analogy of rock, sand and marble has been liked by him. It has been useful because he atleast prioritises things in the day as rock, marble and sand. This specially helps for TV watching, video games etc.",
  subText: "- Shantanu, India"
},{
  description: "I spoke to Michael. He really enjoyed the class and loved the videos too. He learned to manage his time better and also learned about procrastination. He tries to follow his time table that he made during the session. Thanks for the session.",
  subText: "- Andrew, India"
},{
  description: "The session was very well conducted and the small group ensured personal attention to each child. The session was very interactive with all children expressing their opinions, and getting an opportunity to exercise the skills they had just acquired.",
  subText: "- Rashmi, USA"
}, {
  description: "It’s a very good program happy to be part of it. We need more value based education to the kids to help them grow better.",
  subText: "- Sumanth, UAE"
}, {
  description: "Very interactive program, the kids very engaged and learned valuable life skills.",
  subText: "- Swapna, India"
}];

export const Testimonials = (props) => {
  const { isDesktop } = props;
  const [isVisible, setVisibility] = useState(false);

  const useStyles = makeStyles(() => ({
    planContainer: {
      display: 'block',
      margin: '20px',
      //textAlign: 'center',
      padding: !isDesktop ? '20px' : '20px',
      backgroundColor: '#fefee1',
    },
    media: {
      objectFit: 'contain',
      margin: '30px'
    },
    fadeInUp: {
      animation: `$fadeInUp 1s both`,
      opacity: 0,
    },
    valuestext: {
      fontSize: isDesktop ? '24px' : '20px',
      lineHeight: '1.5em'
    },
    blueColor: {
      color: '#3299CC'
    },
    kpiDiv: {
      margin: "20px auto",
    },
    testimonialgrid: {
      margin: '0 auto'
    },
    quotations: {
      margin: '0 40%',
      color: '#990000',
      fontSize: 80,
      textAlign: 'center'
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
    <div className={classes.planContainer}>
      <VisibilitySensor onChange={changeVisibilityHandler} partialVisibility={true}>
        <>
          <Typography variant={"h5"} className={isVisible ? classes.fadeInUp : ''}>
            <Box fontWeight="fontWeightBold" textAlign="center">
              <span className={classes.blueColor}>Testimonials</span>
            </Box>
          </Typography>
          <Grid item xs={12} sm={4} className={classes.kpiDiv}>
            <FormatQuoteSharpIcon className={classes.quotations}/>
            <Carousal items={TestimonialItems} backgroundColor={'#fefee1'} />
          </Grid>
        </>
      </VisibilitySensor>
    </div>
  )
}