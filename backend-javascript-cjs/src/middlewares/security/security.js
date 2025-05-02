'use strict';

const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const appConfig = require('../../config/app.config');

function configureSecurity(app) {
  app.use(cors({ origin: appConfig.security.corsOrigin }));
  app.use(helmet(appConfig.security.helmet));
  const limiter = rateLimit({
    windowMs: appConfig.security.rateLimit.windowMs,
    max: appConfig.security.rateLimit.max,
    standardHeaders: true,
    legacyHeaders: false,
  });
  app.use(limiter);
}

module.exports = configureSecurity;
