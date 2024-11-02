import handleError from '../../../errors/error-handler.js';

jest.mock('../../../logger/logger.js', () => ({
  error: jest.fn(),
}));

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

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should handle an error with a message and status', () => {
    const error = { message: 'Test Error', status: 400 };
    handleError(error, mockRequest, mockResponse, mockNext);
    expect(mockResponse.status).toHaveBeenCalledWith(400);
    expect(mockResponse.json).toHaveBeenCalledWith({ error: 'Test Error' });
  });

  test('should handle an error with no status and default to 500', () => {
    const error = { message: 'Test Error' };
    handleError(error, mockRequest, mockResponse, mockNext);
    expect(mockResponse.status).toHaveBeenCalledWith(500);
    expect(mockResponse.json).toHaveBeenCalledWith({ error: 'Test Error' });
  });

  test('should handle an error with no message and default to "Unknown error"', () => {
    const error = {};
    handleError(error, mockRequest, mockResponse, mockNext);
    expect(mockResponse.status).toHaveBeenCalledWith(500);
    expect(mockResponse.json).toHaveBeenCalledWith({ error: 'Internal Server Error' });
  });
});
