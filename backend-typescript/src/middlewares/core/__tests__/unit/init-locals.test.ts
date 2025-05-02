import { jest } from '@jest/globals';
import { Request, Response, NextFunction } from 'express';
import initLocals from '../../init-locals';

describe('initLocals Middleware', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let next: NextFunction;

  beforeEach(() => {
    req = {};
    res = { locals: undefined };
    next = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should initialize res.locals as an empty object if undefined', () => {
    initLocals(req as Request, res as Response, next);
    expect(res.locals).toEqual({});
    expect(next).toHaveBeenCalled();
  });

  test('should not overwrite existing res.locals', () => {
    res.locals = { existing: true };
    initLocals(req as Request, res as Response, next);
    expect(res.locals).toEqual({ existing: true });
    expect(next).toHaveBeenCalled();
  });
});
