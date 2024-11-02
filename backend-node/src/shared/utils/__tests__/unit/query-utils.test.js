import { extractTableName, truncate } from '../../query-utils.js';

describe('query-utils', () => {

  describe('extractTableName', () => {
    test('should extract table name from a simple query', () => {
      const query = 'SELECT * FROM continents';
      const tableName = extractTableName(query);
      expect(tableName).toBe('continents');
    });

    test('should extract table name from a query with multiple conditions', () => {
      const query = 'SELECT name, population FROM countries WHERE population > 1000000';
      const tableName = extractTableName(query);
      expect(tableName).toBe('countries');
    });

    test('should handle case insensitivity in the query', () => {
      const query = 'SELECT * FROM Cities';
      const tableName = extractTableName(query);
      expect(tableName).toBe('cities');
    });

    test('should return null if no table name is found', () => {
      const query = 'SELECT name, population';
      const tableName = extractTableName(query);
      expect(tableName).toBeNull();
    });

    test('should return null for an invalid SQL query', () => {
      const query = 'This is not a SQL query';
      const tableName = extractTableName(query);
      expect(tableName).toBeNull();
    });

    test('should handle queries with extra spaces', () => {
      const query = 'SELECT *     FROM    users   ';
      const tableName = extractTableName(query);
      expect(tableName).toBe('users');
    });

    test('should handle complex queries with joins', () => {
      const query = 'SELECT * FROM countries JOIN continents ON countries.continent_id = continents.id';
      const tableName = extractTableName(query);
      expect(tableName).toBe('countries');
    });

    test('should handle subquery in the FROM clause', () => {
      const query = 'SELECT * FROM (SELECT * FROM countries) AS subquery';
      const tableName = extractTableName(query);
      expect(tableName).toBe('countries');
    });

  });

  describe('truncate', () => {
    test('should truncate a string longer than the maxLength', () => {
      const result = truncate('abcdefghijklmnopqrstuvw', 10);
      expect(result).toBe('abcdefghij');
    });

    test('should return the same string if shorter than maxLength', () => {
      const result = truncate('short', 10);
      expect(result).toBe('short');
    });

    test('should handle an empty string', () => {
      const result = truncate('', 10);
      expect(result).toBe('');
    });

    test('should handle null value gracefully', () => {
      const result = truncate(null, 10);
      expect(result).toBeNull();
    });

    test('should handle undefined value gracefully', () => {
      const result = truncate(undefined, 10);
      expect(result).toBeUndefined();
    });

    test('should handle maxLength of zero', () => {
      const result = truncate('abc', 0);
      expect(result).toBe('');
    });

    test('should handle non-string input by returning it as is', () => {
      const result = truncate(12345, 10);
      expect(result).toBe(12345);
    });
  });
});
