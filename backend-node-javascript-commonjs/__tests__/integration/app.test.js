'use strict';

const request = require('supertest');
const config = require('../../src/core/config/config');

describe('Express application routes', () => {
  let app;

  beforeEach(() => {
    jest.resetModules();
  });

  const testEnvironments = ['test', 'development', 'production'];

  testEnvironments.forEach(env => {
    test(`GET / should return a list of APIs in ${env} environment`, async () => {
      // Arrange
      process.env.NODE_ENV = env;
      const currentConfig = config[env];
      const host = currentConfig.host;
      const port = currentConfig.port;
      const url = `http://${host}:${port}`;
      app = require('../../src/app');

      // Act
      const response = await request(app).get('/');

      // Assert
      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty('databaseType');
      // expect(response.body.databaseType).toBe('pg');
      expect(response.body).toHaveProperty('apis');
      expect(response.body.apis).toBeInstanceOf(Array);

      expect(response.body.apis[0]).toBeInstanceOf(Array);
      expect(response.body.apis[0]).toEqual(
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
        expect(response.body.apis).toEqual(expect.arrayContaining([
          expect.objectContaining(expectedApi),
        ]));
      });
    });
  });
});
