import Snackbar from '@material-ui/core/Snackbar';
import { makeStyles, Theme } from '@material-ui/core/styles';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import React, { SyntheticEvent, useEffect, useState } from 'react';
import { networkStateNotifier } from '../api/networkStatus';

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
  const [networkError, setNetworkError] = useState<string | undefined>(
    undefined
  );

  const handleNetworkError = (error?: string) => {
    setNetworkError(error);
    setOpen(true);
  };

  useEffect(() => {
    networkStateNotifier.subscribeToError(handleNetworkError);
    return () => {
      networkStateNotifier.unsubscribeFromError(setNetworkError);
    };
  }, []);

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
          {networkError}
        </Alert>
      </Snackbar>
    </div>
  ) : (
    <></>
  );
}
