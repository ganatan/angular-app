import config from './core/config/config.js';

import DBAdapterFactory from './core/database/db-adapter-factory.js';
import DBConnectionService from './core/database/db-connection-service.js';
import DBConnectionManager from './core/database/db-connection-manager.js';
import dbClients from './core/database/db-clients-factory.js';

import app from './app.js';

const dbAdapterFactory = DBAdapterFactory.getInstance(dbClients);
const dbConnectionService = new DBConnectionService(dbAdapterFactory, config);
const dbConnectionManager = new DBConnectionManager(dbConnectionService);

const ENV = process.env.NODE_ENV || 'development';
const { port: PORT, host: HOST, appName: APPNAME } = config[ENV];

let server;
const connections = new Set();

const startServer = async () => {
  try {
    await dbConnectionManager.connectDB();
    server = app.listen(PORT, () => {
      console.log(`Server running at http://${HOST}:${PORT} in ${ENV} mode`);
      console.log(`Application Name: ${APPNAME}`);
    });

    server.on('connection', connection => {
      connections.add(connection);
      connection.on('close', () => connections.delete(connection));
    });
  } catch (err) {
    console.error('Failed to connect to the database:', err);
  }
};

export { startServer };
