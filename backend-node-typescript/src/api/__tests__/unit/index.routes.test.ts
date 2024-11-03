import request from 'supertest';
import express from 'express';
import indexRoutes from '../../index.routes';

const app = express();
app.use('/', indexRoutes);

describe('Index Routes', () => {
  it('should return Welcome to the API on GET /', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Welcome to the API');
  });

  it('should return 404 on unknown routes', async () => {
    const response = await request(app).get('/unknown-route');
    expect(response.status).toBe(404);
    expect(response.text).toBe('Route not found');
  });
});
