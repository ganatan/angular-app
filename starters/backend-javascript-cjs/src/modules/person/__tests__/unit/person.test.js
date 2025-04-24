'use strict';

const getItems = require('../../person.controller');

test('getItems returns an object with success and an array of 7 persons', () => {
  // Arrange
  const req = {};
  const res = {
    json: jest.fn(),
  };

  // Act
  getItems(req, res);

  // Assert
  expect(res.json).toHaveBeenCalledTimes(1);
  const [jsonResponse] = res.json.mock.calls[0];

  expect(jsonResponse).toHaveProperty('success', true);
  expect(Array.isArray(jsonResponse.data)).toBe(true);
  expect(jsonResponse.data).toHaveLength(7);
  expect(jsonResponse.data[0]).toHaveProperty('name', 'Christopher Nolan');
});
