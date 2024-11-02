import 'dotenv/config';

const config = {
  development: {
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

// module.exports = config;
export default config;
