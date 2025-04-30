import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import appConfig from '../../config/app.config.js';

export default function configureSecurity(app) {
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
