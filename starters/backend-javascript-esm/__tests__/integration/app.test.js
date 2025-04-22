import request from 'supertest';
import app from '../../src/app.js';

describe('GET /persons', () => {
  test('should return a list of 7 famous directors', async () => {
    // Arrange
    const expectedLength = 7;

    // Act
    const response = await request(app).get('/persons');

    // Assert
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body).toHaveLength(expectedLength);
    expect(response.body[0]).toHaveProperty('id');
    expect(response.body[0]).toHaveProperty('name');
  });
});
