import errorHandler from '../../error-handler';

describe('errorHandler', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('should respond with default 500 and log error if no statusCode', () => {
    // Arrange
    const err = new Error('Unexpected failure');
    const req = {
      method: 'POST',
      originalUrl: '/internal-error',
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const next = jest.fn();

    // Act
    errorHandler(err, req, res, next);

    // Assert
    expect(console.error).toHaveBeenCalledWith('[ERROR] 500: Unexpected failure');
    expect(console.error).toHaveBeenCalledWith('[CONTEXT] POST /internal-error');

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      error: {
        message: 'Unexpected failure',
        context: 'POST /internal-error',
        details: expect.objectContaining({
          path: '/internal-error',
          errorCode: 500,
          timestamp: expect.any(String),
        }),
      },
    });
  });

  test('should use provided error structure', () => {
    // Arrange
    const err = {
      message: 'Custom error',
      statusCode: 400,
      context: 'GET /bad-request',
      details: {
        path: '/bad-request',
        errorCode: 400,
        timestamp: '2024-01-01T00:00:00.000Z',
      },
    };

    const req = {
      method: 'GET',
      originalUrl: '/bad-request',
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const next = jest.fn();

    // Act
    errorHandler(err, req, res, next);

    // Assert
    expect(console.error).toHaveBeenCalledWith('[ERROR] 400: Custom error');
    expect(console.error).toHaveBeenCalledWith('[CONTEXT] GET /bad-request');

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      error: {
        message: 'Custom error',
        context: 'GET /bad-request',
        details: {
          path: '/bad-request',
          errorCode: 400,
          timestamp: '2024-01-01T00:00:00.000Z',
        },
      },
    });
  });
});
