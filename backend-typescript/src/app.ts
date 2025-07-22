import express from 'express';
import compression from 'compression';

import configureSecurity from './middlewares/security/security';
import initLocals from './middlewares/core/init-locals';
import correlationIdMiddleware from './middlewares/core/correlation-id';
import requestLogger from './infrastructure/logger/request-logger';
import notFoundHandler from './middlewares/error/not-found-handler';
import responseHandler from './middlewares/response/response-handler';
import errorHandler from './middlewares/error/error-handler';

import metricsRoutes from './routes/metrics.routes';
import healthRoutes from './routes/health.routes';
import testRoutes from './routes/test.routes';
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

app.use(healthRoutes);

app.use(correlationIdMiddleware);
app.use(requestLogger);

app.use(healthRoutes);
app.use(testRoutes);
app.use(metricsRoutes);
app.use(versionRoutes);
app.use(swaggerRoutes);
app.use(appRoutes);
app.use(rootRoutes);

app.use(notFoundHandler);
app.use(responseHandler);
app.use(errorHandler);

export default app;
