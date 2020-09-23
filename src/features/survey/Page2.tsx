import { Button, Grid, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValueLoadable } from 'recoil';
import { dadJokeState } from '../../api/jokes';

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

export interface Page2Data {
  coffeesPerDay?: string;
}

export function Page2({
  data,
  onComplete,
}: {
  data?: Page2Data;
  onComplete?: (data: Page2Data) => void;
}) {
  const classes = useStyles();
  const [coffeesPerDay, setCoffeesPerDay] = useState(data?.coffeesPerDay);

  const handleNext = () => {
    if (onComplete) onComplete({ coffeesPerDay });
  };

  const joke = useRecoilValueLoadable(dadJokeState);

  return (
    <form className={classes.root}>
      <Typography variant="h5" align="center">
        How many coffees do you drink?
      </Typography>
      <Grid container direction="column" alignItems="center">
        <ToggleButtonGroup
          value={coffeesPerDay}
          exclusive
          onChange={(evt, value) => setCoffeesPerDay(value)}
          aria-label="coffees per day"
        >
          <ToggleButton value="0">Tea!</ToggleButton>
          <ToggleButton value="1">One</ToggleButton>
          <ToggleButton value="2">Two</ToggleButton>
          <ToggleButton value="More than 2">More</ToggleButton>
        </ToggleButtonGroup>
      </Grid>

      <Button component={Link} to={`page3`} onClick={handleNext}>
        Next
      </Button>

      <Typography variant="body1" align="center">
        {joke.state === 'loading' ? 'loading...' : joke.contents}
      </Typography>
    </form>
  );
}
