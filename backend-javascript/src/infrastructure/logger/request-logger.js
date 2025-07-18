import logger from './logger.js';
import { incrementHttpRequests } from '../metrics/metrics.js';

const requestLogger = (req, res, next) => {

  res.on('finish', () => {
    incrementHttpRequests(req.method, req.originalUrl, res.statusCode);
  });

  logger.info(`[${req.method}] ${req.originalUrl}`, {
    method: req.method,
    route: req.originalUrl,
    correlationId: req.correlationId,
    ip: req.ip,
    userAgent: req.headers['user-agent'],
  });
  next();
};

export default requestLogger;
