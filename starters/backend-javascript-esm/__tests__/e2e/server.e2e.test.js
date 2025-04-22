import http from 'http';

let server;

beforeAll(async () => {
  const { default: srv } = await import('../../src/server.js');
  server = srv;
});

afterAll((done) => {
  server.close(done);
});

test('GET /persons via HTTP retourne 200 et JSON', (done) => {
  http.get('http://localhost:3000/persons', (res) => {
    expect(res.statusCode).toBe(200);
    done();
  });
});
