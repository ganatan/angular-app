import Controller from '../../profession.controller.js';
import { HTTP_STATUS } from '../../../../shared/constants/http/http-status.js';

describe('ProfessionController', () => {
  let controller;
  let mockService;
  let req;
  let res;
  let next;

  beforeEach(() => {
    mockService = {
      getItems: jest.fn(),
      getItemById: jest.fn(),
      createItem: jest.fn(),
      updateItem: jest.fn(),
      deleteItem: jest.fn(),
    };

    controller = new Controller(mockService);

    req = { params: {}, body: {}, query: {} };
    res = { locals: {} };
    next = jest.fn();
  });

  test('getItems should return all professions', async () => {
    const mockProfessions = [{ id: 1, name: 'Director' }];
    mockService.getItems.mockResolvedValue(mockProfessions);

    await controller.getItems(req, res, next);

    expect(mockService.getItems).toHaveBeenCalledWith(req.query);
    expect(res.locals).toEqual({
      data: mockProfessions,
      statusCode: HTTP_STATUS.OK,
    });
    expect(next).toHaveBeenCalled();
  });

  test('createItem should create a new profession', async () => {
    req.body = { name: 'New Director' };
    const mockProfession = { id: 2, name: 'New Director' };
    mockService.createItem.mockResolvedValue(mockProfession);

    await controller.createItem(req, res, next);

    expect(mockService.createItem).toHaveBeenCalledWith(req.body);
    expect(res.locals).toEqual({
      data: mockProfession,
      statusCode: HTTP_STATUS.CREATED,
    });
    expect(next).toHaveBeenCalled();
  });

  test('updateItem should update an existing profession', async () => {
    req.params.id = '1';
    req.body = { name: 'Updated Name' };
    const mockProfession = { id: 1, name: 'Updated Name' };
    mockService.updateItem.mockResolvedValue(mockProfession);

    await controller.updateItem(req, res, next);

    expect(mockService.updateItem).toHaveBeenCalledWith(1, req.body);
    expect(res.locals).toEqual({
      data: mockProfession,
      statusCode: HTTP_STATUS.OK,
    });
    expect(next).toHaveBeenCalled();
  });

  test('deleteItem should remove a profession', async () => {
    req.params.id = '1';
    const mockProfession = { id: 1, name: 'Director' };
    mockService.deleteItem.mockResolvedValue(mockProfession);

    await controller.deleteItem(req, res, next);

    expect(mockService.deleteItem).toHaveBeenCalledWith(1);
    expect(res.locals).toEqual({
      data: mockProfession,
      statusCode: HTTP_STATUS.OK,
    });
    expect(next).toHaveBeenCalled();
  });
});
