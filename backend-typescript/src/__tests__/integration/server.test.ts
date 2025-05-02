import request from 'supertest';
import server from '../../server';

describe('Server', () => {
  afterAll(async () => {
    await new Promise((resolve, reject) => {
      server.close((err?: Error) => {
        if (err) {
          reject(err);
        } else {
          resolve(null);
        }
      });
    });
  });

  it('should respond to GET / with 200', async () => {
    const response = await request(server).get('/');
    expect(response.statusCode).toBe(200);
  });
});
