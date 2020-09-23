import Snackbar from '@material-ui/core/Snackbar';
import { makeStyles, Theme } from '@material-ui/core/styles';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import React, { SyntheticEvent, useEffect, useState } from 'react';
import { useNetworkLastError } from '../api/networkStatus';
import { usePrevious } from '../utils';

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export function NetworkErrorAlert() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const networkError = useNetworkLastError();
  const lastNetworkError = usePrevious(networkError);

  useEffect(() => {
    if (networkError && networkError !== lastNetworkError) setOpen(true);
  }, [networkError, lastNetworkError]);

  const handleClose = (event?: SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return networkError ? (
    <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          {networkError.message}
        </Alert>
      </Snackbar>
    </div>
  ) : (
    <></>
  );
}
