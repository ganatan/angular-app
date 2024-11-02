import logger from '../../logger';
import { transports } from 'winston';

describe('Logger Configuration', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should add Console transport when NODE_ENV is not production', () => {
    process.env.NODE_ENV = 'development';

    const consoleTransport = logger.transports.find(
      transport => transport instanceof transports.Console,
    );

    expect(consoleTransport).toBeDefined();
    expect(consoleTransport.format).toBeDefined();
    delete process.env.NODE_ENV;
  });

  /*
  test('should not add Console transport when NODE_ENV is production', () => {
    process.env.NODE_ENV = 'production';

    const consoleTransport = logger.transports.find(
      transport => transport instanceof transports.Console
    );

    expect(consoleTransport).toBeUndefined();
  });
  */

});
