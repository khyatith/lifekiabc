import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-material-ui-carousel';
import Paper from '@material-ui/core/Paper';

export const Carousal = (props) => {
  const { items, backgroundColor, textColor, isDesktop } = props;

  const useStyles = makeStyles(() => ({
    carousalDiv: {
      backgroundColor: `${backgroundColor}`,
      fontSize: isDesktop ? '28px' : '22px',
      lineHeight: '1.5em',
      boxShadow: 'none',
      color: `${textColor}`
    }
  }));
  
  const Item = (itemProps) => {

    return (
      <Paper className={classes.carousalDiv}>
        <p>{itemProps.item.description}</p>
      </Paper>
    )
  }

  const classes = useStyles();

  return(
    <Carousel animation={"slide"} timeout={1000} interval={10000}>
      { items.map( item => <Item item={item} /> ) }
    </Carousel>
  )
}