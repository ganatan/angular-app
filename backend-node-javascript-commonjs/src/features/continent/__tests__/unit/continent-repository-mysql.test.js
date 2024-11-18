'use strict';

const MySQLAdapter = require('../../continent-repository-mysql');

describe('MySQLAdapter', () => {
  let adapter;
  let mockDbClient;

  beforeEach(() => {
    mockDbClient = {
      query: jest.fn(),
    };
    adapter = new MySQLAdapter(mockDbClient);
  });

  describe('getItems', () => {
    test('should retrieve filtered items successfully', async () => {
      // Arrange: Mock the database response
      const req = {
        query: {
          name: 'Asia',
          page: 1,
          limit: 10,
          sort: '-population',
        },
      };
      const mockResult = [
        {
          count: 2,
          area: 44579000,
          population: 4641054775,
          countriesNumber: 49,
          density: 1.04,
          countPagination: 1,
          areaPagination: 44579000,
          populationPagination: 4641054775,
          countriesNumberPagination: 49,
          densityPagination: 1.04,
          continents: [
            {
              id: 1,
              code: 'AS',
              name: 'Asia',
              wikipediaLink: 'Asia',
              area: 44579000,
              population: 4641054775,
              countriesNumber: 49,
              density: 1.04,
            },
          ],
        },
      ];
      mockDbClient.query.mockResolvedValue(mockResult);

      // Act
      const result = await adapter.getItems(req);

      // Assert
      expect(result.paginationTotals.count).toBe(1);
      expect(result.allTotals.area).toBe(44579000);
      expect(result.continents[0].name).toBe('Asia');
    });

  });

  describe('getItem', () => {
    test('should retrieve an item by id successfully', async () => {
      // Arrange
      const mockResult = [{
        id: 1,
        code: 'AS',
        name: 'Asia',
        wikipediaLink: 'Asia',
        area: 44579000,
        population: 4641054775,
        countriesNumber: 49,
        density: 1.04,
      }];
      mockDbClient.query.mockResolvedValue(mockResult);

      // Act
      const result = await adapter.getItem(1);

      // Assert
      expect(result).toEqual(mockResult[0]);
    });

    test('should return null if item not found', async () => {
      // Arrange
      mockDbClient.query.mockResolvedValue([]);

      // Act
      const result = await adapter.getItem(999);

      // Assert
      expect(result).toBeNull();
    });

  });

  describe('createItem', () => {
    test('should create an item successfully', async () => {
      // Arrange
      const newContinent = { code: 'EU', name: 'Europe' };
      const mockResult = { insertId: 1 };
      mockDbClient.query.mockResolvedValue(mockResult);

      // Act
      const result = await adapter.createItem(newContinent);

      // Assert
      expect(result).toEqual(mockResult);
      expect(mockDbClient.query).toHaveBeenCalledWith('INSERT INTO continent (code, name) VALUES (?, ?)', ['EU', 'Europe']);
    });

  });

  describe('updateItem', () => {
    test('should update an item successfully', async () => {
      // Arrange
      const updatedContinent = { code: 'AS', name: 'Updated Asia' };
      const mockResult = { affectedRows: 1 };
      mockDbClient.query.mockResolvedValue(mockResult);

      // Act
      const result = await adapter.updateItem(1, updatedContinent);

      // Assert
      expect(result).toEqual(mockResult);
      expect(mockDbClient.query).toHaveBeenCalledWith('UPDATE continent SET code = ?, name = ? WHERE id = ?', ['AS', 'Updated Asia', 1]);
    });

  });

  describe('deleteItem', () => {
    test('should delete an item successfully', async () => {
      // Arrange
      const mockResult = { affectedRows: 1 };
      mockDbClient.query.mockResolvedValue(mockResult);

      // Act
      const result = await adapter.deleteItem(1);

      // Assert
      expect(result).toEqual(mockResult);
      expect(mockDbClient.query).toHaveBeenCalledWith('DELETE FROM continent WHERE id = ?', [1]);
    });

  });
});
