'use strict';

const requestLogger = require('../../request-logger');
const logger = require('../../logger');

jest.mock('../../logger', () => ({
  info: jest.fn(),
}));

describe('Request Logger Middleware', () => {
  it('should log the HTTP method and URL', () => {
    const req = { method: 'GET', originalUrl: '/test-url' };
    const res = {};
    const next = jest.fn();

    requestLogger(req, res, next);

    expect(logger.info).toHaveBeenCalledWith('[GET] /test-url');
    expect(next).toHaveBeenCalled();
  });
});
