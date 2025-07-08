import express from 'express';
import cors from 'cors';

import podcastRoutes from './routes/podcast.routes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/podcast', podcastRoutes);

app.get('/', (req, res) => {
  res.send('podcast-builder');
});

app.listen(3000, () => {
  console.log('Serveur démarré sur http://localhost:3000');
});
