import { createClient, RedisClientType } from 'redis';

const REDIS_ENABLED: boolean = process.env.REDIS_ENABLED !== 'false';
const REDIS_REQUIRED: boolean = process.env.REDIS_REQUIRED === 'true';
const REDIS_URL: string = process.env.REDIS_URL || 'redis://localhost:6379';

const redisClient: RedisClientType = createClient({ url: REDIS_URL });

let redisAvailable: boolean = false;

async function connectRedis(): Promise<void> {
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
    } catch (error: any) {
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

async function disconnectRedis(): Promise<void> {
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

function isRedisAvailable(): boolean {
  return redisAvailable;
}

export { redisClient, connectRedis, disconnectRedis, isRedisAvailable };
