import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { Carousal } from './shared/Carousal';
import FormatQuoteSharpIcon from '@material-ui/icons/FormatQuoteSharp';
import { YoutubeEmbed } from './shared/YoutubeEmbed';

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
    container: {
      backgroundColor: '#fefee1',
      display: 'flex',
      flexWrap: !isDesktop && 'wrap',
      margin: isDesktop ? '50px 20px' : '50px 20px',
      padding: '20px',
      height: 'auto'
    },
    testimonials: {
      flex: isDesktop && "0 0 50%",
      //margin: '20px 0px',
      //padding: !isDesktop ? '0px 0px 0px 10px' : '10px 20px',
      flexWrap: !isDesktop && 'wrap'
    },
    blueColor: {
      color: '#3299CC'
    },
    kpiDiv: {
      margin: "20px auto",
    },
    quotations: {
      margin: '0 40%',
      color: '#990000',
      fontSize: 80,
      textAlign: 'center'
    },
    youtubevideo: {
      flex: isDesktop ? "0 0 45%" : 'auto',
      margin: '20px 10px',
      padding: !isDesktop ? '0px 0px 0px 10px' : '10px 20px',
      flexWrap: !isDesktop && 'wrap'
    }
  }));

  const classes = useStyles();

  return (
    <div className={classes.container}>
        <div className={classes.testimonials}>
          <Typography variant={"h4"} className={isVisible ? classes.fadeInUp : ''}>
            <Box fontWeight="fontWeightBold" textAlign="center">
              <span className={classes.blueColor}>Testimonials</span>
            </Box>
          </Typography>
          <Grid item xs={12} sm={8} className={classes.kpiDiv}>
            <FormatQuoteSharpIcon className={classes.quotations}/>
            <Carousal items={TestimonialItems} backgroundColor={'#fefee1'} />
          </Grid>
        </div>
        <div className={classes.youtubevideo}>
          <YoutubeEmbed embedId='F2lD8lKbF1U' />
        </div>
    </div>
  )
}