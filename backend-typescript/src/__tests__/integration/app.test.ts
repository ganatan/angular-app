import request from 'supertest';
import app from '../../app';

// describe('API /persons', () => {
//   test('GET /persons should return status 200 and an array of 4 persons', async () => {
//     const endpoint = '/persons';

//     const res = await request(app).get(endpoint);
//     console.log('00000000001:' + JSON.stringify(res));
//     expect(res.statusCode).toBe(200);
//     expect(res.body).toHaveProperty('success', true);
//     expect(Array.isArray(res.body.data)).toBe(true);
//     expect(res.body.data).toHaveLength(4);
//     expect(res.body.data[0]).toHaveProperty('name', 'Steven Spielberg');
//   });
// });

describe('API / (fallback route)', () => {
  test('GET / should return version and status information', async () => {
    const endpoint = '/';

    const res = await request(app).get(endpoint);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('success', true);
    expect(res.body.data).toHaveProperty('app', 'backend-typescript');
    expect(res.body.data).toHaveProperty('version', '1.1.1');
    expect(res.body.data).toHaveProperty('status', 'ok');
  });
});
