import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Page1, Page1Data } from './Page1';
import { Page2, Page2Data } from './Page2';
import { Page3, Page3Data } from './Page3';
import {
  page1DataState,
  page2DataState,
  page3DataState,
  surveyDataState,
} from './state';

export type SurveyData = Page1Data & Page2Data & Page3Data;

export function Survey() {
  const { path } = useRouteMatch();

  const [page1Data, setPage1Data] = useRecoilState(page1DataState);
  const [page2Data, setPage2Data] = useRecoilState(page2DataState);
  const [page3Data, setPage3Data] = useRecoilState(page3DataState);

  console.log(useRecoilValue(surveyDataState));

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
