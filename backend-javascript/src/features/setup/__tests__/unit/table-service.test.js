import TableService from '../../table-service';

describe('TableService', () => {
  let tableService;

  beforeEach(() => {
    tableService = new TableService();
  });

  test('should return a success message when createTables is called', async () => {
    const result = await tableService.createTables();

    expect(result).toEqual({ message: 'createTables creation completed' });
  });
});
