import app from './app.js';
import appConfig from './config/app.config.js';

const server = app.listen(appConfig.app.port, () => {
  console.log(`API listening on http://localhost:${appConfig.app.port}`);
});

export default server;
