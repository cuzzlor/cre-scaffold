import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

export function Survey() {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/page2`}>
        <Page2 />
      </Route>
      <Route path={`${path}/page3`}>
        <Page3 />
      </Route>
      <Route path={path}>
        <Page1 />
      </Route>
    </Switch>
  );
}
