'use strict';

const http = require('http');
const app = require('../../app');

jest.mock('../../modules/person/mocks/person.mock-data', () => {
  return require('../../__tests__/mocks/person.mock-data.large');
});

let server;

beforeAll((done) => {
  server = http.createServer(app).listen(3000, done);
});

afterAll((done) => {
  server.close(done);
});

describe('GET /persons via HTTP', () => {
  test('should return 200 and valid JSON payload', (done) => {
    // Arrange
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: '/persons',
      method: 'GET',
    };

    // Act
    const req = http.request(options, (res) => {
      let responseData = '';

      res.setEncoding('utf8');
      res.on('data', (chunk) => {
        responseData += chunk;
      });

      res.on('end', () => {
        // Assert
        expect(res.statusCode).toBe(200);

        const json = JSON.parse(responseData);

        expect(json).toHaveProperty('success', true);
        expect(Array.isArray(json.data)).toBe(true);
        expect(json.data.length).toBeGreaterThan(100);
        expect(json.data[0]).toHaveProperty('name');

        done();
      });
    });

    req.on('error', (error) => {
      done(error);
    });

    req.end();
  });
});
