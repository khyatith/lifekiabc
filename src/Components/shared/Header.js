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
import { Redirect } from "react-router-dom";
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
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
    borderBottom: 'solid #009900',
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
  }
}));

export const Header = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const isDesktop = window.innerWidth > 500;
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  }
  const handleAboutUsClose = () => {
    setAnchorEl(null);
    return <Redirect to="/about-us" source={'reg'} />
  };

  const handleOurContentClose = () => {
    setAnchorEl(null);
    return <Redirect to="/our-content" source={'reg'} />
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
        <MenuItem onClick={handleOurContentClose}>our content</MenuItem>
        <MenuItem onClick={handleAboutUsClose}>about us</MenuItem>
      </Menu>
    );
  }

  const renderDesktopMenu = () => {
    return (
      <div className={classes.sectionDesktop}>
        <Grid item xs={3}>
          <Typography variant="h6" className={classes.desktopMenu}></Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6" className={classes.desktopMenu}></Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6">
            <Link className={classes.desktopMenu} href='/about-us'>about us</Link>
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6" className={classes.desktopMenu}>our content</Typography>
        </Grid>
      </div>
    )
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Grid item xs={8}>
            <Typography variant="h6" className={classes.title}>
            <Link className={classes.desktopMenu} href='/'>Life Ki ABC</Link>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            { !isDesktop && 
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleMenu}>
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
    </div>
  );
}