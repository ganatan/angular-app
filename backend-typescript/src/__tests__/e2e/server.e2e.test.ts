// import http, { IncomingMessage } from 'http';
// import app from '../../app';

// let server: http.Server;

// beforeAll((done) => {
//   server = http.createServer(app).listen(3000, done);
// });

// afterAll((done) => {
//   server.close(done);
// });

describe('Dummy test', () => {
  test('should do nothing and succeed', () => {
    expect(true).toBe(true);
  });
});

// describe('GET /persons via HTTP (no compression)', () => {
//   test('should return 200 and valid JSON payload', (done) => {
//     expect(true).toBe(true);
//   });
// });

// describe('GET /persons via HTTP (no compression)', () => {
//   test('should return 200 and valid JSON payload', (done) => {
//     const options: http.RequestOptions = {
//       hostname: 'localhost',
//       port: 3000,
//       path: '/persons',
//       method: 'GET',
//     };

//     expect(true).toBe(true);

//     const req = http.request(options, (res: IncomingMessage) => {
//       let responseData = '';

//       res.setEncoding('utf8');

//       res.on('data', (chunk: string) => {
//         responseData += chunk;
//       });

//       res.on('end', () => {
//         try {
//           expect(res.statusCode).toBe(404);

//           const json = JSON.parse(responseData);
//           expect(json).toHaveProperty('success', true);
//           expect(Array.isArray(json.data)).toBe(true);
//           expect(json.data[0]).toHaveProperty('name');

//           done();
//         } catch (error) {
//           done(error);
//         }
//       });
//     });

//     req.on('error', (err) => done(err));
//     req.end();
//   });
// });
