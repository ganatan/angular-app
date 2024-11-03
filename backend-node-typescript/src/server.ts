import express from 'express';
import continentRoutes from './features/continent/continent.routes';
import indexRoutes from './index.routes';

const app = express();
const port = 9000;

app.use(express.json());

app.use('/continents', continentRoutes);
app.use('/', indexRoutes);

app.listen(port, () => {
  console.log(`Serveur en écoute sur http://localhost:${port}`);
});
