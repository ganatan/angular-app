
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
const app = require('../../src/app');

describe('API /persons', () => {
  test('GET /persons returns 200 and a list of 7 persons', async () => {
    const res = await request(app).get('/persons');

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('success', true);
    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body.data).toHaveLength(7);
    expect(res.body.data[0]).toHaveProperty('name', 'Christopher Nolan');
  });
});

describe('API / (fallback)', () => {
  test('GET / returns version info of the API', async () => {
    const res = await request(app).get('/');

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('success', true);
    expect(res.body.data).toHaveProperty('app', 'backend-javascript-commonjs');
    expect(res.body.data).toHaveProperty('version', '1.0.0');
    expect(res.body.data).toHaveProperty('status', 'ok');
  });
});
