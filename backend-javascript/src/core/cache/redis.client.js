import { createClient } from 'redis';

const REDIS_ENABLED = process.env.REDIS_ENABLED !== 'false';
const REDIS_REQUIRED = process.env.REDIS_REQUIRED === 'true';
const REDIS_URL = process.env.REDIS_URL || 'redis://localhost:6379';

const redisClient = createClient({ url: REDIS_URL });

let redisAvailable = false;

async function connectRedis() {
  if (!REDIS_ENABLED) {
    console.log('Redis disabled');
    redisAvailable = false;

    return;
  }

  if (!redisClient.isOpen) {
    console.log(`Connecting to Redis: ${REDIS_URL}`);
    try {
      await redisClient.connect();
      redisAvailable = true;
      console.log('Redis connected');
    } catch (error) {
      redisAvailable = false;
      console.error('Redis connection failed:', error.message);

      if (REDIS_REQUIRED) {
        console.error('Redis is required. Shutting down server.');
        process.exit(1);
      } else {
        console.warn('Redis optional. Starting without cache.');
      }
    }
  }
}

async function disconnectRedis() {
  if (!REDIS_ENABLED) {
    redisAvailable = false;

    return;
  }

  if (redisClient.isOpen) {
    console.log('Closing Redis connection');
    await redisClient.quit();
    redisAvailable = false;
    console.log('Redis disconnected');
  }
}

function isRedisAvailable() {
  return redisAvailable;
}

export { redisClient, connectRedis, disconnectRedis, isRedisAvailable };
