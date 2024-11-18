'use strict';

const DBConnectionManager = require('../../db-connection-manager');

describe('DBConnectionManager', () => {
  let dbConnectionManager;
  let connectionServiceMock;
  let dbClientMock;
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
    dbClientMock = {
      connect: jest.fn().mockResolvedValue(true),
      query: jest.fn().mockResolvedValue('query result'),
      close: jest.fn().mockResolvedValue(true),
      constructor: { name: 'MockDBClient' },
    };

    connectionServiceMock = {
      createClient: jest.fn().mockReturnValue(dbClientMock),
    };

    dbConnectionManager = new DBConnectionManager(connectionServiceMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
    consoleLogSpy.mockRestore();
  });

  describe('connectDB', () => {
    test('devrait se connecter avec succès', async () => {
      const isConnected = await dbConnectionManager.connectDB();
      expect(isConnected).toBe(true);
      expect(connectionServiceMock.createClient).toHaveBeenCalled();
      expect(dbClientMock.connect).toHaveBeenCalled();
      expect(consoleLogSpy).toHaveBeenCalledWith('Connected to MockDBClient');
    });

    test('devrait gérer une connexion échouée', async () => {
      dbClientMock.connect.mockResolvedValue(false);
      const isConnected = await dbConnectionManager.connectDB();
      expect(isConnected).toBe(false);
      expect(consoleLogSpy).toHaveBeenCalledWith('Not Connected to MockDBClient');
    });
  });

  describe('queryDB', () => {
    test('devrait lancer une erreur si aucun client n\'est connecté', async () => {
      await expect(dbConnectionManager.queryDB('SELECT * FROM table', []))
        .rejects
        .toThrow('No database client connected');
    });

    test('devrait exécuter une requête si connecté', async () => {
      await dbConnectionManager.connectDB();
      const result = await dbConnectionManager.queryDB('SELECT * FROM table', ['param']);

      expect(dbClientMock.query).toHaveBeenCalledWith('SELECT * FROM table', ['param']);
      expect(result).toBe('query result');
    });
  });

  describe('closeDB', () => {
    test('devrait fermer la connexion si un client est connecté', async () => {
      await dbConnectionManager.connectDB();
      await dbConnectionManager.closeDB();

      expect(dbClientMock.close).toHaveBeenCalled();
      expect(consoleLogSpy).toHaveBeenCalledWith('Connection closed to MockDBClient');
    });

    test('ne devrait rien faire si aucun client n\'est connecté', async () => {
      await dbConnectionManager.closeDB();

      expect(dbClientMock.close).not.toHaveBeenCalled();
      expect(consoleLogSpy).not.toHaveBeenCalledWith('Connection closed to MockDBClient');
    });
  });
});
