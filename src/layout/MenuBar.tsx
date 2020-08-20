import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import { yellow, blueGrey } from '@material-ui/core/colors';

// https://material-ui.com/components/app-bar/#simple-app-bar

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  topStrip: {
    height: 6,
    backgroundColor: yellow[500],
  },
  appBar: {
    backgroundColor: blueGrey[900],
  },
}));

export default function MenuBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.topStrip}></div>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            aria-label="menu"
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" align="center" className={classes.title}>
            App Title
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
