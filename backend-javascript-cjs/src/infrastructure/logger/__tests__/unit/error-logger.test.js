'use strict';

const errorLogger = require('../../error-logger');
const logger = require('../../logger');

jest.mock('../../logger', () => ({
  error: jest.fn(),
}));

describe('Error Logger Middleware', () => {
  it('logs error with statusCode if provided', () => {
    // Arrange
    const error = new Error('Something went wrong');
    error.statusCode = 500;
    const req = { method: 'POST', originalUrl: '/error-url' };
    const res = {};
    const next = jest.fn();

    // Act
    errorLogger(error, req, res, next);

    // Assert
    expect(logger.error).toHaveBeenCalledWith('Error: Something went wrong', {
      method: 'POST',
      url: '/error-url',
      statusCode: 500,
    });
    expect(next).toHaveBeenCalledWith(error);
  });

  it('logs error with default statusCode 500 if none provided', () => {
    // Arrange
    const error = new Error('Unhandled error');
    const req = { method: 'GET', originalUrl: '/crash' };
    const res = {};
    const next = jest.fn();

    // Act
    errorLogger(error, req, res, next);

    // Assert
    expect(logger.error).toHaveBeenCalledWith('Error: Unhandled error', {
      method: 'GET',
      url: '/crash',
      statusCode: 500,
    });
    expect(next).toHaveBeenCalledWith(error);
  });
});
