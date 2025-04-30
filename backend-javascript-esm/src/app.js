import express from 'express';
import compression from 'compression';

import configureSecurity from './middlewares/security/security.js';

import initLocals from './middlewares/core/init-locals.js';

import notFoundHandler from './middlewares/error/not-found-handler.js';
import responseHandler from './middlewares/response/response-handler.js';
import errorHandler from './middlewares/error/error-handler.js';

import requestLogger from './infrastructure/logger/request-logger.js';
import errorLogger from './infrastructure/logger/error-logger.js';

import swaggerRoutes from './infrastructure/swagger/swagger.routes.js';

import healthRoutes from './routes/health.routes.js';
import appRoutes from './routes/app.routes.js';
import rootRoutes from './routes/root.routes.js';

const app = express();

configureSecurity(app);

app.use(compression());
app.use(express.json());
app.use(initLocals);

app.use(healthRoutes);

app.use(requestLogger);

app.use('/api-docs', swaggerRoutes);

app.use(appRoutes);
app.use(rootRoutes);

app.use(notFoundHandler);
app.use(responseHandler);
app.use(errorHandler);
app.use(errorLogger);

export default app;
