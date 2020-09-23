import { atom, selector } from 'recoil';
import { Page1Data } from './Page1';
import { Page2Data } from './Page2';
import { Page3Data } from './Page3';

export const page1DataState = atom<Page1Data>({
  key: 'page1DataState',
  default: {},
});

export const page2DataState = atom<Page2Data>({
  key: 'page2DataState',
  default: {},
});

export const page3DataState = atom<Page3Data>({
  key: 'page3DataState',
  default: {},
});

export const surveyDataState = selector({
  key: 'surveyDataState',
  get: ({ get }) => ({
    ...get(page1DataState),
    ...get(page2DataState),
    ...get(page3DataState),
  }),
});
