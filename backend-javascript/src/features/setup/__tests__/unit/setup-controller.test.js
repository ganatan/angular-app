import SetupController from '../../setup-controller';

describe('SetupController', () => {
  let setupDatabaseServiceMock;
  let setupDomainServiceMock;
  let setupTableServiceMock;
  let setupController;
  let req;
  let res;
  let next;

  beforeEach(() => {
    setupDatabaseServiceMock = { createDatabase: jest.fn() };
    setupDomainServiceMock = { createDomains: jest.fn() };
    setupTableServiceMock = { createTables: jest.fn() };

    setupController = new SetupController(
      setupDatabaseServiceMock,
      setupDomainServiceMock,
      setupTableServiceMock,
    );

    req = {};
    res = { locals: {} };
    next = jest.fn();
  });

  test('should set data in res.locals and call next for createDatabase', async () => {
    const mockData = { message: 'Database created successfully' };
    setupDatabaseServiceMock.createDatabase.mockResolvedValue(mockData);

    await setupController.createDatabase(req, res, next);

    expect(setupDatabaseServiceMock.createDatabase).toHaveBeenCalledWith(req);
    expect(res.locals.data).toEqual(mockData);
    expect(next).toHaveBeenCalled();
  });

  test('should call next with error if createDatabase fails', async () => {
    const mockError = new Error('Database creation failed');
    setupDatabaseServiceMock.createDatabase.mockRejectedValue(mockError);

    await setupController.createDatabase(req, res, next);

    expect(setupDatabaseServiceMock.createDatabase).toHaveBeenCalledWith(req);
    expect(next).toHaveBeenCalledWith(mockError);
  });

  test('should set data in res.locals and call next for createDomains', async () => {
    const mockData = { message: 'Domains created successfully' };
    setupDomainServiceMock.createDomains.mockResolvedValue(mockData);

    await setupController.createDomains(req, res, next);

    expect(setupDomainServiceMock.createDomains).toHaveBeenCalledWith(req);
    expect(res.locals.data).toEqual(mockData);
    expect(next).toHaveBeenCalled();
  });

  test('should call next with error if createDomains fails', async () => {
    const mockError = new Error('Domains creation failed');
    setupDomainServiceMock.createDomains.mockRejectedValue(mockError);

    await setupController.createDomains(req, res, next);

    expect(setupDomainServiceMock.createDomains).toHaveBeenCalledWith(req);
    expect(next).toHaveBeenCalledWith(mockError);
  });

  test('should set data in res.locals and call next for createTables', async () => {
    const mockData = { message: 'Tables created successfully' };
    setupTableServiceMock.createTables.mockResolvedValue(mockData);

    await setupController.createTables(req, res, next);

    expect(setupTableServiceMock.createTables).toHaveBeenCalledWith(req);
    expect(res.locals.data).toEqual(mockData);
    expect(next).toHaveBeenCalled();
  });

  test('should call next with error if createTables fails', async () => {
    const mockError = new Error('Tables creation failed');
    setupTableServiceMock.createTables.mockRejectedValue(mockError);

    await setupController.createTables(req, res, next);

    expect(setupTableServiceMock.createTables).toHaveBeenCalledWith(req);
    expect(next).toHaveBeenCalledWith(mockError);
  });
});
