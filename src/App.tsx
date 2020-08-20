import { Container, CssBaseline } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import MenuBar from './layout/MenuBar';
import { Landing } from './features/landing';
import { Survey } from './features/survey';

const darkTheme = createMuiTheme({
  palette: { type: 'light' },
});

function App() {
  return (
    <MuiThemeProvider theme={darkTheme}>
      <CssBaseline />
      <MenuBar />
      <Container maxWidth="sm">
        <Router>
          <Switch>
            <Route path="/survey">
              <Survey />
            </Route>
            <Route path="/">
              <Landing />
            </Route>
          </Switch>
        </Router>
      </Container>
    </MuiThemeProvider>
  );
}

export default App;
