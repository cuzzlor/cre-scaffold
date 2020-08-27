import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { useState } from 'react';

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

export type AgeRange = 'Under 30' | '30 - 90' | 'Over 90';

export interface Page3Data {
  ageRange?: AgeRange;
}

export function Page3({
  data,
  onComplete,
}: {
  data?: Page3Data;
  onComplete?: (data: Page3Data) => void;
}) {
  const classes = useStyles();
  const [ageRange, setAgeRange] = useState(data?.ageRange || '');

  const onDone = () => {
    if (onComplete) onComplete({ ageRange: ageRange as AgeRange });
  };

  return (
    <form className={classes.root}>
      <Typography variant="h5" align="center">
        Select your age range
      </Typography>
      <FormControl variant="outlined">
        <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          label="Age"
          value={ageRange}
          onChange={(event) => setAgeRange(event.target.value as string)}
        >
          <MenuItem value="Under 30">Under 30</MenuItem>
          <MenuItem value="30 - 90">30 - 90</MenuItem>
          <MenuItem value="Over 90">Over 90</MenuItem>
        </Select>
      </FormControl>

      <Button onClick={onDone}>Done</Button>
    </form>
  );
}
