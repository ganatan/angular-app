import { Router, Request, Response } from 'express';
import { redisClient, isRedisAvailable } from '../core/cache/redis.client';
import { client } from '../infrastructure/metrics/metrics';
import logger from '../infrastructure/logger/logger';

const router = Router();

const ELASTIC_ENABLED: boolean = process.env.ELASTIC_ENABLED === 'true';
const REDIS_ENABLED: boolean = process.env.REDIS_ENABLED === 'true';
const PROMETHEUS_ENABLED: boolean = process.env.PROMETHEUS_ENABLED === 'true';
const PROMETHEUS_MODE: string = process.env.PROMETHEUS_MODE || 'all';

router.get('/test', (req: Request, res: Response) => {
  res.status(200).json({ status: 'ok' });
});

router.get('/test-redis', async (req: Request, res: Response): Promise<void> => {
  if (!REDIS_ENABLED) {
    res.send('Redis Disabled');

    return;
  }

  if (isRedisAvailable()) {
    await redisClient.set('test-redis', 'Redis is working!');
    const value = await redisClient.get('test-redis');
    console.log('Requête /test-redis : valeur dans Redis =', value);
    res.send(`Redis test : ${value}`);

    return;
  }
  res.send('Redis Enabled but unavailable');
});

router.get('/test-prometheus', async (req: Request, res: Response): Promise<void> => {
  if (!PROMETHEUS_ENABLED) {
    res.send('Prometheus Disabled');

    return;
  }

  res.set('Content-Type', client.register.contentType);

  if (PROMETHEUS_MODE === 'http_requests_total') {
    const metric: string = await client.register.getSingleMetricAsString('http_requests_total');
    res.end(metric);
  } else {
    const metrics: string = await client.register.metrics();
    res.end(metrics);
  }
});

router.get('/test-elk', (req: Request, res: Response): void => {
  if (!ELASTIC_ENABLED) {
    res.send('Elasticsearch Disabled');

    return;
  }

  logger.info('Test ELK réussi : requête GET /test', { route: '/test' });
  console.log('Requête /test : log envoyé vers ELK');
  res.send('Log envoyé vers ElasticSearch');
});

export default router;
