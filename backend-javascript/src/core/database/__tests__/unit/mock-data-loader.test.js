import fs from 'fs';
import { getMockData } from '../../mock-data-loader';

jest.mock('fs');

describe('mock-data-loader', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should return mock data for an existing and valid JSON file', () => {
    // Arrange
    const tableName = 'testTable';
    const mockData = [{ id: 1, name: 'Test' }];
    fs.existsSync.mockReturnValue(true);
    fs.readFileSync.mockReturnValue(JSON.stringify(mockData));

    // Act
    const result = getMockData(tableName);

    // Assert
    expect(fs.existsSync).toHaveBeenCalledWith(expect.stringContaining(`${tableName}-mock.json`));
    expect(fs.readFileSync).toHaveBeenCalledWith(expect.stringContaining(`${tableName}-mock.json`), 'utf-8');
    expect(result).toEqual(mockData);
  });

  test('should return an empty array if JSON file contains invalid data', () => {
    // Arrange
    const tableName = 'invalidTable';
    fs.existsSync.mockReturnValue(true);
    fs.readFileSync.mockReturnValue('This is not valid JSON');
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    // Act
    const result = getMockData(tableName);

    // Assert
    expect(fs.existsSync).toHaveBeenCalledWith(expect.stringContaining(`${tableName}-mock.json`));
    expect(fs.readFileSync).toHaveBeenCalledWith(expect.stringContaining(`${tableName}-mock.json`), 'utf-8');
    expect(consoleErrorSpy).toHaveBeenCalledWith(expect.stringContaining(`Erreur de parsing du fichier JSON pour la table ${tableName}`), expect.any(Error));
    expect(result).toEqual([]);
  });
});
