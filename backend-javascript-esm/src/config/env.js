import path from 'path';
import dotenv from 'dotenv';

const nodeEnv = process.env.NODE_ENV || 'development';

let envFile = '.env.development';

if (nodeEnv === 'production') {
  envFile = '.env.production';
} else if (nodeEnv === 'test') {
  envFile = '.env.test';
}
dotenv.config({ path: path.resolve(process.cwd(), envFile) });

export const env = {
  nodeEnv: nodeEnv || 'development',
  name: process.env.APP_NAME,
  version: process.env.APP_VERSION || '0.0.1',
  port: process.env.PORT || 7777,
  corsOrigin: process.env.CORS_ORIGIN || '*',
  logLevel: process.env.LOG_LEVEL || 'info',
  dbClient: process.env.DB_CLIENT,
  fakeUser: {
    username: process.env.FAKE_USER_NAME || 'default_user',
    role: process.env.FAKE_USER_ROLE || 'viewer',
  },
};
