import express from 'express';
import { createLogger, format, transports } from 'winston';
import { ElasticsearchTransport } from 'winston-elasticsearch';

const app = express();

const esTransport = new ElasticsearchTransport({
  level: 'info',
  indexPrefix: 'example-logs',
  clientOpts: { node: 'http://localhost:9200' },
});

const logger = createLogger({
  level: 'info',
  format: format.combine(format.timestamp(), format.json()),
  transports: [esTransport, new transports.Console()],
});

app.get('/', (req, res) => {
  logger.info('Hello depuis Express + ElasticSearch', {
    route: '/',
    method: req.method,
    ip: req.ip,
  });
  res.send('Log envoyé dans ElasticSearch');
});

const port = 8080;
app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});
