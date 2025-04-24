'use strict';

// Mock Sequelize
jest.mock('sequelize', () => {
  const mockFindAll = jest.fn().mockResolvedValue([
    { id: 1, name: 'Christopher Nolan' },
    { id: 2, name: 'Quentin Tarantino' },
    { id: 3, name: 'Steven Spielberg' },
    { id: 4, name: 'Martin Scorsese' },
    { id: 5, name: 'James Cameron' },
    { id: 6, name: 'Ridley Scott' },
    { id: 7, name: 'Denis Villeneuve' },
  ]);

  const mockDefine = jest.fn(() => ({
    findAll: mockFindAll,
  }));

  return {
    Sequelize: jest.fn(() => ({
      define: mockDefine,
    })),
    DataTypes: {
      INTEGER: 'INTEGER',
      STRING: 'STRING',
    },
  };
});

const getItems = require('../../person.controller');

test('getItems returns success with 7 persons', async () => {
  // Arrange
  const req = {};
  const res = {
    json: jest.fn(),
    status: jest.fn().mockReturnThis(),
  };

  // Act
  await getItems(req, res);

  // Assert
  expect(res.json).toHaveBeenCalledTimes(1);
  const [jsonResponse] = res.json.mock.calls[0];

  expect(jsonResponse).toHaveProperty('success', true);
  expect(Array.isArray(jsonResponse.data)).toBe(true);
  expect(jsonResponse.data).toHaveLength(7);
  expect(jsonResponse.data[0]).toHaveProperty('name', 'Christopher Nolan');
});
