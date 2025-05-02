'use strict';

const request = require('supertest');
const app = require('../../app');

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
    expect(res.body.data).toHaveLength(4);
    expect(res.body.data[0]).toHaveProperty('name', 'Steven Spielberg');
  });
});

describe('API / (fallback)', () => {
  let originalEnv;

  beforeEach(() => {
    // Arrange
    originalEnv = process.env.NODE_ENV;
  });

  afterEach(() => {
    // Cleanup
    process.env.NODE_ENV = originalEnv;
  });

  test('GET / returns API version info when NODE_ENV is test', async () => {
    // Arrange
    process.env.NODE_ENV = 'test';
    const endpoint = '/';

    // Act
    const res = await request(app).get(endpoint);

    // Assert
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('success', true);
    expect(res.body.data).toHaveProperty('app', 'backend-javascript-cjs');
    expect(res.body.data).toHaveProperty('version', '1.1.1');
    expect(res.body.data).toHaveProperty('status', 'ok');
    expect(res.body.data).toHaveProperty('env', 'test');
  });

  test('GET / returns API version info when NODE_ENV is undefined', async () => {
    // Arrange
    delete process.env.NODE_ENV;
    const endpoint = '/';

    // Act
    const res = await request(app).get(endpoint);

    // Assert
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('success', true);
    expect(res.body.data).toHaveProperty('app', 'backend-javascript-cjs');
    expect(res.body.data).toHaveProperty('version', '1.1.1');
    expect(res.body.data).toHaveProperty('status', 'ok');
    expect(res.body.data).toHaveProperty('env', 'development');
  });

  test('GET / returns API version info when NODE_ENV is production', async () => {
    // Arrange
    process.env.NODE_ENV = 'production';
    const endpoint = '/';

    // Act
    const res = await request(app).get(endpoint);

    // Assert
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('success', true);
    expect(res.body.data).toHaveProperty('app', 'backend-javascript-cjs');
    expect(res.body.data).toHaveProperty('version', '1.1.1');
    expect(res.body.data).toHaveProperty('status', 'ok');
    expect(res.body.data).toHaveProperty('env', 'production');
  });
});
