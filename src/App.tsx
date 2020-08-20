import { CssBaseline, Typography, Container } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import './App.css';
import MenuBar from './layout/MenuBar';

const darkTheme = createMuiTheme({
  palette: { type: 'light' },
});

function App() {
  return (
    <MuiThemeProvider theme={darkTheme}>
      <CssBaseline />
      <MenuBar />
      <Container maxWidth="sm">
        <Typography variant="h2" align="center">
          Material UI App
        </Typography>
      </Container>
    </MuiThemeProvider>
  );
}

export default App;
