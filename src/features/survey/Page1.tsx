import { Button, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { useRecoilValueLoadable } from 'recoil';
import { dadJokeState } from '../../api/jokes';

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

export interface Page1Data {
  firstName?: string;
  lastName?: string;
}

export function Page1({
  data,
  onComplete,
}: {
  data?: Page1Data;
  onComplete?: (data: Page1Data) => void;
}) {
  const classes = useStyles();
  const { path } = useRouteMatch();

  const [firstName, setFirstName] = useState(data?.firstName || '');
  const [lastName, setLastName] = useState(data?.lastName || '');

  const handleNext = () => {
    if (onComplete) onComplete({ firstName, lastName });
  };

  const joke = useRecoilValueLoadable(dadJokeState);

  return (
    <form className={classes.root} autoComplete="off">
      <Typography variant="h4" align="center">
        What's your name?
      </Typography>
      <TextField
        id="outlined-basic"
        label="First Name"
        variant="outlined"
        required
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Last Name"
        variant="outlined"
        required
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      />

      <Button component={Link} to={`${path}/page2`} onClick={handleNext}>
        Next
      </Button>

      <Typography variant="body1" align="center">
        {joke.state === 'loading' ? 'loading...' : joke.contents}
      </Typography>
    </form>
  );
}
