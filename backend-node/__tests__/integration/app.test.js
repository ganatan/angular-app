import request from 'supertest';
import express from 'express';

describe('Express application routes', () => {
  let app;

  beforeEach(async () => {
    const { default: appModule } = await import('../../src/app.js');
    app = express();
    app.use(appModule);
  });

  const testEnvironments = ['test', 'development', 'production'];

  testEnvironments.forEach(env => {
    describe(`Environment: ${env}`, () => {
      beforeEach(() => {
        process.env.NODE_ENV = env;
      });

      test(`GET / should return a list of APIs in ${env} environment`, async () => {
        // Arrange

        // Act
        const response = await request(app).get('/');

        // Assert
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('databaseType');
        expect(response.body).toHaveProperty('apis');
        expect(response.body.apis).toBeInstanceOf(Array);

      });
    });
  });
});
