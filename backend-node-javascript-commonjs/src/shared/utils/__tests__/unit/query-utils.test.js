'use strict';

const { extractTableName } = require('../../query-utils');

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

});
