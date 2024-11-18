'use strict';

const request = require('supertest');
const config = require('../../src/core/config/config');

describe('Index Routes', () => {
  let app;

  beforeEach(() => {
    jest.resetModules();
  });

  test('GET / should return list of API endpoints (NODE_ENV not set)', async () => {
    // Arrange
    delete process.env.NODE_ENV;
    const ENV = process.env.NODE_ENV || 'development';
    const currentConfig = config[ENV];
    const host = currentConfig.host;
    const port = currentConfig.port;
    const url = `http://${host}:${port}`;
    app = require('../../src/app');

    // Act
    const res = await request(app).get('/');

    // Assert
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('databaseType');
    expect(res.body.databaseType).toBe(currentConfig.db.client);
    expect(res.body).toHaveProperty('apis');
    expect(res.body.apis).toBeInstanceOf(Array);
    expect(res.body.apis[0]).toBeInstanceOf(Array);
    expect(res.body.apis[0]).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ url: `${url}/continents`, description: 'API to retrieve continents', methods: ['GET'] }),
        expect.objectContaining({ url: `${url}/continents/:id`, description: 'API to retrieve, update or delete a specific continent', methods: ['GET', 'POST', 'PUT', 'DELETE'] }),
      ]),
    );

    const expectedApis = [
      { url: `${url}/countries`, description: 'API to retrieve countries', methods: ['GET'] },
      { url: `${url}/cities`, description: 'API to retrieve countries', methods: ['GET'] },
      { url: `${url}/persons`, description: 'API to retrieve countries', methods: ['GET'] },
      { url: `${url}/setup`, description: 'API to retrieve countries', methods: ['GET'] },
    ];

    expectedApis.forEach(expectedApi => {
      expect(res.body.apis).toEqual(expect.arrayContaining([
        expect.objectContaining(expectedApi),
      ]));
    });
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
