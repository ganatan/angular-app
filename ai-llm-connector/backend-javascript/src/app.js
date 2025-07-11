import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import llmRoutes from './routes/llm.routes.js';
import aiServices from './config/ai-services.js';

dotenv.config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/api/llm', llmRoutes);

app.get('/api/test', (req, res) => {
  res.json({
    success: true,
    method: 'GET',
    message: 'Default GET route working'
  });
});

app.post('/api/test', (req, res) => {
  const body = req.body;
  console.log('POST /api/test:', body);

  res.json({
    success: true,
    method: 'POST',
    received: body
  });
});

app.put('/api/test', (req, res) => {
  const body = req.body;
  console.log('PUT /api/test:', body);

  res.json({
    success: true,
    method: 'PUT',
    updated: body
  });
});

app.delete('/api/test', (req, res) => {
  const { id } = req.query;
  console.log('DELETE /api/test?id=xxx:', id);

  res.json({
    success: true,
    method: 'DELETE',
    deletedId: id
  });
});

app.get('/', (req, res) => {
  res.json({ services: aiServices });
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
