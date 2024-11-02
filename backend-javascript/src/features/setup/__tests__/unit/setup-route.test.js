import request from 'supertest';
import express from 'express';
import setupRouter from '../../setup-route';

jest.mock('../../database-service');
jest.mock('../../domain-service');
jest.mock('../../table-service');

const app = express();
app.use(express.json());
app.use('/setup', setupRouter);

describe('Setup Routes', () => {

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('GET /setup/unknown-route should return 404 error', async () => {
    const response = await request(app).get('/setup/unknown-route');

    expect(response.status).toBe(404);
    expect(response.body).toEqual({ error: 'Url Not Found' });
  });
});
