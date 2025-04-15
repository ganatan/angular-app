import express from 'express';
import cors from 'cors';

import config from './core/config/config.js';

import initLocals from './infrastructure/middleware/core/init-locals.js';
import notFoundHandler from './infrastructure/middleware/error/not-found-handler.js';
import responseHandler from './infrastructure/middleware/error/response-handler.js';
import errorHandler from './infrastructure/middleware/error/error-handler.js';

import requestLogger from './infrastructure/logger/request-logger.js';
import errorLogger from './infrastructure/logger/error-logger.js';

import fakeAuth from './infrastructure/middleware/auth/fake-auth.js';

import swaggerRouter from './infrastructure/swagger/swagger.router.js';

import rootRouter from './routers/root.router.js';
import modulesRouter from './routers/modules.router.js';

const app = express();

app.use(cors());

app.use(express.json());

app.use(initLocals);

if (['development', 'test'].includes(config.nodeEnv)) {
  app.use(fakeAuth(config.fakeUser));
}

app.use(requestLogger);

app.use('/api-docs', swaggerRouter);

app.use(rootRouter);
app.use(modulesRouter);

app.use(notFoundHandler);
app.use(responseHandler);
app.use(errorLogger);
app.use(errorHandler);

export default app;
