'use strict';

const request = require('supertest');
const server = require('../../src/server');

afterAll((done) => {
  server.close(done);
});

describe('GET /persons via server.js', () => {
  test('retourne 200 et un tableau de 7 personnes', async () => {
    // Arrange
    const endpoint = '/persons';

    // Act
    const res = await request(server).get(endpoint);

    // Assert
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body).toHaveLength(7);
    expect(res.body[0]).toHaveProperty('name', 'Christopher Nolan');
  });
});
