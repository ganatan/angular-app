import request from 'supertest';
import app from '../../app.js';
import { BACKEND_MOCK_SUFFIX } from '../../shared/constants/routes/backend-mock.constants.js';

describe('API /persons', () => {
  test('GET /persons should return status 200 and an array of 7 persons', async () => {
    // Arrange: define the endpoint
    const endpoint = '/persons';

    // Act: send the GET request
    const res = await request(app).get(endpoint);

    // Assert: validate response status and structure
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('success', true);
    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body.data).toHaveLength(4);
    expect(res.body.data[0]).toHaveProperty('name', `Steven Spielberg-${BACKEND_MOCK_SUFFIX}`);
  });
});

describe('API / (fallback route)', () => {
  test('GET / should return version and status information', async () => {
    // Arrange: define the root endpoint
    const endpoint = '/';

    // Act: send the GET request
    const res = await request(app).get(endpoint);

    // Assert: validate response status and payload
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('success', true);
    expect(res.body.data).toHaveProperty('app', 'backend-javascript-esm');
    expect(res.body.data).toHaveProperty('version', '1.1.1');
    expect(res.body.data).toHaveProperty('status', 'ok');
  });
});
