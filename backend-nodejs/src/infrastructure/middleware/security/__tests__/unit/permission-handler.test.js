import permissionHandler from '../../permission-handler';
import { HTTP_STATUS } from '../../../../../shared/constants/http/http-status';

describe('permissionHandler', () => {
  test('should allow access if user role is in allowedRoles', () => {
    // Arrange
    const middleware = permissionHandler(['admin', 'editor']);
    const req = { user: { role: 'admin' } };
    const res = {};
    const next = jest.fn();

    // Act
    middleware(req, res, next);

    // Assert
    expect(next).toHaveBeenCalled();
  });

  test('should deny access if user role is not in allowedRoles', () => {
    // Arrange
    const middleware = permissionHandler(['admin']);
    const req = { user: { role: 'viewer' } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const next = jest.fn();

    // Act
    middleware(req, res, next);

    // Assert
    expect(res.status).toHaveBeenCalledWith(HTTP_STATUS.FORBIDDEN);
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      message: 'Access denied',
    });
    expect(next).not.toHaveBeenCalled();
  });

  test('should deny access if user is missing', () => {
    // Arrange
    const middleware = permissionHandler(['admin']);
    const req = {}; // no user
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const next = jest.fn();

    // Act
    middleware(req, res, next);

    // Assert
    expect(res.status).toHaveBeenCalledWith(HTTP_STATUS.FORBIDDEN);
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      message: 'Access denied',
    });
    expect(next).not.toHaveBeenCalled();
  });
});
