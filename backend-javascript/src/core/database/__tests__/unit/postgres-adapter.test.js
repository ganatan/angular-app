import { Pool } from 'pg';
import PostgreSQLClient from '../../adapters/postgres-adapter';

jest.mock('pg', () => {
  const mPool = {
    connect: jest.fn(),
  };

  return { Pool: jest.fn(() => mPool) };
});

describe('PostgreSQLClient', () => {
  let dbClientConfig;
  let poolMock;
  let clientMock;

  beforeEach(() => {
    dbClientConfig = {
      user: 'testuser',
      host: 'localhost',
      database: 'testdb',
      password: 'password',
      port: 5432,
    };

    poolMock = {
      connect: jest.fn(),
    };

    clientMock = {
      query: jest.fn(),
      release: jest.fn(),
    };

    Pool.mockImplementation(() => poolMock);
    poolMock.connect.mockResolvedValue(clientMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
    PostgreSQLClient.instance = null;
  });

  describe('getInstance', () => {
    test('should return a new instance when called for the first time', () => {
      const instance = PostgreSQLClient.getInstance(dbClientConfig);

      expect(instance).toBeInstanceOf(PostgreSQLClient);
      expect(Pool).toHaveBeenCalledWith(dbClientConfig);
    });

    test('should return the same instance on subsequent calls', () => {
      const instance1 = PostgreSQLClient.getInstance(dbClientConfig);
      const instance2 = PostgreSQLClient.getInstance(dbClientConfig);

      expect(instance1).toBe(instance2);
      expect(Pool).toHaveBeenCalledTimes(1);
    });
  });

  describe('constructor', () => {
    test('should not recreate a new instance if one already exists', () => {
      const instance1 = new PostgreSQLClient(dbClientConfig);
      const instance2 = new PostgreSQLClient(dbClientConfig);

      expect(instance1).toBe(instance2);
    });
  });

  describe('connect', () => {
    test('should connect successfully and return true', async () => {
      const instance = PostgreSQLClient.getInstance(dbClientConfig);
      const isConnected = await instance.connect();

      expect(poolMock.connect).toHaveBeenCalled();
      expect(isConnected).toBe(true);
    });

    test('should return false if connection fails', async () => {
      poolMock.connect.mockRejectedValue(new Error('Connection error'));
      const instance = PostgreSQLClient.getInstance(dbClientConfig);
      const isConnected = await instance.connect();

      expect(poolMock.connect).toHaveBeenCalled();
      expect(isConnected).toBe(false);
    });
  });

  describe('query', () => {
    test('should execute a query and return the result rows', async () => {
      clientMock.query.mockResolvedValue({ rows: [{ id: 1, name: 'Africa' }] });
      const instance = PostgreSQLClient.getInstance(dbClientConfig);
      await instance.connect();
      const result = await instance.query('SELECT * FROM continents', []);

      expect(clientMock.query).toHaveBeenCalledWith('SELECT * FROM continents', []);
      expect(result).toEqual([{ id: 1, name: 'Africa' }]);
    });

    test('should return 0 if the query fails', async () => {
      clientMock.query.mockRejectedValue(new Error('Query error'));
      const instance = PostgreSQLClient.getInstance(dbClientConfig);
      await instance.connect();
      const result = await instance.query('SELECT * FROM continents', []);

      expect(clientMock.query).toHaveBeenCalledWith('SELECT * FROM continents', []);
      expect(result).toBe(0);
    });
  });

  describe('close', () => {
    test('should release the client connection', async () => {
      const instance = PostgreSQLClient.getInstance(dbClientConfig);
      await instance.connect();
      await instance.close();

      expect(clientMock.release).toHaveBeenCalled();
    });
  });
});
