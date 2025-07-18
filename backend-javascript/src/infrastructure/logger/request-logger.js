import logger from './logger.js';

const requestLogger = (req, res, next) => {
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
