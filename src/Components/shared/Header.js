import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Grid from '@material-ui/core/Grid';
import { scroller, Link } from 'react-scroll';
import * as Router from 'react-router-dom';
import Logo1 from '../../assets/logo1.png';
import VisibilitySensor from 'react-visibility-sensor'; 

const useStyles = makeStyles((theme) => ({
  menuButton: {
    color: '#990000',
    float: 'right'
  },
  title: {
    flexGrow: 1,
    color: '#990000',
    float: 'left',
  },
  appBar: {
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #E8E8E8',
    boxShadow: 'none'
  },
  sectionDesktop: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  desktopMenu: {
    color: '#990000',
    cursor: 'pointer'
  },
  websiteName: {
    color: '#990000',
    cursor: 'pointer',
    float: 'left',
    marginTop: '30px'
  },
  visionContent: {
    margin: '16px'
  },
  listItemClass: {
    display: 'block !important',
    padding: '20px',
    '&.MuiListItem-button': {
      display: 'block !important',
      padding: '10px'
    },
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

export const Header = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [isVisible, setVisibility] = useState(false);
  const { isDesktop } = props;
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  }
  const handleAboutUsClose = () => {
    setAnchorEl(null);
    scrollToAboutUs();
  };

  const handleOurContentClose = () => {
    setAnchorEl(null);
    scrollToOurContent();
  };

  const handleContactUsClose = () => {
    setAnchorEl(null);
    scrollToContactUs();
  };

  const changeVisibilityHandler = (e) => {
    setVisibility(e);
  };

  const renderMobileMenu = () => {
    return (
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleContactUsClose} classes={{ root: classes.listItemClass }}>Contact us</MenuItem>
        <MenuItem onClick={handleAboutUsClose} classes={{ root: classes.listItemClass }}>About us</MenuItem>
        <MenuItem onClick={handleOurContentClose} classes={{ root: classes.listItemClass }}>What we do</MenuItem>
      </Menu>
    );
  }
  
  const scrollToAboutUs = () => {
    scroller.scrollTo('/about-us', {
      duration: 3000,
      delay: 100,
      smooth: 'easeInOutQuart'
    })
  };

  const scrollToOurContent = () => {
    scroller.scrollTo('/what-we-do', {
      duration: 3000,
      delay: 100,
      smooth: 'easeInOutQuart'
    })
  };

  const scrollToContactUs = () => {
    scroller.scrollTo('/contact-us', {
      duration: 3000,
      delay: 100,
      smooth: 'easeInOutQuart'
    })
  };

  const renderDesktopMenu = () => {
    return (
      <div className={classes.sectionDesktop}>
        <Grid item xs={3}>
          <Typography variant="h6" className={classes.desktopMenu}></Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6">
            <Link className={classes.desktopMenu} onClick={() => scrollToContactUs()}>Contact us</Link>
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6">
            <Link className={classes.desktopMenu} onClick={() => scrollToAboutUs()}>About us</Link>
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6" className={classes.desktopMenu} onClick={() => scrollToOurContent()}>What we do</Typography>
        </Grid>
      </div>
    )
  }

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Grid item xs={6}>
          <Typography variant="h6" className={classes.title}>
          <VisibilitySensor onChange={changeVisibilityHandler} offset={{top:10, bottom: 10}}>
            <Router.Link className={classes.desktopMenu} to={{ pathname: '/', state: { isDesktop }}}>
              <img alt="logo" src={Logo1} width={ isDesktop ? "70px" : "50px"} height={ isDesktop ? "70px" : "50px" } className={isVisible ? classes.fadeInUp : ''}/>
            </Router.Link>
          </VisibilitySensor>
          </Typography>
        </Grid>
        <Grid item xs={6}>
          { !isDesktop &&
            <IconButton edge="start" className={classes.menuButton} aria-label="menu" onClick={handleMenu}>
              <MenuIcon />
            </IconButton>
          }
          {
            isDesktop && renderDesktopMenu()
          }
        </Grid>
        {renderMobileMenu()}
      </Toolbar>
    </AppBar>
  );
}