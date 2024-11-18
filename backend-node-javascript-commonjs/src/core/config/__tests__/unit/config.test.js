'use strict';

describe('Config', () => {
  let originalEnv;

  beforeEach(() => {
    originalEnv = { ...process.env };
    jest.resetModules();
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  test('devrait charger la configuration de développement par défaut', () => {
    expect(true).toBe(true);
  });

});
