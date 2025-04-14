import dotenv from 'dotenv';
import DB_CLIENTS, { DbClientType } from './db-clients';

dotenv.config();

interface FakeUser {
  username: string;
  role: string;
}

interface AppConfig {
  port: number;
  dbClient: DbClientType;
  version: string;
  nodeEnv: string;
  fakeUser: FakeUser;
}

const config: AppConfig = {
  port: parseInt(process.env.PORT || '3000', 10),
  dbClient: (process.env.DB_CLIENT || DB_CLIENTS.MOCK) as DbClientType,
  version: process.env.APP_VERSION || '0.0.1',
  nodeEnv: process.env.NODE_ENV || 'development',
  fakeUser: {
    username: process.env.FAKE_USER_NAME || 'default_user',
    role: process.env.FAKE_USER_ROLE || 'viewer',
  },
};

export default config;
