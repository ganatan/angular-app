'use strict';

const request = require('supertest');
const server = require('../../server');

afterAll((done) => {
  server.close(done);
});

describe('GET /persons via server.js', () => {
  test('retourne 200 et un tableau de 7 personnes dans un objet success', async () => {
    // Arrange
    const endpoint = '/persons';

    // Act
    const res = await request(server).get(endpoint);

    // Assert
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('success', true);
    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body.data).toHaveLength(4);
    expect(res.body.data[0]).toHaveProperty('name', 'Steven Spielberg');
  });
});
