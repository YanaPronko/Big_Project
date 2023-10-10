import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

export const $api = axios.create({
  baseURL: __API__,
  headers: {
    authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || '',
  },
});

$api.interceptors.request.use((config) => {
  if (config.headers) {
    // eslint-disable-next-line no-param-reassign
    config.headers.authorization = localStorage.getItem(USER_LOCALSTORAGE_KEY) || '';
  }
});
