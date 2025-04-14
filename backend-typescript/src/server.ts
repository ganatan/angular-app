import app from './app';
import config from './core/config/config';
import { Server } from 'http';

const server: Server = app.listen(config.port, () => {
  console.log(`Server started at http://localhost:${config.port}`);
});

export default server;
