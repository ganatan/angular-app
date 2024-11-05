import 'dotenv/config';

const config = {
  development: {
    appName: 'backend-node-javascript-dev',
    host: 'localhost',
    port: 9000,
    db: {
      client: process.env.DB_CLIENT || 'mock',
      host: 'localhost',
      user: process.env.DB_USER || 'dev_user',
      password: process.env.DB_PASSWORD || 'dev_password',
      database: 'angular_backend',
      port: 5432,
    },
  },
  production: {
    appName: 'backend-node-javascript-prod',
    host: 'localhost',
    port: 3000,
    db: {
      client: process.env.DB_CLIENT || 'mock',
      host: 'localhost',
      user: process.env.DB_USER || 'prod_user',
      password: process.env.DB_PASSWORD || 'prod_password',
      database: 'angular_backend',
      port: 5432,
    },
  },
  test: {
    appName: 'backend-node-javascript-test',
    host: 'localhost',
    port: 7000,
    db: {
      client: process.env.DB_CLIENT || 'mock',
      host: 'localhost',
      user: process.env.DB_USER || 'test_user',
      password: process.env.DB_PASSWORD || 'test_password',
      database: 'angular_backend',
      port: 5432,
    },
  },
};

export default config;
