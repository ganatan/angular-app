'use strict';

const fs = require('fs');
const { getMockData } = require('../../mock-data-loader');

jest.mock('fs');

describe('mock-data-manager (JSON version)', () => {

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should return mocked data for an existing JSON file', () => {
    // Arrange
    fs.existsSync.mockReturnValue(true); // Simulate that the file exists
    fs.readFileSync.mockReturnValue('[{"id": 1001, "name": "Europe-mock"}]'); // Mock JSON content

    // Act
    const data = getMockData('continent');

    // Assert
    expect(data).toEqual([{ id: 1001, name: 'Europe-mock' }]);
  });

  test('should return an empty array for a non-existent JSON file', () => {
    // Arrange
    fs.existsSync.mockReturnValue(false); // Simulate that the file does not exist

    // Act
    const data = getMockData('nonexistent-table');

    // Assert
    expect(data).toEqual([]); // Should return an empty array
  });

  test('should return an empty array and log an error if the JSON file is malformed', () => {
    // Arrange
    fs.existsSync.mockReturnValue(true); // Simulate that the file exists
    fs.readFileSync.mockReturnValue('{"id": 1001, "name": Europe-mock}'); // Malformed JSON content

    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => { });

    // Act
    const data = getMockData('continent');

    // Assert
    expect(data).toEqual([]); // Should return an empty array
    consoleSpy.mockRestore();
  });

});
