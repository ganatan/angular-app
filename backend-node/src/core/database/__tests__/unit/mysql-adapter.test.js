import mysql from 'mysql2/promise';
import MySQLClient from '../../adapters/mysql-adapter';

jest.mock('mysql2/promise', () => ({
  createConnection: jest.fn(() => ({
    execute: jest.fn(),
    end: jest.fn(),
  })),
}));

describe('MySQLClient', () => {
  const mockConfig = {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'test_db',
  };
  let mysqlClientInstance;

  beforeEach(() => {
    jest.clearAllMocks();
    MySQLClient.instance = null;
  });

  test('should create a MySQLClient instance', () => {
    mysqlClientInstance = new MySQLClient(mockConfig);
    expect(mysqlClientInstance).toBeInstanceOf(MySQLClient);
    expect(mysqlClientInstance.config).toEqual(mockConfig);
  });

  test('should return a singleton instance', () => {
    const instance1 = new MySQLClient(mockConfig);
    const instance2 = new MySQLClient(mockConfig);
    expect(instance2).toBe(instance1);
  });

  test('getInstance should create a new instance if it does not exist', () => {
    const instance = MySQLClient.getInstance(mockConfig);
    expect(instance).toBeInstanceOf(MySQLClient);
  });

  test('getInstance should return the existing instance', () => {
    const instance1 = MySQLClient.getInstance(mockConfig);
    const instance2 = MySQLClient.getInstance(mockConfig);
    expect(instance2).toBe(instance1);
  });

  test('should connect to MySQL', async () => {
    mysqlClientInstance = new MySQLClient(mockConfig);
    await mysqlClientInstance.connect();
    expect(mysql.createConnection).toHaveBeenCalledWith(mockConfig);
  });

  test('should execute a query and return rows', async () => {
    const rows = [{ id: 1, name: 'Test' }];
    mysql.createConnection.mockResolvedValueOnce({
      execute: jest.fn().mockResolvedValueOnce([rows]),
      end: jest.fn(),
    });

    mysqlClientInstance = new MySQLClient(mockConfig);
    await mysqlClientInstance.connect();
    const result = await mysqlClientInstance.query('SELECT * FROM test_table', []);

    expect(result).toEqual(rows);
    expect(mysqlClientInstance.client.execute).toHaveBeenCalledWith('SELECT * FROM test_table', []);
  });

  test('should handle query execution error', async () => {
    const error = new Error('Query execution error');
    mysql.createConnection.mockResolvedValueOnce({
      execute: jest.fn().mockRejectedValueOnce(error),
      end: jest.fn(),
    });

    mysqlClientInstance = new MySQLClient(mockConfig);
    await mysqlClientInstance.connect();

    await expect(mysqlClientInstance.query('SELECT * FROM test_table', [])).rejects.toThrow(error);
  });

  test('should close the MySQL connection', async () => {
    const endMock = jest.fn();
    mysql.createConnection.mockResolvedValueOnce({
      execute: jest.fn(),
      end: endMock,
    });

    mysqlClientInstance = new MySQLClient(mockConfig);
    await mysqlClientInstance.connect();
    await mysqlClientInstance.close();

    expect(endMock).toHaveBeenCalled();
  });
});
