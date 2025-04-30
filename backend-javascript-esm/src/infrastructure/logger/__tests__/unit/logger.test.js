import { jest } from '@jest/globals';

describe('Logger', () => {
  let originalEnv;

  beforeEach(() => {
    originalEnv = { ...process.env };
    jest.resetModules();
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  it('creates logger without console transport in production', async () => {
    process.env.NODE_ENV = 'production';
    process.env.LOG_LEVEL = 'info';

    const { default: logger } = await import('../../logger.js');

    const hasConsole = logger.transports.some(
      (transport) => transport.constructor.name === 'Console',
    );

    expect(hasConsole).toBe(false);
  });

  it('creates logger with console transport in development', async () => {
    process.env.NODE_ENV = 'development';
    process.env.LOG_LEVEL = 'debug';

    const { default: logger } = await import('../../logger.js');

    const hasConsole = logger.transports.some(
      (transport) => transport.constructor.name === 'Console',
    );

    expect(hasConsole).toBe(true);
  });
});
