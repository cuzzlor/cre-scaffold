import { Button, ButtonGroup, Grid, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(2),
        width: '100%',
      },
    },
  })
);

export default function Page2() {
  const classes = useStyles();

  return (
    <form className={classes.root}>
      <Typography variant="h5" align="center">
        How many coffees do you drink?
      </Typography>
      <Grid container direction="column" alignItems="center">
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Grid>

      <Button href="page3">Next</Button>
    </form>
  );
}
