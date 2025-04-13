import responseHandler from '../response-handler.js';

describe('responseHandler', () => {
  let req;
  let res;
  let next;

  beforeEach(() => {
    req = {};
    res = {
      headersSent: false,
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
      locals: {},
    };
    next = jest.fn();
  });

  test('should call next if headers are already sent', () => {
    // Arrange
    res.headersSent = true;

    // Act
    responseHandler(req, res, next);

    // Assert
    expect(next).toHaveBeenCalled();
    expect(res.status).not.toHaveBeenCalled();
    expect(res.json).not.toHaveBeenCalled();
  });

  test('should respond with status 200 and data if res.locals.data is set', () => {
    // Arrange
    res.locals.data = { name: 'Test' };

    // Act
    responseHandler(req, res, next);

    // Assert
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      success: true,
      data: { name: 'Test' },
    });
    expect(next).toHaveBeenCalled();
  });

  test('should respond with status 200 and metadata if both metadata and data are provided', () => {
    // Arrange
    res.locals.data = {
      metadata: { count: 1 },
      data: [{ id: 1 }],
    };

    // Act
    responseHandler(req, res, next);

    // Assert
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      success: true,
      metadata: { count: 1 },
      data: [{ id: 1 }],
    });
    expect(next).toHaveBeenCalled();
  });

  test('should respect res.locals.statusCode if defined', () => {
    // Arrange
    res.locals.statusCode = 201;
    res.locals.data = { name: 'Created' };

    // Act
    responseHandler(req, res, next);

    // Assert
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      success: true,
      data: { name: 'Created' },
    });
    expect(next).toHaveBeenCalled();
  });

  test('should default to status 200 and null data if res.locals is empty', () => {
    // Arrange

    // Act
    responseHandler(req, res, next);

    // Assert
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      success: true,
      data: null,
    });
    expect(next).toHaveBeenCalled();
  });
});
