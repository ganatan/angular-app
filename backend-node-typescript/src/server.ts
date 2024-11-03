import express from 'express';
import continentRoutes from './api/continents/continent.routes';
import indexRoutes from './api/index.routes';

const app = express();
const port = 9000;

app.use(express.json());

app.use('/continents', continentRoutes);
app.use('/', indexRoutes);

app.listen(port, () => {
  console.log(`Serveur en écoute sur http://localhost:${port}`);
});
