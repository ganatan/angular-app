import app from './app.js';
import config from './core/config/config.js';

const server = app.listen(config.port, () => {
  console.log(`Server started at http://localhost:${config.port}`);
});

export default server;
