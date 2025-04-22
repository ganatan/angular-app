import { getItems } from '../../person.js';

test('getItems renvoie un JSON de 7 personnes', () => {
  // Arrange
  const req = {};
  const res = {
    json: jest.fn(),
  };

  // Act
  getItems(req, res);

  // Assert
  expect(res.json).toHaveBeenCalledTimes(1);
  const [data] = res.json.mock.calls[0];
  expect(Array.isArray(data)).toBe(true);
  expect(data).toHaveLength(7);
  expect(data[0]).toHaveProperty('name', 'Christopher Nolan');
});
