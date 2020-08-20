import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react';

export function Survey() {
  return (
    <React.Fragment>
      <Typography variant="h2" align="center">
        Survey
      </Typography>
      <Grid container justify="center">
        <Button href="/">Home</Button>
      </Grid>
    </React.Fragment>
  );
}
