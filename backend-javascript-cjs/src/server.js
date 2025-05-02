'use strict';

const app = require('./app');
const config = require('./config/app.config');

const server = app.listen(config.app.port, () => {
  console.log(`✅ API listening on http://localhost:${config.app.port}`);
});

server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`❌ Port ${config.app.port} is already in use.`);
    process.exit(1);
  } else {
    console.error('❌ Unexpected server error:', error);
    process.exit(1);
  }
});

module.exports = server;
