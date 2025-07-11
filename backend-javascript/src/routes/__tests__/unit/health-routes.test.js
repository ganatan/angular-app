import request from 'supertest';
import express from 'express';
import healthRoutes from '../../health.routes.js';

const app = express();
app.use('/', healthRoutes);

describe('Health Routes', () => {
  it('should respond with 200 and { status: "ok" }', async () => {
    const server = request(app);

    const response = await server.get('/health');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: 'ok' });
  });
});
