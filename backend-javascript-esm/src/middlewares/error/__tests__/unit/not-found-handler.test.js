import { jest } from '@jest/globals';
import notFoundHandler from '../../not-found-handler.js';

describe('notFoundHandler Middleware', () => {
  let req, res, next;

  beforeEach(() => {
    req = { method: 'GET', originalUrl: '/non-existing-route' };
    res = { locals: {} };
    next = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('calls next with error if res.locals.data is undefined', () => {
    res.locals.data = undefined;

    notFoundHandler(req, res, next);

    expect(next).toHaveBeenCalledTimes(1);
    const errorArg = next.mock.calls[0][0];
    expect(errorArg).toBeInstanceOf(Error);
    expect(errorArg.message).toBe('Resource not found');
    expect(errorArg.statusCode).toBe(404);
    expect(errorArg.context).toBe('GET /non-existing-route');
    expect(errorArg.details).toEqual(
      expect.objectContaining({
        path: '/non-existing-route',
        errorCode: 404,
      }),
    );
  });

  it('calls next without error if res.locals.data exists', () => {
    res.locals.data = { id: 1, name: 'resource' };

    notFoundHandler(req, res, next);

    expect(next).toHaveBeenCalledTimes(1);
    expect(next).toHaveBeenCalledWith();
  });
});
