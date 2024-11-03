import PostgreSQLAdapter from '../../continent-repository-postgresql';
import { MAX_INTEGER, MIN_INTEGER, MAX_BIGINT, MIN_BIGINT } from '../../../../shared/constants/data-limits-constants';

jest.mock('../../../../shared/utils/query-utils', () => ({
  truncate: jest.fn((value, length) => value.slice(0, length)),
}));

describe('PostgreSQLAdapter', () => {
  let dbClientMock;
  let adapter;

  beforeEach(() => {
    dbClientMock = { query: jest.fn() };
    adapter = new PostgreSQLAdapter(dbClientMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getItems', () => {
    test('should return data with default filters', async () => {
      const mockResult = [{
        count: 2,
        area: 1000,
        population: 5000,
        countriesNumber: 20,
        density: 5,
        countPagination: 2,
        areaPagination: 1000,
        populationPagination: 5000,
        countriesNumberPagination: 20,
        densityPagination: 5,
        continents: [
          { id: 1, name: 'Europe' },
          { id: 2, name: 'Asia' },
        ],
      }];

      dbClientMock.query.mockResolvedValue(mockResult);

      const req = { query: {} };
      const result = await adapter.getItems(req);

      expect(result).toHaveProperty('paginationTotals');
      expect(result).toHaveProperty('allTotals');
      expect(result).toHaveProperty('continents');
      expect(dbClientMock.query).toHaveBeenCalled();
    });

    test('should handle all filtering parameters', async () => {
      const req = {
        query: {
          name: 'Europe',
          code: 'EU',
          areaMin: '1000',
          areaMax: '2000',
          populationMin: '5000',
          populationMax: '10000',
          countriesNumberMin: '5',
          countriesNumberMax: '10',
          densityMin: '50',
          densityMax: '100',
          page: '2',
          limit: '5',
          sort: '-name',
        },
      };

      const mockResult = [{
        continents: [],
      }];

      dbClientMock.query.mockResolvedValue(mockResult);

      const result = await adapter.getItems(req);
      expect(result).not.toBeNull();
      expect(dbClientMock.query.mock.calls[0][0]).toContain('WHERE 1 = 1');
      expect(dbClientMock.query.mock.calls[0][0]).toContain('ORDER BY');
    });

    test('should handle invalid page and limit values', async () => {
      const req = {
        query: {
          page: '-1',
          limit: '-5',
        },
      };

      const mockResult = [{ continents: [] }];
      dbClientMock.query.mockResolvedValue(mockResult);

      await adapter.getItems(req);
      expect(dbClientMock.query.mock.calls[0][0]).toContain('LIMIT 10 OFFSET 0');
    });
  });

  describe('getItem', () => {
    test('should handle invalid ID type', async () => {
      const result = await adapter.getItem('invalid_id');
      expect(result).toBeNull();
      expect(dbClientMock.query).toHaveBeenCalledWith(expect.any(String), [0]);
    });

    test('should handle ID exceeding length limit', async () => {
      const result = await adapter.getItem('1'.repeat(21));
      expect(result).toBeNull();
      expect(dbClientMock.query).toHaveBeenCalledWith(expect.any(String), [0]);
    });

    test('should handle negative ID values', async () => {
      const result = await adapter.getItem(-1);
      expect(result).toBeNull();
      expect(dbClientMock.query).toHaveBeenCalledWith(expect.any(String), [0]);
    });
  });

  describe('createItem', () => {
    test('should handle boundary numeric values', async () => {
      const continentData = {
        code: 'EU',
        name: 'Europe',
        wikipediaLink: '',
        area: MAX_INTEGER,
        population: MAX_BIGINT,
        countriesNumber: MAX_INTEGER,
      };

      dbClientMock.query.mockResolvedValue({ rowCount: 1 });
      const result = await adapter.createItem(continentData);
      expect(result).not.toBeNull();
    });
  });

  describe('updateItem', () => {
    test('should handle minimum boundary values', async () => {
      const continentData = {
        code: 'EU',
        name: 'Europe',
        wikipediaLink: '',
        area: MIN_INTEGER,
        population: MIN_BIGINT,
        countriesNumber: MIN_INTEGER,
      };

      dbClientMock.query.mockResolvedValue({ rowCount: 1 });
      const result = await adapter.updateItem(1, continentData);
      expect(result).not.toBeNull();
    });
  });

  describe('deleteItem', () => {
    test('should handle successful deletion', async () => {
      dbClientMock.query.mockResolvedValue({ rowCount: 1 });
      const result = await adapter.deleteItem(1);
      expect(result.rowCount).toBe(1);
    });
  });

  describe('addFilterCondition', () => {
    test('should properly add ILIKE condition', () => {
      const params = [];
      const result = adapter.addFilterCondition('WHERE 1 = 1', params, 'name', 'test', true);
      expect(result).toContain('ILIKE');
      expect(params).toContain('%test%');
    });

    test('should handle empty filter values', () => {
      const params = [];
      const result = adapter.addFilterCondition('WHERE 1 = 1', params, 'name', '', true);
      expect(result).toBe('WHERE 1 = 1');
      expect(params).toHaveLength(0);
    });
  });

  describe('addRangeCondition', () => {

    test('should handle invalid range values', () => {
      const params = [];
      const result = adapter.addRangeCondition(
        'WHERE 1 = 1',
        params,
        'area',
        'invalid',
        'invalid',
      );
      expect(result).toBe('WHERE 1 = 1');
      expect(params).toHaveLength(0);
    });
  });

  describe('addDensityCondition', () => {
    test('should properly add density conditions', () => {
      const params = [];
      const result = adapter.addDensityCondition('WHERE 1 = 1', params, '1.5', '3.0');
      expect(result).toContain('NULLIF');
      expect(params).toContain(1.5);
      expect(params).toContain(3.0);
    });

    test('should handle null density values', () => {
      const params = [];
      const result = adapter.addDensityCondition('WHERE 1 = 1', params, null, null);
      expect(result).toBe('WHERE 1 = 1');
      expect(params).toHaveLength(0);
    });
  });
});
