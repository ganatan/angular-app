import { env } from './env.js';
import DB_CLIENTS from './db-clients.js';

const appConfig = {
  app: {
    port: env.port,
    env: env.nodeEnv,
    name: env.name,
    version: env.version,
    dbClient: env.dbClient || DB_CLIENTS.MOCK,
    nodeEnv: env.nodeEnv || 'development',
    fakeUser: {
      username: env.fakeUser.username || 'default_user',
      role: env.fakeUser.role || 'viewer',
    },
  },
  security: {
    corsOrigin: env.corsOrigin,
    helmet: {
      contentSecurityPolicy: false,
    },
    rateLimit: {
      windowMs: 15 * 60 * 1000,
      max: 100,
    },
  },
  logger: {
    level: env.logLevel,
  },
  monitoring: {
    metricsPath: '/metrics',
  },
};

export default appConfig;
