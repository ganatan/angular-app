'use strict';

const DBConnectionService = require('../../db-connection-service');

describe('DBConnectionService', () => {
  let dbConnectionService;
  let dbFactoryMock;
  let configMock;

  beforeEach(() => {
    dbFactoryMock = {
      createClient: jest.fn(),
    };

    configMock = {
      development: { db: 'developmentConfig' },
      production: { db: 'productionConfig' },
    };

    dbConnectionService = new DBConnectionService(dbFactoryMock, configMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should create a database client using the development configuration by default', () => {
    process.env.NODE_ENV = 'development'; // Simuler l'environnement
    dbConnectionService.createClient();

    expect(dbFactoryMock.createClient).toHaveBeenCalledWith(configMock.development);
  });

  test('should create a database client using the production configuration', () => {
    process.env.NODE_ENV = 'production'; // Simuler l'environnement
    dbConnectionService.createClient();

    expect(dbFactoryMock.createClient).toHaveBeenCalledWith(configMock.production);
  });

  test('should default to development configuration if NODE_ENV is not set', () => {
    delete process.env.NODE_ENV; // Simuler l'absence de NODE_ENV
    dbConnectionService.createClient();

    expect(dbFactoryMock.createClient).toHaveBeenCalledWith(configMock.development);
  });
});
