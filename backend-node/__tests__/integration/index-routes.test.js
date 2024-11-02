import request from 'supertest';
import express from 'express';

describe('Index API Routes', () => {
  let app;

  beforeEach(async () => {
    delete process.env.NODE_ENV;
    const { default: index } = await import('../../src/index-routes.js');
    app = express();
    app.use('/', index);
  });

  describe('Root Route - Retrieve All API Endpoints', () => {
    test('should return a list of all API endpoints with details', async () => {
      // Act
      const res = await request(app).get('/');

      // Assert
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('databaseType');
      expect(res.body).toHaveProperty('apis');
      expect(Array.isArray(res.body.apis)).toBe(true);

      const [continentsApi, countriesApi, citiesApi, personsApi, setupApi] = res.body.apis;

      expect(continentsApi).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            url: expect.stringContaining('/continents'),
            description: 'API to retrieve continents',
            methods: expect.arrayContaining(['GET']),
          }),
          expect.objectContaining({
            url: expect.stringContaining('/continents/:id'),
            description: 'API to retrieve, update or delete a specific continent',
            methods: expect.arrayContaining(['GET', 'POST', 'PUT', 'DELETE']),
          }),
        ]),
      );

      expect(countriesApi).toEqual(
        expect.objectContaining({
          url: expect.stringContaining('/countries'),
          description: 'API to retrieve countries',
          methods: expect.arrayContaining(['GET']),
        }),
      );

      expect(citiesApi).toEqual(
        expect.objectContaining({
          url: expect.stringContaining('/cities'),
          description: 'API to retrieve cities',
          methods: expect.arrayContaining(['GET']),
        }),
      );

      expect(personsApi).toEqual(
        expect.objectContaining({
          url: expect.stringContaining('/persons'),
          description: 'API to retrieve persons',
          methods: expect.arrayContaining(['GET']),
        }),
      );

      expect(setupApi).toEqual(
        expect.objectContaining({
          url: expect.stringContaining('/setup'),
          description: 'API to retrieve setup information',
          methods: expect.arrayContaining(['GET']),
        }),
      );
    });
  });

  describe('Error Handling - 404 for Non-Existing Routes', () => {
    test('should return 404 and error message for non-existing route', async () => {
      // Arrange
      const nonExistentRoute = '/non-existent';

      // Act
      const res = await request(app).get(nonExistentRoute);

      // Assert
      expect(res.status).toBe(404);
      expect(res.body).toHaveProperty('status', 'error');
      expect(res.body).toHaveProperty('message', 'Resource not found');
      expect(res.body).toHaveProperty('url', nonExistentRoute);
      expect(res.body).toHaveProperty('errorCode', 404);
    });
  });
});
