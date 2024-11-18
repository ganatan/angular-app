'use strict';

const MockClient = require('../../adapters/mock-adapter');
const { getMockData } = require('../../mock-data-loader');
const { extractTableName } = require('../../../../shared/utils/query-utils');

jest.mock('../../mock-data-loader', () => ({
  getMockData: jest.fn(),
}));
jest.mock('../../../../shared/utils/query-utils', () => ({
  extractTableName: jest.fn(),
}));

describe('MockClient', () => {
  let mockConfig;
  let mockClient;

  beforeEach(() => {
    mockConfig = { host: 'localhost', database: 'mock_db' };
    MockClient.instance = null;
    mockClient = new MockClient(mockConfig);
    jest.clearAllMocks();
  });

  test('should create a singleton instance of MockClient', () => {
    const newMockClient = new MockClient(mockConfig);
    expect(newMockClient).toBe(mockClient);
  });

  test('getInstance should create a new instance if none exists', () => {
    MockClient.instance = null;
    const instance = MockClient.getInstance(mockConfig);
    expect(instance).toBeInstanceOf(MockClient);
  });

  test('getInstance should return the existing instance', () => {
    const instance1 = MockClient.getInstance(mockConfig);
    const instance2 = MockClient.getInstance(mockConfig);
    expect(instance2).toBe(instance1);
  });

  describe('connect', () => {
    test('should connect successfully and log a message', async () => {
      const logSpy = jest.spyOn(console, 'log').mockImplementation(() => { });
      const isConnected = await mockClient.connect();

      expect(isConnected).toBe(true);
      expect(logSpy).toHaveBeenCalledWith('MockClient connected successfully');

      logSpy.mockRestore();
    });
  });

  describe('query', () => {
    test('should return a count result when query contains COUNT', async () => {
      extractTableName.mockReturnValue('test_table');
      getMockData.mockReturnValue([{ id: 1 }, { id: 2 }]);

      const result = await mockClient.query('SELECT COUNT(*) FROM test_table', []);

      expect(extractTableName).toHaveBeenCalledWith('SELECT COUNT(*) FROM test_table');
      expect(getMockData).toHaveBeenCalledWith('test_table');
      expect(result).toEqual([{ count: 2 }]);
    });

    test('should return filtered data for specific id when query contains WHERE id =', async () => {
      extractTableName.mockReturnValue('test_table');
      getMockData.mockReturnValue([{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }]);

      const result = await mockClient.query('SELECT * FROM test_table WHERE id = $1', [1]);

      expect(extractTableName).toHaveBeenCalledWith('SELECT * FROM test_table WHERE id = $1');
      expect(getMockData).toHaveBeenCalledWith('test_table');
      expect(result).toEqual([{ id: 1, name: 'Item 1' }]);
    });

    test('should return an empty array when no data matches WHERE id =', async () => {
      extractTableName.mockReturnValue('test_table');
      getMockData.mockReturnValue([{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }]);

      const result = await mockClient.query('SELECT * FROM test_table WHERE id = $1', [3]);

      expect(extractTableName).toHaveBeenCalledWith('SELECT * FROM test_table WHERE id = $1');
      expect(getMockData).toHaveBeenCalledWith('test_table');
      expect(result).toEqual([]);
    });

    test('should return all mock data when query contains SELECT without WHERE clause', async () => {
      extractTableName.mockReturnValue('test_table');
      getMockData.mockReturnValue([{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }]);

      const result = await mockClient.query('SELECT * FROM test_table', []);

      expect(extractTableName).toHaveBeenCalledWith('SELECT * FROM test_table');
      expect(getMockData).toHaveBeenCalledWith('test_table');
      expect(result).toEqual([{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }]);
    });

    test('should return an empty array when query does not match known patterns', async () => {
      extractTableName.mockReturnValue('test_table');
      getMockData.mockReturnValue([{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }]);

      const result = await mockClient.query('DELETE FROM test_table', []);

      expect(result).toEqual([]);
    });
  });

  describe('close', () => {
    test('should close the connection and log a message', async () => {
      const logSpy = jest.spyOn(console, 'log').mockImplementation(() => { });

      await mockClient.connect();
      await mockClient.close();

      expect(mockClient.client).toBe(null);
      expect(logSpy).toHaveBeenCalledWith('MockClient connection closed');

      logSpy.mockRestore();
    });
  });
});
