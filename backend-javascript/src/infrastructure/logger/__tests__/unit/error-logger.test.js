import errorLogger from '../../error-logger';
import logger from '../../logger';

jest.mock('../../logger');

describe('errorLogger', () => {
  test('should log error and call next with error', () => {
    // Arrange
    const error = new Error('Something went wrong');
    error.statusCode = 500;

    const req = {
      method: 'GET',
      originalUrl: '/test-url',
    };
    const res = {};
    const next = jest.fn();

    // Act
    errorLogger(error, req, res, next);

    // Assert
    expect(logger.error).toHaveBeenCalledWith(
      'Error: Something went wrong',
      {
        method: 'GET',
        url: '/test-url',
        statusCode: 500,
      },
    );

    expect(next).toHaveBeenCalledWith(error);
  });

  test('should default statusCode to 500 if not present', () => {
    // Arrange
    const error = new Error('No status');
    const req = { method: 'POST', originalUrl: '/no-status' };
    const res = {};
    const next = jest.fn();

    // Act
    errorLogger(error, req, res, next);

    // Assert
    expect(logger.error).toHaveBeenCalledWith(
      'Error: No status',
      {
        method: 'POST',
        url: '/no-status',
        statusCode: 500,
      },
    );

    expect(next).toHaveBeenCalledWith(error);
  });
});
