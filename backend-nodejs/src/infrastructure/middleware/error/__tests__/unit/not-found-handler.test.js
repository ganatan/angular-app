import notFoundHandler from '../../not-found-handler';

describe('notFoundHandler', () => {
  test('should call next with error when res.locals.data is undefined', () => {
    // Arrange
    const req = {
      method: 'GET',
      originalUrl: '/unknown-route',
    };
    const res = {
      locals: {}, // no data
    };
    const next = jest.fn();

    // Act
    notFoundHandler(req, res, next);

    // Assert
    expect(next).toHaveBeenCalledWith(expect.objectContaining({
      message: 'Resource not found',
      statusCode: 404,
      context: 'GET /unknown-route',
      details: expect.objectContaining({
        path: '/unknown-route',
        errorCode: 404,
      }),
    }));
  });

  test('should call next without error when res.locals.data is defined', () => {
    // Arrange
    const req = {};
    const res = {
      locals: { data: {} },
    };
    const next = jest.fn();

    // Act
    notFoundHandler(req, res, next);

    // Assert
    expect(next).toHaveBeenCalledWith(); // no argument = no error
  });
});
