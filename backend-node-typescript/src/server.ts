import 'reflect-metadata';

import config from './core/config/config';
import app from './app';

const ENV = process.env.NODE_ENV || 'development';
const { port: PORT, host: HOST, appName: APPNAME } = config;

app.listen(PORT, () => {
  console.log(`Server running at http://${HOST}:${PORT} in ${ENV} mode`);
  console.log(`Application Name: ${APPNAME}`);
});

