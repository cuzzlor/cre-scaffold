import { Button, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React from 'react';
import { useRouteMatch } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '100%',
      },
    },
  })
);

export default function Page1() {
  const classes = useStyles();
  const { path } = useRouteMatch();

  return (
    <form className={classes.root}>
      <Typography variant="h4" align="center">
        What's your name?
      </Typography>
      <TextField
        id="outlined-basic"
        label="First Name"
        variant="outlined"
        required
      />
      <TextField
        id="outlined-basic"
        label="Last Name"
        variant="outlined"
        required
      />

      <Button href={`${path}/page2`}>Next</Button>
    </form>
  );
}
