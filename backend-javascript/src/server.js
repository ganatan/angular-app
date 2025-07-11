import app from './app.js';
import appConfig from './config/app.config.js';

const server = app.listen(appConfig.app.port, () => {
  console.log(`✅ API listening on http://localhost:${appConfig.app.port}`);
});

server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`❌ Port ${appConfig.app.port} is already in use.`);
    process.exit(1);
  } else {
    console.error('❌ Unexpected server error:', error);
    process.exit(1);
  }
});

export default server;
