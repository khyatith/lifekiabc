import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-material-ui-carousel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

export const Carousal = (props) => {
  const { items, backgroundColor, textColor, isDesktop } = props;

  const useStyles = makeStyles(() => ({
    carousalDiv: {
      backgroundColor: `${backgroundColor}`,
      fontSize: isDesktop ? '28px' : '22px',
      lineHeight: '1.5em',
      boxShadow: 'none',
      color: `${textColor}`
    },
    subTextDiv: {
      textAlign: "center",
      marginTop: "10px",
      marginBottom: "30px",
      fontWeight: "bold"
    },
    carousalItem: {
      textAlign: "center"
    }
  }));

  const classes = useStyles();

  return(
    <>
      <Carousel animation={"slide"} timeout={1000} interval={10000}>
        { items.map((item, index) => {
          return (
            <Paper className={classes.carousalDiv} key={index}>
              <Typography variant={"subtitle1"} className={classes.carousalItem}>{item.description}</Typography>
              { item.subText && <Typography variant={"subtitle2"} className={classes.subTextDiv}>{item.subText}</Typography>}
            </Paper>
          )
        })}
      </Carousel>
    </>
  )
}