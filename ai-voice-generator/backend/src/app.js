import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';

import llmRoutes from './routes/llm.routes.js';
import voiceRoutes from './routes/voice.routes.js';
import aiServices from './config/ai-services.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/llm', llmRoutes);
app.use('/api/voice', voiceRoutes);

app.use('/storage', express.static(path.join(process.cwd(), 'storage')));

app.get('/', (req, res) => {
  res.json({ services: aiServices });
});

app.listen(port, () => {
  console.log(`✅ Server listening on http://localhost:${port}`);
});
