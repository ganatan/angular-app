'use strict';

const PostgreSQLAdapter = require('../../continent-repository-postgresql');

describe('PostgreSQLAdapter', () => {
  let dbClientMock;
  let postgreSQLAdapter;

  beforeEach(() => {
    dbClientMock = {
      query: jest.fn(),
    };
    postgreSQLAdapter = new PostgreSQLAdapter(dbClientMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getItems', () => {

    test('should return formatted result when query is successful', async () => {
      const mockQueryResult = [{
        count: 10,
        area: 10000,
        population: 1000000,
        countriesNumber: 5,
        density: 100,
        countPagination: 2,
        areaPagination: 5000,
        populationPagination: 500000,
        countriesNumberPagination: 2,
        densityPagination: 50,
        continents: [{ id: 1, name: 'Africa' }, { id: 2, name: 'Europe' }],
      }];
      dbClientMock.query.mockResolvedValue(mockQueryResult);

      const req = {
        query: { name: 'Africa', page: 1, limit: 10, sort: 'name' },
      };

      let result = await postgreSQLAdapter.getItems(req);

      expect(dbClientMock.query).toHaveBeenCalled();
      expect(result).toEqual({
        paginationTotals: {
          count: 2,
          area: 5000,
          population: 500000,
          countriesNumber: 2,
          density: 50,
        },
        allTotals: {
          count: 10,
          area: 10000,
          population: 1000000,
          countriesNumber: 5,
          density: 100,
        },
        continents: [{ id: 1, name: 'Africa' }, { id: 2, name: 'Europe' }],
      });

      const reqSortDesc = {
        query: { name: 'Africa', page: 1, limit: 10, sort: '-name' },
      };

      result = await postgreSQLAdapter.getItems(reqSortDesc);

      expect(dbClientMock.query).toHaveBeenCalled();
      expect(result).toEqual({
        paginationTotals: {
          count: 2,
          area: 5000,
          population: 500000,
          countriesNumber: 2,
          density: 50,
        },
        allTotals: {
          count: 10,
          area: 10000,
          population: 1000000,
          countriesNumber: 5,
          density: 100,
        },
        continents: [{ id: 1, name: 'Africa' }, { id: 2, name: 'Europe' }],
      });

    });

  });

});
