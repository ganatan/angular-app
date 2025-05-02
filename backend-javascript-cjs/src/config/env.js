'use strict';

const path = require('path');
const dotenv = require('dotenv');

const DB_CLIENTS = require('./db-clients.js');

const nodeEnv = process.env.NODE_ENV || 'development';

let envFile = '.env.development';

if (nodeEnv === 'production') {
  envFile = '.env.production';
} else if (nodeEnv === 'test') {
  envFile = '.env.test';
}
dotenv.config({ path: path.resolve(process.cwd(), envFile) });

const env = {
  nodeEnv: nodeEnv,
  name: process.env.APP_NAME,
  version: process.env.APP_VERSION,
  port: process.env.PORT || 7777,
  dbClient: process.env.DB_CLIENT || DB_CLIENTS.MOCK,
  corsOrigin: process.env.CORS_ORIGIN || '*',
  logLevel: process.env.LOG_LEVEL || 'info',
  fakeUser: {
    username: process.env.FAKE_USER_NAME || 'default_user',
    role: process.env.FAKE_USER_ROLE || 'viewer',
  },
};

module.exports = env;
