import ContinentRepository from '../../continent-repository';
import DBFactory from '../../../../core/database/db-adapter-factory';
import DB_CLIENTS from '../../../../core/database/db-clients';
import config from '../../../../core/config/config';
import MOCKAdapter from '../../continent-repository-mock';
import MongoDBAdapter from '../../continent-repository-mongodb';
import MySQLAdapter from '../../continent-repository-mysql';
import PostgreSQLAdapter from '../../continent-repository-postgresql';
import logger from '../../../../infrastructure/logger/logger';

jest.mock('../../../../core/database/db-adapter-factory');
jest.mock('../../continent-repository-mock');
jest.mock('../../continent-repository-mongodb');
jest.mock('../../continent-repository-mysql');
jest.mock('../../continent-repository-postgresql');
jest.mock('../../../../infrastructure/logger/logger');

describe('ContinentRepository', () => {
  let dbFactoryMock;
  let dbConfig;

  beforeEach(() => {
    dbConfig = config[process.env.NODE_ENV || 'development'];
    dbFactoryMock = {
      createClient: jest.fn(),
    };
    DBFactory.getInstance.mockReturnValue(dbFactoryMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should initialize with MOCKAdapter when db type is MOCK', () => {
    dbConfig.db = { client: DB_CLIENTS.MOCK };
    dbFactoryMock.createClient.mockReturnValue({});

    const repository = new ContinentRepository();

    expect(repository.adapter).toBeInstanceOf(MOCKAdapter);
    expect(MOCKAdapter).toHaveBeenCalledWith(dbFactoryMock.createClient.mock.results[0].value);
  });

  test('should initialize with MongoDBAdapter when db type is MONGODB', () => {
    dbConfig.db = { client: DB_CLIENTS.MONGODB };
    dbFactoryMock.createClient.mockReturnValue({});

    const repository = new ContinentRepository();

    expect(repository.adapter).toBeInstanceOf(MongoDBAdapter);
    expect(MongoDBAdapter).toHaveBeenCalledWith(dbFactoryMock.createClient.mock.results[0].value);
  });

  test('should initialize with MySQLAdapter when db type is MYSQL', () => {
    dbConfig.db = { client: DB_CLIENTS.MYSQL };
    dbFactoryMock.createClient.mockReturnValue({});

    const repository = new ContinentRepository();

    expect(repository.adapter).toBeInstanceOf(MySQLAdapter);
    expect(MySQLAdapter).toHaveBeenCalledWith(dbFactoryMock.createClient.mock.results[0].value);
  });

  test('should initialize with PostgreSQLAdapter when db type is PG', () => {
    dbConfig.db = { client: DB_CLIENTS.PG };
    dbFactoryMock.createClient.mockReturnValue({});

    const repository = new ContinentRepository();

    expect(repository.adapter).toBeInstanceOf(PostgreSQLAdapter);
    expect(PostgreSQLAdapter).toHaveBeenCalledWith(dbFactoryMock.createClient.mock.results[0].value);
  });

  test('should log error for unsupported database type', () => {
    dbConfig.db = { client: 'UNSUPPORTED_DB' };
    dbFactoryMock.createClient.mockReturnValue({});

    const repository = new ContinentRepository();

    expect(logger.error).toHaveBeenCalledWith('Unsupported database type: UNSUPPORTED_DB');
    expect(repository.adapter).toBeNull();
  });

  test('should return error if adapter is not initialized', async () => {
    const repository = new ContinentRepository();
    repository.adapter = null;

    const result = await repository.getItems();

    expect(result).toEqual({ error: 'Database connection not initialized' });
  });

  test('should call getItems on adapter if initialized', async () => {
    const mockAdapter = { getItems: jest.fn().mockResolvedValue('mocked result') };
    const repository = new ContinentRepository();
    repository.adapter = mockAdapter;

    const result = await repository.getItems();

    expect(mockAdapter.getItems).toHaveBeenCalled();
    expect(result).toBe('mocked result');
  });

  test('should call getItem on adapter if initialized', async () => {
    const mockAdapter = { getItem: jest.fn().mockResolvedValue('mocked result') };
    const repository = new ContinentRepository();
    repository.adapter = mockAdapter;

    const result = await repository.getItem(1);

    expect(mockAdapter.getItem).toHaveBeenCalledWith(1);
    expect(result).toBe('mocked result');
  });

  test('should call createItem on adapter if initialized', async () => {
    const mockAdapter = { createItem: jest.fn().mockResolvedValue('mocked result') };
    const repository = new ContinentRepository();
    repository.adapter = mockAdapter;

    const result = await repository.createItem({ name: 'Europe' });

    expect(mockAdapter.createItem).toHaveBeenCalledWith({ name: 'Europe' });
    expect(result).toBe('mocked result');
  });

  test('should call updateItem on adapter if initialized', async () => {
    const mockAdapter = { updateItem: jest.fn().mockResolvedValue('mocked result') };
    const repository = new ContinentRepository();
    repository.adapter = mockAdapter;

    const result = await repository.updateItem(1, { name: 'Updated Europe' });

    expect(mockAdapter.updateItem).toHaveBeenCalledWith(1, { name: 'Updated Europe' });
    expect(result).toBe('mocked result');
  });

  test('should call deleteItem on adapter if initialized', async () => {
    const mockAdapter = { deleteItem: jest.fn().mockResolvedValue('mocked result') };
    const repository = new ContinentRepository();
    repository.adapter = mockAdapter;

    const result = await repository.deleteItem(1);

    expect(mockAdapter.deleteItem).toHaveBeenCalledWith(1);
    expect(result).toBe('mocked result');
  });
});
