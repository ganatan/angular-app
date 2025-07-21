import app from './app.js';
import appConfig from './config/app.config.js';
import { connectRedis, disconnectRedis } from './core/cache/redis.client.js';

async function startServer() {
  await connectRedis();

  const server = app.listen(appConfig.app.port, () => {
    console.log(`API listening on http://localhost:${appConfig.app.port}`);
  });

  server.stop = async () => {
    await disconnectRedis();
    await new Promise((resolve, reject) => {
      server.close((err) => {
        if (err) return reject(err);
        resolve();
      });
    });
  };

  return server;
}

export default startServer;

