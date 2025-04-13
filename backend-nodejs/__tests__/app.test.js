import request from 'supertest';
import app from '../src/app.js';

describe('GET /unknown-route', () => {
  it('should return 404 for unknown routes', async () => {
    // Arrange
    const endpoint = '/unknown-route';

    // Act
    const response = await request(app).get(endpoint);

    // Assert
    expect(response.status).toBe(404);
  });
});

describe('GET /', () => {
  it('should return 200 for index route', async () => {
    // Arrange
    const endpoint = '/';

    // Act
    const response = await request(app).get(endpoint);

    // Assert
    expect(response.status).toBe(200);
  });
});
