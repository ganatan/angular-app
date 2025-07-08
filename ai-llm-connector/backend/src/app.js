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

app.get('/', (req, res) => {
  let test = "test";
  console.log(test);
  res.json({ services: aiServices });
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
