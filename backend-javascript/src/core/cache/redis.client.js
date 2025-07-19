import { createClient } from 'redis';

const redisClient = createClient({
  url: process.env.REDIS_URL || 'redis://localhost:6379',
});

async function connectRedis() {
  if (!redisClient.isOpen) {
    await redisClient.connect();
  }
}

export { redisClient, connectRedis };

// import { createClient } from 'redis';

// const redisClient = createClient({ url: process.env.REDIS_URL || 'redis://localhost:6379' });

// await redisClient.connect();

// export default redisClient;
