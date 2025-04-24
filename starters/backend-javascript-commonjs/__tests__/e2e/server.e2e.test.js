'use strict';

const http = require('http');
const app = require('../../src/app');

let server;

beforeAll((done) => {
  server = http.createServer(app).listen(3000, () => {
    done();
  });
});

afterAll((done) => {
  server.close(done);
});

describe('GET /persons via HTTP', () => {
  test('retourne 200 et un objet JSON avec success et data', (done) => {
    http.get('http://localhost:3000/persons', (res) => {
      expect(res.statusCode).toBe(200);

      let data = '';
      res.on('data', (chunk) => (data += chunk));
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
