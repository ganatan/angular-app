import express, { Request, Response } from 'express';
import { client } from '../infrastructure/metrics/metrics';

const router = express.Router();

const PROMETHEUS_ENABLED = process.env.PROMETHEUS_ENABLED === 'true';
const PROMETHEUS_MODE = process.env.PROMETHEUS_MODE || 'all';

router.get('/metrics', async (req: Request, res: Response): Promise<void> => {
  if (!PROMETHEUS_ENABLED) {
    res.status(404).send('Prometheus monitoring disabled');

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

export default router;
