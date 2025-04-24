'use strict';

jest.mock('pg', () => {
  const mClient = {
    query: jest.fn().mockResolvedValue({
      rows: [
        { id: 1, name: 'Christopher Nolan' },
        { id: 2, name: 'Quentin Tarantino' },
        { id: 3, name: 'Steven Spielberg' },
        { id: 4, name: 'Martin Scorsese' },
        { id: 5, name: 'James Cameron' },
        { id: 6, name: 'Ridley Scott' },
        { id: 7, name: 'Denis Villeneuve' },
      ],
    }),
  };

  return { Pool: jest.fn(() => mClient) };
});

const getItems = require('../../person.controller');

test('getItems returns an object with success and an array of 7 persons', async () => {
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
