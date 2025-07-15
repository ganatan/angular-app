import express from 'express';
import compression from 'compression';

import appConfig from './config/app.config';

import configureSecurity from './middlewares/security/security';

import initLocals from './middlewares/core/init-locals';

import notFoundHandler from './middlewares/error/not-found-handler';
import responseHandler from './middlewares/response/response-handler';
import errorHandler from './middlewares/error/error-handler';

import requestLogger from './infrastructure/logger/request-logger';
import errorLogger from './infrastructure/logger/error-logger';

import fakeAuth from './middlewares/auth/fake-auth';

import healthRoutes from './routes/health.routes';
import versionRoutes from './routes/version.routes';
import swaggerRoutes from './routes/swagger.routes';
import appRoutes from './routes/app.routes';
import rootRoutes from './routes/root.routes';

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
