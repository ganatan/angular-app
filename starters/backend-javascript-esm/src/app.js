import express from 'express';
import { getItems } from './controllers/person.js';

const app = express();

app.get('/persons', getItems);

app.get('/', (req, res) => {
  res.send('backend-javascript-esm');
});

export default app;
