'use strict';

const request = require('supertest');
const app = require('../../src/app');

describe('API /persons', () => {
  test('GET /persons returns 200 and an array of 7 people', async () => {
    // Arrange
    const endpoint = '/persons';

    // Act
    const res = await request(app).get(endpoint);

    // Assert
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('success', true);
    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body.data).toHaveLength(7);
    expect(res.body.data[0]).toHaveProperty('name', 'Christopher Nolan');
  });
});

describe('API / (fallback)', () => {
  test('GET / returns API version info', async () => {
    // Arrange
    const endpoint = '/';

    // Act
    const res = await request(app).get(endpoint);

    // Assert
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('success', true);
    expect(res.body.data).toHaveProperty('app', 'backend-javascript-commonjs');
    expect(res.body.data).toHaveProperty('version', '1.0.0');
    expect(res.body.data).toHaveProperty('status', 'ok');
  });
});
