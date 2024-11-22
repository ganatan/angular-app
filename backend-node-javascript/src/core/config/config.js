import 'dotenv/config';

let env = process.env.NODE_ENV;

if (env === undefined || env === null) {
  env = 'development';
}

const development = {
  appName: 'backend-node-javascript-dev',
  host: 'localhost',
  port: 9000,
  db: {
    client: process.env.DB_CLIENT || 'mock',
    host: 'localhost',
    user: process.env.DB_USER || 'dev_user',
    password: process.env.DB_PASSWORD || 'dev_password',
    database: 'backend_angular',
    port: 5432,
  },
};

const production = {
  appName: 'backend-node-javascript-prod',
  host: 'localhost',
  port: 3000,
  db: {
    client: process.env.DB_CLIENT || 'mock',
    host: 'localhost',
    user: process.env.DB_USER || 'prod_user',
    password: process.env.DB_PASSWORD || 'prod_password',
    database: 'backend_angular',
    port: 5432,
  },
};

const test = {
  appName: 'backend-node-javascript-test',
  host: 'localhost',
  port: 7000,
  db: {
    client: process.env.DB_CLIENT || 'mock',
    host: 'localhost',
    user: process.env.DB_USER || 'test_user',
    password: process.env.DB_PASSWORD || 'test_password',
    database: 'backend_angular',
    port: 5432,
  },
};

const selected = {
  development,
  production,
  test,
};

const config = selected[env];

export default config;
