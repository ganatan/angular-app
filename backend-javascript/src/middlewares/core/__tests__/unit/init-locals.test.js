import { jest } from '@jest/globals';
import initLocals from '../../init-locals.js';

describe('initLocals Middleware', () => {
  let req, res, next;

  beforeEach(() => {
    req = {};
    res = { locals: undefined };
    next = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should initialize res.locals as an empty object if undefined', () => {
    initLocals(req, res, next);
    expect(res.locals).toEqual({});
    expect(next).toHaveBeenCalled();
  });

  test('should not overwrite existing res.locals', () => {
    res.locals = { existing: true };
    initLocals(req, res, next);
    expect(res.locals).toEqual({ existing: true });
    expect(next).toHaveBeenCalled();
  });
});
