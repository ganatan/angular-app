import request from 'supertest';
import app from '../../src/app.js';

describe('API /persons', () => {
  test('GET /persons retourne 200 et un tableau de 7 personnes', async () => {
    // Arrange
    const endpoint = '/persons';

    // Act
    const res = await request(app).get(endpoint);

    // Assert
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body).toHaveLength(7);
    expect(res.body[0]).toHaveProperty('name', 'Christopher Nolan');
  });
});

describe('API / (fallback)', () => {
  test('GET / retourne les infos de version de l\'API', async () => {
    // Arrange
    const endpoint = '/';

    // Act
    const res = await request(app).get(endpoint);

    // Assert
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('success', true);
    expect(res.body.data).toHaveProperty('app', 'backend-javascript-esm');
    expect(res.body.data).toHaveProperty('version', '1.0.0');
    expect(res.body.data).toHaveProperty('status', 'ok');
  });
});
