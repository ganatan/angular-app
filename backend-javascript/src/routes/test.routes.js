import { Router } from 'express';
import { redisClient, isRedisAvailable } from '../core/cache/redis.client.js';
import { client } from '../infrastructure/metrics/metrics.js';
import logger from '../infrastructure/logger/logger.js';

const router = Router();

const ELASTIC_ENABLED = process.env.ELASTIC_ENABLED === 'true';
const REDIS_ENABLED = process.env.REDIS_ENABLED === 'true';
const PROMETHEUS_ENABLED = process.env.PROMETHEUS_ENABLED === 'true';
const PROMETHEUS_MODE = process.env.PROMETHEUS_MODE || 'all';

router.get('/test', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

router.get('/test-redis', async (req, res) => {
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

  return;
});

router.get('/test-prometheus', async (req, res) => {
  if (!PROMETHEUS_ENABLED) {
    res.send('Prometheus Disabled');

    return;
  }

  if (PROMETHEUS_MODE === 'http_requests_total') {
    const metric = await client.register.getSingleMetricAsString('http_requests_total');
    res.set('Content-Type', client.register.contentType);
    res.end(metric);
  } else {
    const metrics = await client.register.metrics();
    res.set('Content-Type', client.register.contentType);
    res.send(metrics);
  }

  return;
});

router.get('/test-elk', (req, res) => {
  if (!ELASTIC_ENABLED) {
    res.send('Elasticsearch Disabled');

    return;
  }

  logger.info('Test ELK réussi : requête GET /test', { route: '/test' });
  console.log('Requête /test : log envoyé vers ELK');
  res.send('Log envoyé vers ElasticSearch');

  return;
});

export default router;
