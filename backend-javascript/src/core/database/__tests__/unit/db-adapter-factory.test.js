import DBAdapterFactory from '../../db-adapter-factory';

describe('DBAdapterFactory', () => {
  let dbClientsMock;
  let configMock;

  beforeEach(() => {
    // Arrange: Set up mock clients and config
    dbClientsMock = {
      postgres: {
        getInstance: jest.fn().mockReturnValue({ client: 'postgres' }),
      },
      mysql: class MySQLClient {
        constructor(config) {
          this.config = config;
        }
      },
      mock: {
        getInstance: jest.fn().mockReturnValue({ client: 'mock' }),
      },
    };
    configMock = {
      db: {
        client: 'postgres',
      },
    };
    DBAdapterFactory.instance = null; // Reset singleton instance before each test
  });

  test('should return a single (singleton) instance of DBAdapterFactory', () => {
    // Act: Create two instances
    const factory1 = DBAdapterFactory.getInstance(dbClientsMock);
    const factory2 = DBAdapterFactory.getInstance(dbClientsMock);

    // Assert: Verify that both instances are the same
    expect(factory1).toBe(factory2);
    expect(factory1).toBeInstanceOf(DBAdapterFactory);
  });

  test('should instantiate a client without getInstance method', () => {
    // Arrange: Change the config to use MySQL
    configMock.db.client = 'mysql';

    // Act: Create two factory instances
    const factory1 = new DBAdapterFactory(dbClientsMock);
    const factory2 = new DBAdapterFactory(dbClientsMock);

    // Assert: Verify that the same instance is returned (singleton behavior)
    expect(factory1).toBe(factory2);
  });

  test('should create a database client specified in config (e.g., postgres)', () => {
    // Act: Get the factory instance and create a client
    const factory = DBAdapterFactory.getInstance(dbClientsMock);
    const client = factory.createClient(configMock);

    // Assert: Verify that the correct client is created and the mock is called with the right config
    expect(client).toEqual({ client: 'postgres' });
    expect(dbClientsMock.postgres.getInstance).toHaveBeenCalledWith(configMock.db);
  });

  test('should use MockClient as fallback for unsupported client', () => {
    // Arrange: Change the config to use an unsupported client
    configMock.db.client = 'unsupported';

    // Act: Get the factory instance and create a client
    const factory = DBAdapterFactory.getInstance(dbClientsMock);
    const client = factory.createClient(configMock);

    // Assert: Verify that the mock client is used as a fallback
    expect(client).toEqual({ client: 'mock' });
    expect(dbClientsMock.mock.getInstance).toHaveBeenCalledWith(configMock.db);
  });

  test('should instantiate a client without getInstance method and use constructor', () => {
    // Arrange: Change the config to use MySQL
    configMock.db.client = 'mysql';

    // Act: Get the factory instance and create a client
    const factory = DBAdapterFactory.getInstance(dbClientsMock);
    const client = factory.createClient(configMock);

    // Assert: Verify that the MySQL client is instantiated and the configuration is passed correctly
    expect(client).toBeInstanceOf(dbClientsMock.mysql);
    expect(client.config).toEqual(configMock.db);
  });
});
