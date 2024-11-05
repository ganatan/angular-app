import 'reflect-metadata';

import express from 'express';
import continentRoutes from './features/continent/continent.routes';
import indexRoutes from './index.routes';

import { errorHandler } from './infrastructure/middleware/error-handler';

import config from './core/config/config';

const PORT = config.port;
console.log('00000000001:' + JSON.stringify(PORT))

const app = express();
app.use(express.json());

app.use(express.json());

app.get('/test-error', (req, res, next) => {
  const error = { message: 'Test error raised without breaking application' };
  next(error);
});

app.use('/continents', continentRoutes);
app.use('/', indexRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
