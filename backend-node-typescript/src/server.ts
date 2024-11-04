import express from 'express';
import continentRoutes from './features/continent/continent.routes';
import indexRoutes from './index.routes';

import { errorHandler } from './infrastructure/errors/error-handler';

const app = express();
const port = 9000;

app.use(express.json());

app.get('/test-error', (req, res, next) => {
  const error = { message: 'Test error raised without breaking application' };
  next(error);
});

app.use('/continents', continentRoutes);
app.use('/', indexRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
