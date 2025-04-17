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



// import Service from '../../services/profession.service.js';
// import { ITEM_CONSTANTS } from '../../constants/profession.constant.js';
// import * as schema from '../../schemas/profession.schema.js';

// jest.mock('../../schemas/profession.schema.js');

// describe('ProfessionService', () => {
//   let service;
//   let repository;

//   beforeEach(() => {
//     repository = {
//       getItems: jest.fn(),
//       getItemById: jest.fn(),
//       createItem: jest.fn(),
//       updateItem: jest.fn(),
//       deleteItem: jest.fn(),
//       existsByName: jest.fn(),
//     };

//     schema.validateItem.mockImplementation(() => true);

//     service = new Service(repository);
//   });

//   test('getItems retourne la liste des professions', async () => {
//     const expected = [
//       { id: 1, name: 'Steven Spielberg', city: 'Cincinnati' },
//       { id: 2, name: 'Martin Scorsese', city: 'New York' },
//     ];
//     repository.getItems.mockResolvedValue(expected);

//     const result = await service.getItems();

//     expect(result).toEqual(expected);
//     expect(repository.getItems).toHaveBeenCalledTimes(1);
//   });

//   test('getItemById retourne un item existant', async () => {
//     const expected = { id: 1, name: 'Steven Spielberg' };
//     repository.getItemById.mockResolvedValue(expected);

//     const result = await service.getItemById(1);

//     expect(result).toEqual(expected);
//     expect(repository.getItemById).toHaveBeenCalledWith(1);
//   });

//   test('getItemById lève une erreur si non trouvé', async () => {
//     repository.getItemById.mockResolvedValue(null);

//     await expect(service.getItemById(999)).rejects.toThrow(ITEM_CONSTANTS.NOT_FOUND);
//   });

//   test('createItem lève une erreur si le nom existe déjà', async () => {
//     const data = { name: 'James Cameron', city: 'Kapuskasing' };
//     repository.existsByName.mockResolvedValue(true);

//     await expect(service.createItem(data)).rejects.toThrow(ITEM_CONSTANTS.ALREADY_EXISTS);
//   });

//   test('updateItem lève une erreur si non trouvé', async () => {
//     const data = { name: 'X' };
//     repository.updateItem.mockResolvedValue(null);

//     await expect(service.updateItem(999, data)).rejects.toThrow(ITEM_CONSTANTS.NOT_FOUND);
//   });

//   test('deleteItem supprime un item existant', async () => {
//     const expected = { id: 1, name: 'Spielberg' };
//     repository.deleteItem.mockResolvedValue(expected);

//     const result = await service.deleteItem(1);

//     expect(result).toEqual(expected);
//     expect(repository.deleteItem).toHaveBeenCalledWith(1);
//   });

//   test('deleteItem lève une erreur si non trouvé', async () => {
//     repository.deleteItem.mockResolvedValue(null);

//     await expect(service.deleteItem(999)).rejects.toThrow(ITEM_CONSTANTS.NOT_FOUND);
//   });
// });
