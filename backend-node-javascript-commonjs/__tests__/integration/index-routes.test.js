'use strict';

const request = require('supertest');
// const config = require('../../src/core/config/config');

describe('Index Routes', () => {
  let app;

  beforeEach(() => {
    jest.resetModules();
  });

  test('GET /random-url should return 404 with error message', async () => {
    // Arrange
    app = require('../../src/app');

    // Act
    const res = await request(app).get('/random-url');

    // Assert
    expect(res.statusCode).toBe(404);
    expect(res.body).toHaveProperty('status', 'error');
    expect(res.body).toHaveProperty('message', 'Resource not found');
    expect(res.body).toHaveProperty('url', '/random-url');
    expect(res.body).toHaveProperty('errorCode', 404);
  });

});
