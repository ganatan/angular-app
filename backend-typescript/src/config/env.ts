import path from 'path';
import dotenv from 'dotenv';

import DB_CLIENTS from './db-clients';

const nodeEnv: string = process.env.NODE_ENV || 'development';

let envFile = '.env.development';

if (nodeEnv === 'production') {
  envFile = '.env.production';
} else if (nodeEnv === 'test') {
  envFile = '.env.test';
}
dotenv.config({ path: path.resolve(process.cwd(), envFile) });

export const env = {
  nodeEnv: nodeEnv,
  name: process.env.APP_NAME as string,
  version: process.env.APP_VERSION as string,
  port: parseInt(process.env.PORT || '7777', 10),
  dbClient: process.env.DB_CLIENT || DB_CLIENTS.MOCK,
  corsOrigin: process.env.CORS_ORIGIN || '*',
  logLevel: process.env.LOG_LEVEL || 'info',
  fakeUser: {
    username: process.env.FAKE_USER_NAME || 'default_user',
    role: process.env.FAKE_USER_ROLE || 'viewer',
  },
};
