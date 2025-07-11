import { validateItem } from '../../schemas/profession.schema.js';

describe('validateItem', () => {

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
