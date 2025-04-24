'use strict';

jest.mock('pg');

const request = require('supertest');
const server = require('../../src/server');

afterAll((done) => {
  server.close(done);
});

describe('GET /persons via server.js', () => {
  test('returns 200 and an object with success and a list of 7 persons', async () => {
    // Arrange
    const endpoint = '/persons';

    // Act
    const res = await request(server).get(endpoint);

    // Assert
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('success', true);
    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body.data).toHaveLength(7);
    expect(res.body.data[0]).toHaveProperty('name', 'Christopher Nolan');
  });
});
