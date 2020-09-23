import axios from 'axios';
import {
  atom,
  selector,
  SetterOrUpdater,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';

const activeRequestsCountState = atom<number>({
  key: 'activeRequestsCountState',
  default: 0,
});
const networkLastErrorState = atom<Error | undefined>({
  key: 'networkLastErrorState',
  default: undefined,
});
const networkIsActiveState = selector({
  key: 'networkIsActiveState',
  get: ({ get }) => get(activeRequestsCountState) > 0,
});

let setActiveRequests: SetterOrUpdater<number>;
let setLastError: SetterOrUpdater<Error | undefined>;

axios.interceptors.request.use((config) => {
  if (setActiveRequests) setActiveRequests((currentVal) => currentVal + 1);
  return config;
});

axios.interceptors.response.use(
  (config) => {
    if (setActiveRequests) setActiveRequests((currentVal) => currentVal - 1);
    return config;
  },
  (error) => {
    if (setActiveRequests) setActiveRequests((currentVal) => currentVal - 1);
    if (setLastError) setLastError(error);
    return Promise.reject(error);
  }
);

export function NetworkStatusProvider() {
  setActiveRequests = useSetRecoilState(activeRequestsCountState);
  setLastError = useSetRecoilState(networkLastErrorState);
  return null;
}

export function useNetworkIsActive() {
  return useRecoilValue(networkIsActiveState);
}

export function useNetworkLastError() {
  return useRecoilValue(networkLastErrorState);
}
