import { CssBaseline, Typography } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import './App.css';

const darkTheme = createMuiTheme({ palette: { type: 'dark' } });

function App() {
  return (
    <MuiThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Typography variant="h1">Material UI App</Typography>
    </MuiThemeProvider>
  );
}

export default App;
