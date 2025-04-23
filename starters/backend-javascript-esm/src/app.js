import express from 'express';
import { getItems } from './controllers/person.js';
import configureSecurity from './security.js';

const app = express();

configureSecurity(app);

app.get('/persons', getItems);

app.get('/', (req, res) => {
  const result = {
    success: true,
    data: {
      version: '1.0.0',
      status: 'ok',
      app: 'backend-javascript-esm',
    },
  };
  res.json(result);
});

export default app;
