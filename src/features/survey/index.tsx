import React, { useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { Page1Data, Page1 } from './Page1';
import { Page2Data, Page2 } from './Page2';
import { Page3Data, Page3 } from './Page3';

export type SurveyData = Page1Data & Page2Data & Page3Data;

export function Survey() {
  const { path } = useRouteMatch();

  const [page1Data, setPage1Data] = useState<Page1Data>({});
  const [page2Data, setPage2Data] = useState<Page2Data>({});
  const [page3Data, setPage3Data] = useState<Page3Data>({});

  console.log({ ...page1Data, ...page2Data, ...page3Data });

  return (
    <Switch>
      <Route path={`${path}/page2`}>
        <Page2 data={page2Data} onComplete={setPage2Data} />
      </Route>
      <Route path={`${path}/page3`}>
        <Page3 data={page3Data} onComplete={setPage3Data} />
      </Route>
      <Route path={path}>
        <Page1 data={page1Data} onComplete={setPage1Data} />
      </Route>
    </Switch>
  );
}
