import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useAxios } from '../../api/axios';

export function Landing() {
  const [{ data, loading }, refetch] = useAxios('/');
  return (
    <React.Fragment>
      <Typography variant="h2" align="center">
        Welcome
      </Typography>
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <Button href="/survey">Start Survey</Button>
        </Grid>
        {data && (
          <React.Fragment>
            <Grid item>
              <Typography variant="body2" align="center">
                {data.joke}
              </Typography>
            </Grid>
            <Grid item>
              <Button disabled={loading} onClick={() => refetch()}>
                Another Joke
              </Button>
            </Grid>
          </React.Fragment>
        )}
      </Grid>
    </React.Fragment>
  );
}
