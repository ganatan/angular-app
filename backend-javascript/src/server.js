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
