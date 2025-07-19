import app from './app.js';
import appConfig from './config/app.config.js';
import { connectRedis } from './core/cache/redis.client.js';

async function startServer() {
  await connectRedis();
  const server = app.listen(appConfig.app.port, () => {
    console.log(`✅ API listening on http://localhost:${appConfig.app.port}`);
  });
  return server;
}

export default startServer;



// import app from './app.js';
// import appConfig from './config/app.config.js';
// import { connectRedis } from './core/cache/redis.client.js';

// async function startServer() {
//   try {
//     await connectRedis();

//     const server = app.listen(appConfig.app.port, () => {
//       console.log(`✅ API listening on http://localhost:${appConfig.app.port}`);
//     });

//     server.on('error', (error) => {
//       if (error.code === 'EADDRINUSE') {
//         console.error(`❌ Port ${appConfig.app.port} is already in use.`);
//         process.exit(1);
//       } else {
//         console.error('❌ Unexpected server error:', error);
//         process.exit(1);
//       }
//     });

//   } catch (error) {
//     console.error('❌ Failed to start server:', error);
//     process.exit(1);
//   }
// }

// startServer();


