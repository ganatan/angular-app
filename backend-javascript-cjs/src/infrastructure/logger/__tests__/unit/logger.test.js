'use strict';

describe('Logger', () => {
  let originalEnv;

  beforeEach(() => {
    originalEnv = { ...process.env };
    jest.resetModules();
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  it('creates logger without console transport in production', () => {
    // Arrange
    process.env.NODE_ENV = 'production';
    process.env.LOG_LEVEL = 'info';
    const logger = require('../../logger');

    // Act
    const hasConsole = logger.transports.some(
      (transport) => transport.constructor.name === 'Console',
    );

    // Assert
    expect(hasConsole).toBe(false);
  });

  it('creates logger with console transport in development', () => {
    // Arrange
    process.env.NODE_ENV = 'development';
    process.env.LOG_LEVEL = 'debug';
    const logger = require('../../logger');

    // Act
    const hasConsole = logger.transports.some(
      (transport) => transport.constructor.name === 'Console',
    );

    // Assert
    expect(hasConsole).toBe(true);
  });
});
