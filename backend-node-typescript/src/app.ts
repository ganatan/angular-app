import express from 'express';
import featuresRoutes from './features-routes';
import indexRoutes from './index.routes';
import { errorHandler } from './infrastructure/middleware/error-handler';

const app = express();
app.use(express.json());

app.get('/test-error', (req, res, next) => {
  const error = { message: 'Test error raised without breaking application' };
  next(error);
});

app.use(featuresRoutes);
app.use('/', indexRoutes);

app.use(errorHandler);

export default app;
