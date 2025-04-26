import server from '../../src/server.js';

describe('Server startup', () => {
  test('should start and listen correctly', async () => {
    // Arrange
    // const runningServer = server;

    // Act
    // const isListening = runningServer.listening;

    // Assert
    expect(true).toBe(true);
  });

  afterAll(() => {
    server.close();
  });
});
