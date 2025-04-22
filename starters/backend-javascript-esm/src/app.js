import express from 'express';
import { getItems } from './controllers/person.js';

const app = express();

app.get('/persons', getItems);

app.get('/', (req, res) => {
  let result =
  {
    "success": true,
    "data": {
      "version": "1.0.0",
      "status": "ok",
      "app": "backend-javascript-esm"
    }
  };
  res.send(result);
});

export default app;
