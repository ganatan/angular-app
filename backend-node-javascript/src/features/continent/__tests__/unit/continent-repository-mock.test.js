import MockAdapter from '../../../continent/continent-repository-mock.js';

describe('MockAdapter', () => {
  let mockAdapter;

  beforeEach(() => {
    mockAdapter = new MockAdapter();
  });

  describe('getItems', () => {

    test('should sort continents by name in ascending order', async () => {
      // Arrange
      const req = { query: { sort: 'name' } };

      // Act
      const result = await mockAdapter.getItems(req);

      // Assert
      const names = result.continents.map(cont => cont.name);
      expect(names).toEqual([...names].sort());
    });

    test('should calculate correct totals', async () => {
      // Arrange
      const req = { query: {} };

      // Act
      const result = await mockAdapter.getItems(req);

      // Assert
      expect(result.allTotals).toHaveProperty('area');
      expect(result.allTotals).toHaveProperty('population');
      expect(result.allTotals).toHaveProperty('countriesNumber');
      expect(result.allTotals).toHaveProperty('density');
    });
  });

  describe('getItem', () => {

    test('should return null if continent ID is not found', async () => {
      // Act
      const result = await mockAdapter.getItem(9999);

      // Assert
      expect(result).toBeNull();
    });
  });

  describe('updateItem', () => {

    test('should return null if continent ID to update is not found', async () => {
      // Act
      const result = await mockAdapter.updateItem(9999, { name: 'NotFound' });

      // Assert
      expect(result).toBeNull();
    });
  });

  describe('deleteItem', () => {
    test('should return null if continent ID to delete is not found', async () => {
      // Act
      const result = await mockAdapter.deleteItem(9999);

      // Assert
      expect(result).toBeNull();
    });
  });
});
