import { validateItem } from '../profession.schema.js';

describe('validateItem', () => {
  test('should throw error if name is missing', () => {
    // Arrange
    const invalidData = {};

    // Act & Assert
    expect(() => validateItem(invalidData)).toThrowError('Name is required');
  });

  test('should throw error if name is not a string', () => {
    // Arrange
    const invalidData = { name: 123 };

    // Act & Assert
    expect(() => validateItem(invalidData)).toThrowError('Name must be a string');
  });

  test('should throw error if name is too short', () => {
    // Arrange
    const invalidData = { name: 'A' };

    // Act & Assert
    expect(() => validateItem(invalidData)).toThrowError('Name must be a string of at least 2 characters');
  });

  test('should set status to 400 on validation error', () => {
    // Arrange
    const invalidData = { name: '' };

    // Act
    try {
      validateItem(invalidData);
    } catch (error) {
      // Assert
      expect(error).toBeInstanceOf(Error);
      expect(error.status).toBe(400);
    }
  });
});
