module.exports = {
  apps : [
    {
      name      : 'ganatan-backend',
      script    : 'server.js',
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
