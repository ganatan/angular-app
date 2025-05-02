'use strict';

const { validateItem } = require('../../schemas/city.schema');

describe('City Schema - validateItem', () => {
  it('should validate correct data', () => {
    const validData = { name: 'Paris' };

    expect(() => validateItem(validData)).not.toThrow();
  });

  it('should throw error if name is missing', () => {
    const invalidData = {};

    expect(() => validateItem(invalidData)).toThrow('Name is required');
  });

  it('should throw error if name is too short', () => {
    const invalidData = { name: 'A' };

    expect(() => validateItem(invalidData)).toThrow(
      'Name must be a string of at least 2 characters',
    );
  });

  it('should throw error if name is not a string', () => {
    const invalidData = { name: 123 };

    expect(() => validateItem(invalidData)).toThrow('Name must be a string');
  });
});
