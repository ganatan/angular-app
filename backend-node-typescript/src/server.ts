import 'reflect-metadata';
import config from './core/config/config';
import app from './app';

const PORT = config.port;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
