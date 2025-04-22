import { appInfo, applicationBase } from './environment.common';

export const environment = {
  appInfo,
  application: {
    ...applicationBase,
    angular: `${applicationBase.angular} DEV`,
  },
  urlNews: './assets/params/json/mock/trailers.json',
  urlMovies: './assets/params/json/mock/movies.json',
  useDatabase: false,
  backend: 'http://localhost:3000',
};