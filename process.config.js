module.exports = {
  apps : [
    {
      name      : 'ganatan-frontend',
      script    : 'dist/server.js',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_dev : {
        NODE_ENV: 'dev'
      },
      env_prod : {
        NODE_ENV: 'prod'
      }
    }
  ],
};
