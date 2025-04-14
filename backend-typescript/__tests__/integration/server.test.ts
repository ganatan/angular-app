import request from 'supertest';
import server from '../../src/server';

describe('Server', () => {
  afterAll((done) => {
    server.close(done);
  });

  test('should respond with 200 on GET /', async () => {
    const response = await request(server).get('/');
    expect(response.status).toBe(200);
  });

  test('should return 404 on unknown route', async () => {
    const response = await request(server).get('/not-found-url');
    expect(response.status).toBe(404);
  });
});
