import express from 'express';
import { client } from '../infrastructure/metrics/metrics.js';

const router = express.Router();

router.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  const metric = await client.register.getSingleMetricAsString('http_requests_total');
  res.end(metric);

  //   res.set('Content-Type', client.register.contentType);
//   res.end(await client.register.metrics());

});

export default router;
