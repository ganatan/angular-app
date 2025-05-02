import express, { Express, Request, Response } from 'express';
import request from 'supertest';
import configureSecurity from '../../security';
import appConfig from '../../../../config/app.config';

describe('Security Middleware', () => {
  let app: Express;

  beforeEach(() => {
    app = express();
    configureSecurity(app);
    app.get('/test', (req: Request, res: Response) => {
      res.status(200).json({ message: 'ok' });
    });
  });

  it('should set security headers and allow CORS', async () => {
    const response = await request(app).get('/test');

    expect(response.status).toBe(200);
    expect(response.headers['x-dns-prefetch-control']).toBe('off');
    expect(response.headers['x-frame-options']).toBe('SAMEORIGIN');
    expect(response.headers['strict-transport-security']).toBeDefined();
    expect(response.headers['x-download-options']).toBe('noopen');
    expect(response.headers['x-content-type-options']).toBe('nosniff');
    expect(response.headers['x-permitted-cross-domain-policies']).toBeDefined();
    expect(response.headers['cross-origin-resource-policy']).toBeDefined();
    expect(response.headers['access-control-allow-origin']).toBe(appConfig.security.corsOrigin);
  });
});
