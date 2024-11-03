import ContinentController from '../../continent-controller.js';

describe('Continents Controller', () => {
  let mockContinentService;
  let continentController;
  let mockReq, mockRes, mockNext;

  beforeEach(() => {
    mockContinentService = {
      getItems: jest.fn(),
      getItem: jest.fn(),
    };

    continentController = new ContinentController(mockContinentService);

    mockReq = {};
    mockRes = {
      locals: {},
    };
    mockNext = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getItems', () => {
    test('should get all continents and store in res.locals.data', async () => {
      // Arrange
      const mockContinents = [{ id: 1001, name: 'Africa' }, { id: 1002, name: 'Asia' }];
      mockContinentService.getItems.mockResolvedValue(mockContinents);

      // Act
      await continentController.getItems(mockReq, mockRes, mockNext);

      // Assert
      expect(mockContinentService.getItems).toHaveBeenCalledTimes(1);
      expect(mockRes.locals.data).toEqual(mockContinents);
      expect(mockNext).toHaveBeenCalledWith();
    });

    test('should call next with error when service throws', async () => {
      // Arrange
      const mockError = new Error('Service Error');
      mockContinentService.getItems.mockRejectedValue(mockError);

      // Act
      await continentController.getItems(mockReq, mockRes, mockNext);

      // Assert
      expect(mockContinentService.getItems).toHaveBeenCalledTimes(1);
      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe('getItem', () => {
    test('should get a continent by ID and store in res.locals.data', async () => {
      // Arrange
      const mockContinent = { id: 1001, name: 'Africa' };
      mockContinentService.getItem.mockResolvedValue(mockContinent);
      mockReq.params = { id: 1001 };

      // Act
      await continentController.getItem(mockReq, mockRes, mockNext);

      // Assert
      expect(mockContinentService.getItem).toHaveBeenCalledWith(1001);
      expect(mockRes.locals.data).toEqual(mockContinent);
      expect(mockNext).toHaveBeenCalledWith();
    });

    test('should return 404 when continent is not found', async () => {
      // Arrange
      mockContinentService.getItem.mockResolvedValue(null);
      mockReq.params = { id: 9999 };

      // Act
      await continentController.getItem(mockReq, mockRes, mockNext);

      // Assert
      expect(mockContinentService.getItem).toHaveBeenCalledWith(9999);
      expect(mockNext).toHaveBeenCalledWith({ status: 404, message: 'Continent not found' });
    });

    test('should call next with error when service throws', async () => {
      // Arrange
      const mockError = new Error('Service Error');
      mockContinentService.getItem.mockRejectedValue(mockError);
      mockReq.params = { id: 1001 };

      // Act
      await continentController.getItem(mockReq, mockRes, mockNext);

      // Assert
      expect(mockContinentService.getItem).toHaveBeenCalledWith(1001);
      expect(mockNext).toHaveBeenCalledWith(mockError);
    });

  });

  describe('createItem', () => {
    test('should create a new continent and store in res.locals.data', async () => {
      // Arrange
      const mockContinent = { id: 1003, name: 'Europe' };
      mockContinentService.createItem = jest.fn().mockResolvedValue(mockContinent);
      mockReq.body = { name: 'Europe' };

      // Act
      await continentController.createItem(mockReq, mockRes, mockNext);

      // Assert
      expect(mockContinentService.createItem).toHaveBeenCalledWith(mockReq.body);
      expect(mockRes.locals.data).toEqual(mockContinent);
      expect(mockNext).toHaveBeenCalledWith();
    });

    test('should call next with error when service throws', async () => {
      // Arrange
      const mockError = new Error('Service Error');
      mockContinentService.createItem = jest.fn().mockRejectedValue(mockError);
      mockReq.body = { name: 'Europe' };

      // Act
      await continentController.createItem(mockReq, mockRes, mockNext);

      // Assert
      expect(mockContinentService.createItem).toHaveBeenCalledWith(mockReq.body);
      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe('updateItem', () => {
    test('should update a continent and store in res.locals.data', async () => {
      // Arrange
      const mockContinent = { id: 1001, name: 'Updated Africa' };
      mockContinentService.updateItem = jest.fn().mockResolvedValue(mockContinent);
      mockReq.params = { id: 1001 };
      mockReq.body = { name: 'Updated Africa' };

      // Act
      await continentController.updateItem(mockReq, mockRes, mockNext);

      // Assert
      expect(mockContinentService.updateItem).toHaveBeenCalledWith(1001, mockReq.body);
      expect(mockRes.locals.data).toEqual(mockContinent);
      expect(mockNext).toHaveBeenCalledWith();
    });

    test('should return 404 when continent is not found', async () => {
      // Arrange
      mockContinentService.updateItem = jest.fn().mockResolvedValue(null);
      mockReq.params = { id: 9999 };
      mockReq.body = { name: 'Nonexistent' };

      // Act
      await continentController.updateItem(mockReq, mockRes, mockNext);

      // Assert
      expect(mockContinentService.updateItem).toHaveBeenCalledWith(9999, mockReq.body);
      expect(mockNext).toHaveBeenCalledWith({ status: 404, message: 'Continent not found' });
    });

    test('should call next with error when service throws', async () => {
      // Arrange
      const mockError = new Error('Service Error');
      mockContinentService.updateItem = jest.fn().mockRejectedValue(mockError);
      mockReq.params = { id: 1001 };
      mockReq.body = { name: 'Africa' };

      // Act
      await continentController.updateItem(mockReq, mockRes, mockNext);

      // Assert
      expect(mockContinentService.updateItem).toHaveBeenCalledWith(1001, mockReq.body);
      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe('deleteItem', () => {
    test('should delete a continent and return a success message', async () => {
      // Arrange
      mockContinentService.deleteItem = jest.fn().mockResolvedValue(true);
      mockReq.params = { id: 1001 };

      // Act
      await continentController.deleteItem(mockReq, mockRes, mockNext);

      // Assert
      expect(mockContinentService.deleteItem).toHaveBeenCalledWith(1001);
      expect(mockRes.locals.data).toEqual({ message: 'Continent deleted successfully' });
      expect(mockNext).toHaveBeenCalledWith();
    });

    test('should return 404 when continent is not found', async () => {
      // Arrange
      mockContinentService.deleteItem = jest.fn().mockResolvedValue(false);
      mockReq.params = { id: 9999 };

      // Act
      await continentController.deleteItem(mockReq, mockRes, mockNext);

      // Assert
      expect(mockContinentService.deleteItem).toHaveBeenCalledWith(9999);
      expect(mockNext).toHaveBeenCalledWith({ status: 404, message: 'Continent not found' });
    });

    test('should call next with error when service throws', async () => {
      // Arrange
      const mockError = new Error('Service Error');
      mockContinentService.deleteItem = jest.fn().mockRejectedValue(mockError);
      mockReq.params = { id: 1001 };

      // Act
      await continentController.deleteItem(mockReq, mockRes, mockNext);

      // Assert
      expect(mockContinentService.deleteItem).toHaveBeenCalledWith(1001);
      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

});
