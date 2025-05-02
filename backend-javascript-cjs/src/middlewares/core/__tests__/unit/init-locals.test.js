'use strict';

const initLocals = require('../../init-locals');

describe('initLocals Middleware', () => {
  let req, res, next;

  beforeEach(() => {
    // Arrange
    req = {};
    res = { locals: undefined };
    next = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should initialize res.locals as an empty object if undefined', () => {
    // Act
    initLocals(req, res, next);

    // Assert
    expect(res.locals).toEqual({});
    expect(next).toHaveBeenCalled();
  });

  test('should not overwrite existing res.locals', () => {
    // Arrange
    res.locals = { existing: true };

    // Act
    initLocals(req, res, next);

    // Assert
    expect(res.locals).toEqual({ existing: true });
    expect(next).toHaveBeenCalled();
  });
});
