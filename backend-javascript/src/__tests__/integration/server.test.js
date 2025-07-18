import request from 'supertest';
import startServer from '../../server.js';

let server;

beforeAll(async () => {
  server = await startServer();
});

afterAll(async () => {
  await server.close();
});

describe('Server', () => {
  it('should respond to GET / with 200', async () => {
    const response = await request(server).get('/');
    expect(response.statusCode).toBe(200);
  });
});
