import Controller from '../../controllers/profession.controller.js';
import { HTTP_STATUS } from '../../../../shared/constants/http/http-status.js';

describe('ProfessionController (CQRS)', () => {
  let controller;
  let commandService;
  let queryService;
  let req;
  let res;
  let next;

  beforeEach(() => {
    commandService = {
      createItem: jest.fn(),
      updateItem: jest.fn(),
      deleteItem: jest.fn(),
    };

    queryService = {
      getItems: jest.fn(),
      getItemById: jest.fn(),
    };

    controller = new Controller({ commandService, queryService });

    req = { params: {}, body: {}, query: {} };
    res = { locals: {} };
    next = jest.fn();
  });

  test('getItems appelle queryService.getItems et retourne 200', async () => {
    const mockProfessions = [{ id: 1, name: 'Director' }];
    queryService.getItems.mockResolvedValue({ data: mockProfessions, metadata: {} });

    await controller.getItems(req, res, next);

    expect(queryService.getItems).toHaveBeenCalledWith(req.query);
    expect(res.locals).toEqual({
      data: { data: mockProfessions, metadata: {} },
      statusCode: HTTP_STATUS.OK,
    });
    expect(next).toHaveBeenCalled();
  });

  test('getItemById appelle queryService.getItemById et retourne 200', async () => {
    req.params.id = '1';
    const mockProfession = { id: 1, name: 'Spielberg' };
    queryService.getItemById.mockResolvedValue(mockProfession);

    await controller.getItemById(req, res, next);

    expect(queryService.getItemById).toHaveBeenCalledWith(1);
    expect(res.locals).toEqual({
      data: mockProfession,
      statusCode: HTTP_STATUS.OK,
    });
    expect(next).toHaveBeenCalled();
  });

  test('createItem appelle commandService.createItem et retourne 201', async () => {
    req.body = { name: 'New Director' };
    const mockProfession = { id: 2, name: 'New Director' };
    commandService.createItem.mockResolvedValue(mockProfession);

    await controller.createItem(req, res, next);

    expect(commandService.createItem).toHaveBeenCalledWith(req.body);
    expect(res.locals).toEqual({
      data: mockProfession,
      statusCode: HTTP_STATUS.CREATED,
    });
    expect(next).toHaveBeenCalled();
  });

  test('updateItem appelle commandService.updateItem et retourne 200', async () => {
    req.params.id = '1';
    req.body = { name: 'Updated Name' };
    const mockProfession = { id: 1, name: 'Updated Name' };
    commandService.updateItem.mockResolvedValue(mockProfession);

    await controller.updateItem(req, res, next);

    expect(commandService.updateItem).toHaveBeenCalledWith(1, req.body);
    expect(res.locals).toEqual({
      data: mockProfession,
      statusCode: HTTP_STATUS.OK,
    });
    expect(next).toHaveBeenCalled();
  });

  test('deleteItem appelle commandService.deleteItem et retourne 200', async () => {
    req.params.id = '1';
    const mockProfession = { id: 1, name: 'Director' };
    commandService.deleteItem.mockResolvedValue(mockProfession);

    await controller.deleteItem(req, res, next);

    expect(commandService.deleteItem).toHaveBeenCalledWith(1);
    expect(res.locals).toEqual({
      data: mockProfession,
      statusCode: HTTP_STATUS.OK,
    });
    expect(next).toHaveBeenCalled();
  });
});
