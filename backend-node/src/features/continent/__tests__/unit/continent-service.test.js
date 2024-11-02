import ContinentService from '../../continent-service';

describe('Continents Service', () => {
  let mockContinentRepository;
  let continentService;

  beforeEach(() => {
    mockContinentRepository = {
      getItems: jest.fn(),
      getItem: jest.fn(),
      createItem: jest.fn(),
      updateItem: jest.fn(),
      deleteItem: jest.fn(),
    };

    continentService = new ContinentService(mockContinentRepository);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getItems', () => {
    test('should return a list of continents', async () => {
      // Arrange
      const mockContinents = [{ id: 1001, name: 'Africa' }, { id: 1002, name: 'Asia' }];
      mockContinentRepository.getItems.mockResolvedValue(mockContinents);

      // Act
      const result = await continentService.getItems();

      // Assert
      expect(mockContinentRepository.getItems).toHaveBeenCalledTimes(1);
      expect(result).toEqual(mockContinents);
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBe(2);
      expect(result[0]).toHaveProperty('id', 1001);
      expect(result[0]).toHaveProperty('name', 'Africa');
      expect(result[1]).toHaveProperty('id', 1002);
      expect(result[1]).toHaveProperty('name', 'Asia');
    });
  });

  describe('getItem', () => {
    test('should return a specific continent by id', async () => {
      // Arrange
      const mockContinent = { id: 1001, name: 'Africa' };
      mockContinentRepository.getItem.mockResolvedValue(mockContinent);

      // Act
      const result = await continentService.getItem(1001);

      // Assert
      expect(mockContinentRepository.getItem).toHaveBeenCalledWith(1001);
      expect(result).toEqual(mockContinent);
    });

    test('should return null if continent not found', async () => {
      // Arrange
      mockContinentRepository.getItem.mockResolvedValue(null);

      // Act
      const result = await continentService.getItem(9999);

      // Assert
      expect(mockContinentRepository.getItem).toHaveBeenCalledWith(9999);
      expect(result).toBeNull();
    });
  });

  describe('createItem', () => {
    test('should create a new continent', async () => {
      // Arrange
      const newContinentData = { name: 'Europe' };
      const createdContinent = { id: 1003, name: 'Europe' };
      mockContinentRepository.createItem.mockResolvedValue(createdContinent);

      // Act
      const result = await continentService.createItem(newContinentData);

      // Assert
      expect(mockContinentRepository.createItem).toHaveBeenCalledWith(newContinentData);
      expect(result).toEqual(createdContinent);
    });
  });

  describe('updateItem', () => {
    test('should update an existing continent', async () => {
      // Arrange
      const updatedData = { name: 'Updated Africa' };
      const updatedContinent = { id: 1001, name: 'Updated Africa' };
      mockContinentRepository.updateItem.mockResolvedValue(updatedContinent);

      // Act
      const result = await continentService.updateItem(1001, updatedData);

      // Assert
      expect(mockContinentRepository.updateItem).toHaveBeenCalledWith(1001, updatedData);
      expect(result).toEqual(updatedContinent);
    });
  });

  describe('deleteItem', () => {
    test('should delete a continent by id', async () => {
      // Arrange
      mockContinentRepository.deleteItem.mockResolvedValue(true);

      // Act
      const result = await continentService.deleteItem(1001);

      // Assert
      expect(mockContinentRepository.deleteItem).toHaveBeenCalledWith(1001);
      expect(result).toBe(true);
    });
  });
});
