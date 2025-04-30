import CommandService from '../../services/profession.command.service.js';
import { ITEM_CONSTANTS } from '../../constants/profession.constant.js';

describe('ProfessionCommandService', () => {
  let service;
  let repository;

  beforeEach(() => {
    repository = {
      createItem: jest.fn(),
      updateItem: jest.fn(),
      deleteItem: jest.fn(),
      existsByName: jest.fn(),
    };

    service = new CommandService(repository);
  });

  test('createItem lève une erreur si le nom existe déjà', async () => {
    repository.existsByName.mockResolvedValue(true);

    await expect(service.createItem({ name: 'James Cameron' }))
      .rejects.toThrow(ITEM_CONSTANTS.ALREADY_EXISTS);
  });

  test('createItem crée un item valide', async () => {
    const data = { name: 'Nolan' };
    const created = { id: 1, name: 'Nolan' };

    repository.existsByName.mockResolvedValue(false);
    repository.createItem.mockResolvedValue(created);

    const result = await service.createItem(data);

    expect(result).toEqual(expect.objectContaining({ id: 1, name: 'Nolan' }));
  });

  test('deleteItem supprime un item', async () => {
    const deleted = { id: 1, name: 'Spielberg' };
    repository.deleteItem.mockResolvedValue(deleted);

    const result = await service.deleteItem(1);

    expect(result).toEqual(expect.objectContaining({ id: 1, name: 'Spielberg' }));
  });

  test('deleteItem lève une erreur si non trouvé', async () => {
    repository.deleteItem.mockResolvedValue(null);

    await expect(service.deleteItem(999))
      .rejects.toThrow(ITEM_CONSTANTS.NOT_FOUND);
  });
});
