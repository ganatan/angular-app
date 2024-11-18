'use strict';

jest.mock('../../../../core/database/db-adapter-factory');
jest.mock('../../../../core/database/db-clients-factory');
jest.mock('../../../../core/config/config');
jest.mock('../../../../infrastructure/logger/logger');
jest.mock('../../continent-repository-mock');
jest.mock('../../continent-repository-mongodb');
jest.mock('../../continent-repository-mysql');
jest.mock('../../continent-repository-postgresql');

const ContinentRepository = require('../../continent-repository');
const DBFactory = require('../../../../core/database/db-adapter-factory');
const DB_CLIENTS = require('../../../../core/database/db-clients');
const config = require('../../../../core/config/config');
const logger = require('../../../../infrastructure/logger/logger');
const MOCKAdapter = require('../../continent-repository-mock');
const MongoDBAdapter = require('../../continent-repository-mongodb');
const MySQLAdapter = require('../../continent-repository-mysql');
const PostgreSQLAdapter = require('../../continent-repository-postgresql');

describe('ContinentRepository', () => {
  let repository;
  let mockDBClient;
  let mockAdapter;

  beforeEach(() => {
    jest.clearAllMocks();

    mockDBClient = {
      connect: jest.fn(),
      query: jest.fn(),
    };

    mockAdapter = {
      getItems: jest.fn(),
      getItem: jest.fn(),
      createItem: jest.fn(),
      updateItem: jest.fn(),
      deleteItem: jest.fn(),
    };

    DBFactory.getInstance.mockReturnValue({
      createClient: jest.fn().mockReturnValue(mockDBClient),
    });

    config.development = {
      db: {
        client: DB_CLIENTS.MOCK,
      },
    };

    [MOCKAdapter, MongoDBAdapter, MySQLAdapter, PostgreSQLAdapter]
      .forEach(Adapter => {
        Adapter.mockImplementation(() => mockAdapter);
      });
  });

  describe('Constructor', () => {
    test('devrait initialiser correctement avec MOCK adapter', () => {
      repository = new ContinentRepository();
      expect(repository.dbClient).toBe(mockDBClient);
      expect(repository.adapter).toBeTruthy();
    });

    test('devrait initialiser correctement avec MongoDB adapter', () => {
      config.development.db.client = DB_CLIENTS.MONGODB;
      repository = new ContinentRepository();
      expect(repository.adapter).toBeTruthy();
    });

    test('devrait gérer les erreurs d\'initialisation', () => {
      DBFactory.getInstance.mockImplementation(() => {
        throw new Error('DB Factory Error');
      });
      repository = new ContinentRepository();
      expect(logger.error).toHaveBeenCalledWith(
        'Failed to initialize ContinentRepository:',
        'DB Factory Error',
      );
    });
  });

  describe('Méthodes CRUD', () => {
    beforeEach(() => {
      repository = new ContinentRepository();
    });

    describe('getItems', () => {
      test('devrait retourner les items avec succès', async () => {
        const mockItems = [{ id: 1, name: 'Europe' }, { id: 2, name: 'Asia' }];
        mockAdapter.getItems.mockResolvedValue(mockItems);

        const result = await repository.getItems({});
        expect(result).toEqual(mockItems);
        expect(mockAdapter.getItems).toHaveBeenCalledTimes(1);
      });

      test('devrait gérer l\'absence d\'adapter', async () => {
        repository.adapter = null;
        const result = await repository.getItems({});
        expect(result).toEqual({ error: 'Database connection not initialized' });
      });
    });

    describe('getItem', () => {
      test('devrait retourner un item avec succès', async () => {
        const mockItem = { id: 1, name: 'Europe' };
        mockAdapter.getItem.mockResolvedValue(mockItem);

        const result = await repository.getItem(1);
        expect(result).toEqual(mockItem);
        expect(mockAdapter.getItem).toHaveBeenCalledWith(1);
      });

      test('devrait gérer l\'absence d\'adapter', async () => {
        repository.adapter = null;
        const result = await repository.getItem(1);
        expect(result).toEqual({ error: 'Database connection not initialized' });
      });
    });

    describe('createItem', () => {
      test('devrait créer un item avec succès', async () => {
        const newItem = { name: 'Oceania' };
        const createdItem = { id: 3, name: 'Oceania' };
        mockAdapter.createItem.mockResolvedValue(createdItem);

        const result = await repository.createItem(newItem);
        expect(result).toEqual(createdItem);
        expect(mockAdapter.createItem).toHaveBeenCalledWith(newItem);
      });

      test('devrait gérer l\'absence d\'adapter', async () => {
        repository.adapter = null;
        const result = await repository.createItem({});
        expect(result).toEqual({ error: 'Database connection not initialized' });
      });
    });

    describe('updateItem', () => {
      test('devrait mettre à jour un item avec succès', async () => {
        const updatedItem = { id: 1, name: 'Updated Europe' };
        mockAdapter.updateItem.mockResolvedValue(updatedItem);

        const result = await repository.updateItem(1, updatedItem);
        expect(result).toEqual(updatedItem);
        expect(mockAdapter.updateItem).toHaveBeenCalledWith(1, updatedItem);
      });

      test('devrait gérer l\'absence d\'adapter', async () => {
        repository.adapter = null;
        const result = await repository.updateItem(1, {});
        expect(result).toEqual({ error: 'Database connection not initialized' });
      });
    });

    describe('deleteItem', () => {
      test('devrait supprimer un item avec succès', async () => {
        const deleteResult = { success: true };
        mockAdapter.deleteItem.mockResolvedValue(deleteResult);

        const result = await repository.deleteItem(1);
        expect(result).toEqual(deleteResult);
        expect(mockAdapter.deleteItem).toHaveBeenCalledWith(1);
      });

      test('devrait gérer l\'absence d\'adapter', async () => {
        repository.adapter = null;
        const result = await repository.deleteItem(1);
        expect(result).toEqual({ error: 'Database connection not initialized' });
      });
    });
  });
});

