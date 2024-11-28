'use strict';

const MockAdapter = require('../../continent-repository-mock');

describe('MockAdapter', () => {
  let mockAdapter;

  beforeEach(() => {
    mockAdapter = new MockAdapter();
  });

  describe('getItems', () => {

    test('should handle filtering with zero values', async () => {
      // Arrange
      const body = {
        countriesNumberMin: 0,
        countriesNumberMax: 0,
      };

      // Act
      const result = await mockAdapter.getItems(body);

      // Assert
      expect(result.continents).toBeDefined();
      result.continents.forEach(continent => {
        expect(continent.countriesNumber).toBe(0);
      });
    });

    test('should handle invalid sort field gracefully', async () => {
      // Arrange: Create a condition where sortBy will be undefined
      const req = { query: { sort: '-' } };

      // Act
      const result = await mockAdapter.getItems(req);

      // Assert
      expect(result).toBeDefined();
      expect(result.continents).toBeDefined();
    });

    test('should handle all filtering parameters simultaneously', async () => {
      // Arrange
      const req = {
        query: {
          name: 'a',
          code: 'A',
          areaMin: '1000',
          areaMax: '99999999',
          populationMin: '1000',
          populationMax: '9999999999',
          countriesNumberMin: '0',
          countriesNumberMax: '100',
          densityMin: '0',
          densityMax: '1000',
          page: '1',
          limit: '10',
          sort: '-population',
        },
      };

      // Act
      const result = await mockAdapter.getItems(req);

      // Assert
      expect(result).toBeDefined();
      expect(result.continents).toBeDefined();
      expect(Array.isArray(result.continents)).toBeTruthy();
    });

    test('should handle invalid numeric parameters', async () => {
      // Arrange
      const req = {
        query: {
          areaMin: 'invalid',
          populationMax: 'invalid',
          countriesNumberMin: 'invalid',
          densityMax: 'invalid',
        },
      };

      // Act
      const result = await mockAdapter.getItems(req);

      // Assert
      expect(result).toBeDefined();
      expect(result.continents).toBeDefined();
    });
  });

  describe('calculateTotals', () => {
    test('should handle empty continents array', () => {
      // Arrange
      const emptyArray = [];

      // Act
      const result = mockAdapter.calculateTotals(emptyArray);

      // Assert
      expect(result).toEqual({
        area: 0,
        population: 0,
        countriesNumber: 0,
        density: 0,
      });
    });

    test('should handle continent with zero area for density calculation', () => {
      // Arrange
      const continents = [{
        area: 0,
        population: 1000,
        countriesNumber: 1,
      }];

      // Act
      const result = mockAdapter.calculateTotals(continents);

      // Assert
      expect(result.density).toBe(0);
    });
  });

});
