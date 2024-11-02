import DomainService from '../../domain-service';
import pg from 'pg';

jest.mock('pg');

describe('DomainService', () => {
  let domainService;
  let clientMock;
  let poolMock;

  beforeEach(() => {
    clientMock = {
      query: jest.fn(),
      release: jest.fn(),
      user: 'postgres',
    };

    poolMock = {
      connect: jest.fn().mockResolvedValue(clientMock),
    };

    pg.Pool.mockImplementation(() => poolMock);

    domainService = new DomainService();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should create a single domain successfully', async () => {
    const domainName = 'dom_test';
    const dataType = 'varchar(100)';
    const defaultValue = 'default value';

    clientMock.query.mockResolvedValueOnce();

    const result = await domainService.createOneDomain(clientMock, domainName, dataType, defaultValue);

    expect(clientMock.query).toHaveBeenCalledWith(`CREATE DOMAIN ${domainName} AS ${dataType} DEFAULT ${defaultValue}`);
    expect(result).toEqual({ name: domainName });
  });

  test('should handle error during single domain creation', async () => {
    const domainName = 'dom_test';
    const dataType = 'varchar(100)';
    const defaultValue = 'default value';
    const mockError = new Error('Domain creation error');

    clientMock.query.mockRejectedValueOnce(mockError);

    const result = await domainService.createOneDomain(clientMock, domainName, dataType, defaultValue);

    expect(clientMock.query).toHaveBeenCalledWith(`CREATE DOMAIN ${domainName} AS ${dataType} DEFAULT ${defaultValue}`);
    expect(result).toEqual({});
  });

  test('should create all domains using createDomainsAll', async () => {
    clientMock.query.mockResolvedValue();

    const result = await domainService.createDomainsAll(clientMock);

    expect(clientMock.query).toHaveBeenCalledTimes(20); // Assuming there are 20 domains
    expect(result.length).toBe(20); // Expecting an array of 20 domain creation results
  });
});
