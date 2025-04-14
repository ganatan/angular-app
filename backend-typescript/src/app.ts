import express, { Application } from 'express';
import cors from 'cors';

import initLocals from './infrastructure/middleware/core/init-locals';

import notFoundHandler from './infrastructure/middleware/error/not-found-handler';
import responseHandler from './infrastructure/middleware/error/response-handler';
import errorHandler from './infrastructure/middleware/error/error-handler';

import rootRouter from './routers/root.router';
import modulesRouter from './routers/modules.router';

const app: Application = express();

app.use(cors());

app.use(initLocals);

app.use(rootRouter);
app.use(modulesRouter);

app.use(notFoundHandler);
app.use(responseHandler);
app.use(errorHandler);

export default app;
