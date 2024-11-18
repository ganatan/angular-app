'use strict';

const handleResponse = require('../../response-handler');
const handleError = require('../../../errors/error-handler');

describe('Response Handler', () => {
  let mockRequest;
  let mockResponse;

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {
      locals: {},
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  test('should return 200 and data when res.locals.data is set', () => {
    // Arrange
    mockResponse.locals.data = { key: 'value' };

    // Act
    handleResponse(mockRequest, mockResponse);

    // Assert
    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledWith({ key: 'value' });
  });

  test('should return 500 if res.locals.data is not set', () => {
    // Act
    handleResponse(mockRequest, mockResponse);

    // Assert
    expect(mockResponse.status).toHaveBeenCalledWith(500);
    expect(mockResponse.json).toHaveBeenCalledWith({ error: 'Internal Server Error' });
  });
});

describe('Error Handler', () => {
  let mockRequest;
  let mockResponse;
  let mockNext;

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    mockNext = jest.fn();
  });

  test('should handle an error with a message and status', () => {
    // Arrange
    const error = { message: 'Test Error', status: 400 };

    // Act
    handleError(error, mockRequest, mockResponse, mockNext);

    // Assert
    expect(mockResponse.status).toHaveBeenCalledWith(400);
    expect(mockResponse.json).toHaveBeenCalledWith({ error: 'Test Error' });
  });

  test('should handle an error with no status and default to 500', () => {
    // Arrange
    const error = { message: 'Test Error' };

    // Act
    handleError(error, mockRequest, mockResponse, mockNext);

    // Assert
    expect(mockResponse.status).toHaveBeenCalledWith(500);
    expect(mockResponse.json).toHaveBeenCalledWith({ error: 'Test Error' });
  });

  test('should handle an error with no message and default to "Unknown error"', () => {
    // Arrange
    const error = {};

    // Act
    handleError(error, mockRequest, mockResponse, mockNext);

    // Assert
    expect(mockResponse.status).toHaveBeenCalledWith(500);
    expect(mockResponse.json).toHaveBeenCalledWith({ error: 'Internal Server Error' });
  });
});
