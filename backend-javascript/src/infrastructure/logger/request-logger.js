import os from 'os';
import logger from './logger.js';
import { incrementHttpRequests } from '../metrics/metrics.js';

const requestLogger = (req, res, next) => {
  const startTime = Date.now();
  console.log('00000000001:request-logger');
  res.on('finish', () => {
    incrementHttpRequests(req.method, req.originalUrl, res.statusCode);

    const responseTime = Date.now() - startTime;
    const logLevel = res.statusCode >= 400 ? 'warn' : 'info';

    logger[logLevel](`[${req.method}] ${req.originalUrl} - ${res.statusCode}`, {
      environment: process.env.NODE_ENV || 'development',
      hostname: os.hostname(),
      processId: process.pid,
      correlationId: req.correlationId,
      requestId: req.id,
      sessionId: req.sessionID,
      userId: req.user?.id,
      method: req.method,
      route: req.originalUrl,
      statusCode: res.statusCode,
      protocol: req.protocol,
      httpVersion: req.httpVersion,
      responseTime: responseTime,
      contentLength: res.getHeader('content-length') || 0,
      bodySize: req.headers['content-length'] ? parseInt(req.headers['content-length']) : 0,
      ip: req.ip,
      xForwardedFor: req.headers['x-forwarded-for'] || null,
      userAgent: req.headers['user-agent'],
      referer: req.headers['referer'] || null,
      origin: req.headers['origin'] || null,
      host: req.headers['host'] || null,
      accept: req.headers['accept'] || null,
      acceptLanguage: req.headers['accept-language'] || null,
      query: Object.keys(req.query).length > 0 ? req.query : undefined,
      timestamp: new Date().toISOString(),
    });
  });

  next();
};

export default requestLogger;
