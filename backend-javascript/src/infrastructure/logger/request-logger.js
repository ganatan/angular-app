import logger from './logger.js';

const requestLogger = (req, res, next) => {
  logger.info(`[${req.method}] ${req.originalUrl}`, {
    method: req.method,
    route: req.originalUrl,
  });
  next();
};

export default requestLogger;
