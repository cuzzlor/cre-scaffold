import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react';

export function Landing() {
  return (
    <React.Fragment>
      <Typography variant="h2" align="center">
        Welcome
      </Typography>
      <Grid container justify="center">
        <Button href="/survey">Start Survey</Button>
      </Grid>
    </React.Fragment>
  );
}
