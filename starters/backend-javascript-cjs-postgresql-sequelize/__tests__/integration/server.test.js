'use strict';

// Mock Sequelize
jest.mock('sequelize', () => {
  const mockFindAll = jest.fn().mockResolvedValue([
    { id: 1, name: 'Christopher Nolan' },
    { id: 2, name: 'Quentin Tarantino' },
    { id: 3, name: 'Steven Spielberg' },
    { id: 4, name: 'Martin Scorsese' },
    { id: 5, name: 'James Cameron' },
    { id: 6, name: 'Ridley Scott' },
    { id: 7, name: 'Denis Villeneuve' },
  ]);

  const mockDefine = jest.fn(() => ({
    findAll: mockFindAll,
  }));

  return {
    Sequelize: jest.fn(() => ({
      define: mockDefine,
    })),
    DataTypes: {
      INTEGER: 'INTEGER',
      STRING: 'STRING',
    },
  };
});

const request = require('supertest');
const server = require('../../src/server');

afterAll((done) => {
  server.close(done);
});

describe('GET /persons via server.js', () => {
  test('returns 200 and an object with success and a list of 7 persons', async () => {
    const endpoint = '/persons';

    const res = await request(server).get(endpoint);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('success', true);
    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body.data).toHaveLength(7);
    expect(res.body.data[0]).toHaveProperty('name', 'Christopher Nolan');
  });
});
