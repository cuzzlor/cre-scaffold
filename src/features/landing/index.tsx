import { Button, Grid, Typography } from '@material-ui/core';
import useAxios from 'axios-hooks';
import React from 'react';

export function Landing() {
  const [{ data, loading }, refetch] = useAxios({
    baseURL: 'https://icanhazdadjoke.com/',
    headers: {
      Accept: 'application/json',
    },
  });
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
