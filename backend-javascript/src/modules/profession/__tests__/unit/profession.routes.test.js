import request from 'supertest';
import express from 'express';
import responseHandler from '../../../../middlewares/response/response-handler.js';

describe('Profession Routes', () => {
  let app;
  let mockController;

  beforeEach(() => {
    mockController = {
      getItems: jest.fn((req, res, next) => next()),
      getItemById: jest.fn((req, res, next) => next()),
      createItem: jest.fn((req, res, next) => next()),
      updateItem: jest.fn((req, res, next) => next()),
      deleteItem: jest.fn((req, res, next) => next()),
    };

    app = express();
    app.use(express.json());

    const router = express.Router();
    router.get('/', mockController.getItems, responseHandler);
    router.get('/:id', mockController.getItemById, responseHandler);
    router.post('/', mockController.createItem, responseHandler);
    router.put('/:id', mockController.updateItem, responseHandler);
    router.delete('/:id', mockController.deleteItem, responseHandler);

    app.use('/professions', router);
  });

  // Arrange - Act - Assert
  test('GET /professions should call getItems', async () => {
    // Act
    await request(app).get('/professions');
    // Assert
    expect(mockController.getItems).toHaveBeenCalled();
  });

  test('GET /professions/:id should call getItemById', async () => {
    // Act
    await request(app).get('/professions/1');
    // Assert
    expect(mockController.getItemById).toHaveBeenCalled();
  });

  test('POST /professions should call createItem', async () => {
    // Arrange
    const newProfession = { name: 'New Director' };
    // Act
    await request(app).post('/Professions').send(newProfession);
    // Assert
    expect(mockController.createItem).toHaveBeenCalled();
  });

  test('PUT /professions/:id should call updateItem', async () => {
    // Arrange
    const updatedData = { name: 'Updated Name' };
    // Act
    await request(app).put('/professions/1').send(updatedData);
    // Assert
    expect(mockController.updateItem).toHaveBeenCalled();
  });

  test('DELETE /professions/:id should call deleteItem', async () => {
    // Act
    await request(app).delete('/professions/1');
    // Assert
    expect(mockController.deleteItem).toHaveBeenCalled();
  });
});
