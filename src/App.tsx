import { Container, CssBaseline } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { NetworkStatusProvider } from './api/networkStatus';
import { Landing } from './features/landing';
import { Survey } from './features/survey';
import MenuBar from './layout/MenuBar';
import { NetworkErrorAlert } from './layout/NetworkErrorAlert';
import { NetworkStatusStrip } from './layout/NetworkStatusStrip';

const theme = createMuiTheme();

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <RecoilRoot>
        <NetworkStatusProvider />
        <CssBaseline />
        <MenuBar />
        <NetworkStatusStrip />
        <NetworkErrorAlert />
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
      </RecoilRoot>
    </MuiThemeProvider>
  );
}

export default App;
