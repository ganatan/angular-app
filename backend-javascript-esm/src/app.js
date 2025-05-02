import express from 'express';
import compression from 'compression';

import appConfig from './config/app.config.js';

import configureSecurity from './middlewares/security/security.js';

import initLocals from './middlewares/core/init-locals.js';

import notFoundHandler from './middlewares/error/not-found-handler.js';
import responseHandler from './middlewares/response/response-handler.js';
import errorHandler from './middlewares/error/error-handler.js';

import requestLogger from './infrastructure/logger/request-logger.js';
import errorLogger from './infrastructure/logger/error-logger.js';

import fakeAuth from './middlewares/auth/fake-auth.js';

import healthRoutes from './routes/health.routes.js';
import versionRoutes from './routes/version.routes.js';
import swaggerRoutes from './routes/swagger.routes.js';
import appRoutes from './routes/app.routes.js';
import rootRoutes from './routes/root.routes.js';

const app = express();

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(initLocals);
configureSecurity(app);

if (['development', 'test'].includes(appConfig.app.nodeEnv)) {
  app.use(fakeAuth(appConfig.app.fakeUser));
}

app.use(healthRoutes);

app.use(requestLogger);

app.use(versionRoutes);
app.use(swaggerRoutes);
app.use(appRoutes);
app.use(rootRoutes);

app.use(notFoundHandler);

app.use(responseHandler);

app.use(errorHandler);
app.use(errorLogger);

export default app;
