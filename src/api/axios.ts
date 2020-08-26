import axios from 'axios';
import { makeUseAxios } from 'axios-hooks';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    Accept: 'application/json',
  },
});

export const useAxios = makeUseAxios({
  axios: instance,
});
