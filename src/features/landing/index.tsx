import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValueLoadable } from 'recoil';
import { dadJokeState, useDadJoke } from '../../api/jokes';

export function Landing() {
  // preload app state
  useRecoilValueLoadable(dadJokeState);
  const [joke, getNextJoke] = useDadJoke();
  return (
    <React.Fragment>
      <Typography variant="h2" align="center">
        Welcome
      </Typography>
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <Button component={Link} to="/survey">
            Start Survey
          </Button>
        </Grid>
        {joke && (
          <React.Fragment>
            <Grid item>
              <Typography variant="body2" align="center">
                {joke}
              </Typography>
            </Grid>
            <Grid item>
              <Button onClick={() => getNextJoke()}>Another Joke</Button>
            </Grid>
          </React.Fragment>
        )}
      </Grid>
    </React.Fragment>
  );
}
