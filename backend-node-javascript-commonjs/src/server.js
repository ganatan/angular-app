'use strict';

const config = require('./core/config/config');

const DBAdapterFactory = require('./core/database/db-adapter-factory');
const DBConnectionService = require('./core/database/db-connection-service');
const DBConnectionManager = require('./core/database/db-connection-manager');

const dbClients = require('./core/database/db-clients-factory');

const dbAdapterFactory = DBAdapterFactory.getInstance(dbClients);
const dbConnectionService = new DBConnectionService(dbAdapterFactory, config);
const dbConnectionManager = new DBConnectionManager(dbConnectionService);

const app = require('./app');

const ENV = process.env.NODE_ENV || 'development';
const { port: PORT, host: HOST, appName: APPNAME } = config;

let server;
const connections = new Set();

const startServer = async () => {
  try {
    await dbConnectionManager.connectDB();
    server = app.listen(PORT, () => {
      console.log(`Server running at http://${HOST}:${PORT} in ${ENV} mode`);
    });

    server.on('connection', connection => {
      connections.add(connection);
      connection.on('close', () => connections.delete(connection));
    });

  } catch (err) {
    console.error('Failed to connect to the database:', err);
  }
};

if (require.main === module) {
  startServer();
}

module.exports = {
  startServer,
};
