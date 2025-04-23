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

const http = require('http');
const app = require('../../src/app');

let server;

beforeAll((done) => {
  server = http.createServer(app).listen(3000, done);
});

afterAll((done) => {
  server.close(done);
});

describe('GET /persons via HTTP', () => {
  test('returns 200 and JSON with success and 7 persons', (done) => {
    http.get('http://localhost:3000/persons', (res) => {
      expect(res.statusCode).toBe(200);

      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const json = JSON.parse(data);

        expect(json).toHaveProperty('success', true);
        expect(Array.isArray(json.data)).toBe(true);
        expect(json.data).toHaveLength(7);
        expect(json.data[0]).toHaveProperty('name', 'Christopher Nolan');

        done();
      });
    });
  });
});
