import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";

export const YoutubeEmbed = ({ embedId }) => {

  const useStyles = makeStyles(() => ({
    videoResponsive: {
      overflow: 'hidden',
      paddingBottom: '56.25%',
      position: 'relative',
      height: 0,
      "& iframe": {
        left: 0,
        top: 0,
        height: '100%',
        width: '100%',
        position: 'absolute',
      }
    }
  }));

  const classes = useStyles();
  
  return (
    <div className={classes.videoResponsive}>
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  )
};

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};
