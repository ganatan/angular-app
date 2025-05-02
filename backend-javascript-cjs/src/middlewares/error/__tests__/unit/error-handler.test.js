'use strict';

const errorHandler = require('../../error-handler');
const logger = require('../../../../infrastructure/logger/logger');

jest.mock('../../../../infrastructure/logger/logger', () => ({
  error: jest.fn(),
}));

describe('errorHandler Middleware', () => {
  let req, res, next;

  beforeEach(() => {
    req = { method: 'GET', originalUrl: '/test-url' };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    next = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const checkResponse = (expectedStatus, expectedError) => {
    expect(res.status).toHaveBeenCalledWith(expectedStatus);
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      error: expect.objectContaining(expectedError),
    });
  };

  it('handles generic error without statusCode', () => {
    // Arrange
    const error = new Error('Something went wrong');

    // Act
    errorHandler(error, req, res, next);

    // Assert
    checkResponse(500, {
      message: 'Something went wrong',
      context: 'GET /test-url',
      details: expect.objectContaining({
        path: '/test-url',
        errorCode: 500,
      }),
    });
    expect(logger.error).toHaveBeenCalledWith('[ERROR] 500: Something went wrong');
    expect(logger.error).toHaveBeenCalledWith('[CONTEXT] GET /test-url');
  });

  it('handles error with specific statusCode', () => {
    // Arrange
    const error = {
      statusCode: 404,
      message: 'Resource not found',
    };

    // Act
    errorHandler(error, req, res, next);

    // Assert
    checkResponse(404, {
      message: 'Resource not found',
      context: 'GET /test-url',
      details: expect.objectContaining({
        path: '/test-url',
        errorCode: 404,
      }),
    });
    expect(logger.error).toHaveBeenCalledWith('[ERROR] 404: Resource not found');
    expect(logger.error).toHaveBeenCalledWith('[CONTEXT] GET /test-url');
  });

  it('handles error with custom context and details', () => {
    // Arrange
    const error = {
      statusCode: 400,
      message: 'Invalid input',
      context: 'POST /custom-url',
      details: {
        path: '/custom-url',
        errorCode: 400,
        timestamp: '2025-04-27T12:00:00.000Z',
      },
    };

    // Act
    errorHandler(error, req, res, next);

    // Assert
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      error: {
        message: 'Invalid input',
        context: 'POST /custom-url',
        details: {
          path: '/custom-url',
          errorCode: 400,
          timestamp: '2025-04-27T12:00:00.000Z',
        },
      },
    });
    expect(logger.error).toHaveBeenCalledWith('[ERROR] 400: Invalid input');
    expect(logger.error).toHaveBeenCalledWith('[CONTEXT] POST /custom-url');
  });

  it('handles error when context results in "null null"', () => {
    // Arrange
    const error = new Error('No context');
    req.method = null;
    req.originalUrl = null;

    // Act
    errorHandler(error, req, res, next);

    // Assert
    expect(logger.error).toHaveBeenCalledWith('[ERROR] 500: No context');
    expect(logger.error).toHaveBeenCalledWith('[CONTEXT] null null');
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        success: false,
        error: expect.objectContaining({
          message: 'No context',
          context: 'null null',
        }),
      }),
    );
  });
});
