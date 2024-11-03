import DatabaseService from '../../database-service';
import pg from 'pg';
import config from '../../../../core/config/config';

jest.mock('pg');

describe('DatabaseService', () => {
  let databaseService;
  let clientMock;
  let poolMock;

  beforeEach(() => {
    clientMock = {
      query: jest.fn(),
      release: jest.fn(),
      user: 'postgres',
    };

    poolMock = {
      connect: jest.fn().mockResolvedValue(clientMock),
    };

    pg.Pool.mockImplementation(() => poolMock);

    databaseService = new DatabaseService();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should create database successfully', async () => {
    clientMock.query.mockResolvedValueOnce();

    const result = await databaseService.createDatabase();

    expect(pg.Pool).toHaveBeenCalledWith({
      user: 'postgres',
      host: config[process.env.NODE_ENV || 'development'].db.localhost,
      database: 'postgres',
      password: 'Trustno1',
      port: 5432,
    });
    expect(clientMock.query).toHaveBeenNthCalledWith(1, expect.any(String), ['angular_backend_test']); // closeConnections
    expect(clientMock.query).toHaveBeenNthCalledWith(2, 'DROP DATABASE IF EXISTS angular_backend_test'); // dropOneDatabase
    expect(clientMock.query).toHaveBeenNthCalledWith(3, 'CREATE DATABASE angular_backend_test'); // createOneDatabase
    expect(clientMock.query).toHaveBeenNthCalledWith(4, "ALTER DATABASE angular_backend_test SET DateStyle = 'ISO, DMY'"); // setDatabaseDateStyle
    expect(clientMock.release).toHaveBeenCalled();
    expect(result).toEqual({ message: 'Database creation completed' });
  });

  test('should handle error during database creation', async () => {
    const mockError = new Error('Test error');
    clientMock.query.mockRejectedValueOnce(mockError);

    const result = await databaseService.createDatabase();

    expect(clientMock.release).toHaveBeenCalled();
    expect(result).toEqual({
      message: 'Database creation failed',
      error: mockError.message,
    });
  });

  test('should close active connections', async () => {
    await databaseService.closeConnections(clientMock, 'test_database');

    expect(clientMock.query).toHaveBeenCalledWith(
      `
        SELECT pg_terminate_backend(pg_stat_activity.pid)
        FROM pg_stat_activity
        WHERE pg_stat_activity.datname = $1
          AND pid <> pg_backend_pid();
      `,
      ['test_database'],
    );
  });

  test('should drop a database', async () => {
    await databaseService.dropOneDatabase(clientMock, 'test_database');

    expect(clientMock.query).toHaveBeenCalledWith('DROP DATABASE IF EXISTS test_database');
  });

  test('should create a database', async () => {
    await databaseService.createOneDatabase(clientMock, 'test_database');

    expect(clientMock.query).toHaveBeenCalledWith('CREATE DATABASE test_database');
  });

  test('should set database date style', async () => {
    await databaseService.setDatabaseDateStyle(clientMock, 'test_database');

    expect(clientMock.query).toHaveBeenCalledWith("ALTER DATABASE test_database SET DateStyle = 'ISO, DMY'");
  });
});
