import request from 'supertest';
import server from '../../server.js';

describe('Server', () => {
  afterAll(async () => {
    await server.close();
  });

  it('should respond to GET / with 200', async () => {
    const response = await request(server).get('/');
    expect(response.statusCode).toBe(200);
  });
});
